import {
  service, ch_write, ch_read, ch_indicate,
  ab2hex,ab_from_hexstring,
} from "../../utils/util.js";


let bleobu = {
  service: service, ch_write:ch_write, ch_read:ch_read, ch_indicate: ch_indicate,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device: {deviceId: '', name: ''},
    connected: false,
    service: false,
    ch_write: false,
    ch_read: false,
    messages: [],
  },
  // 来自ch_read的数据
  buffer: new ArrayBuffer(256),
  buffer_idx: 0,  
  msg: [], 
  auth: false,
  init: false,

  ble_obu_push_recv: function (res) {
    // 截取有效回复
    let respective = res.slice(25,-1)
    this.msg.push(ab2hex(respective).toUpperCase())
    this.setData({messages:this.msg})
  },
  ble_data_process: function(ab){
    // let msg = "recv-package: " + ab2hex(ab)
    // let _msg = this.data.msg.push(msg)
    // this.setData({msg:_msg})
    let abView = new Uint8Array(ab)
    let ncmdid = abView[4]*256+abView[5]
    switch ( ncmdid){
      case 0x2711:    // auth
        let resp_auth = ab_from_hexstring("FE01000E4E2158A40A0208001200")
        let resp_auth_v = new Uint8Array(resp_auth)
        resp_auth_v[6] = abView[20]
        resp_auth_v[7] = abView[21]
        this.auth = true
        // this.setData({auth: true})
        this.writeBLECharacteristicValue(resp_auth)
        break;
      case 0x2713:    // init
        this.init = true
        // this.setData({init: true})
        let resp_init = ab_from_hexstring("FE0100134E2300020A02080010B42418F8AC01")
        this.writeBLECharacteristicValue(resp_init)
        wx.hideLoading()
        wx.showToast({
          title: '链路成功',
          icon: 'success',
        })
        break;
      case 0x2712:    // push_recv   push_ncmdid(7531)->push_recv_ncmdid(2712) 
        this.ble_obu_push_recv(ab)
        break;
      default:
        break;
    }
  },

  buffer_push: function (res) {    
    // let msg = ab2hex(res.value)
    // 下面这行总是偶然报 msg.push is not a function
    // let _msg = this.data.msg.push(msg)  
    // this.setData({msg:_msg})  
    if (res.characteristicId != this.data.ch_indicate) {
      console.log("whta the fuck")
      console.log(res.characteristicId)
      return}     
    let resV = new Uint8Array(res.value)
    let cpLength = resV.length
    let bufferView = new Uint8Array(this.buffer)
    if (cpLength > bufferView.length-this.buffer_idx){
      cpLength = bufferView.length-this.buffer_idx
    }
    for (let i=0; i < cpLength; i++){
      bufferView[this.buffer_idx++] = resV[i]
    }
    // console.log(this.buffer_idx + ":buffer:" + ab2hex(this.buffer))
    if (this.buffer_idx < 8) {return}
    if (bufferView[0] != 0xfe || bufferView[1]!= 0x01) {this.buffer_idx=0; return}
    if (bufferView[2]*256+bufferView[3] > this.buffer_idx) {return}    
    let td = this.buffer.slice(0, bufferView[2]*256+bufferView[3])
    this.buffer_idx = 0 
    // console.log('to_state_td: ' + ab2hex(td))
    this.ble_data_process(td)
  },

  createBLEConnection: function (deviceId) {   
    wx.createBLEConnection({
      deviceId,
      timeout: 1500,
      success: (res) => {
        this.setData({
          connected: true,
        })
        this.getBLEDeviceServices(deviceId)
      },
      fail: (res) => {
        console.log("fail")
        console.log(res)
        wx.hideLoading()
        wx.showModal({
          title: "无法连接",
          content: '请确认蓝牙OBU处于开启状态',
          confirmText: "我知道了",
          showCancel: false,
          success: (res) => {
            if (res.confirm) {
              wx.navigateBack()
            } 
          }
        })
      }
    })
  },
  closeBLEConnection: function() {
    wx.closeBLEConnection({
      deviceId: this.data.device.deviceId,
    })
    this.setData({
      connected: false,
      service: false,
      ch_indicate: false,
      ch_read: false,
      ch_write: false,
    })
    this.auth = false
    this.init = false
  },
  getBLEDeviceServices(deviceId) {
    wx.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        for (let i = 0; i < res.services.length; i++) {
          if (res.services[i].uuid==bleobu.service) {  
            this.setData({
              service: res.services[i].uuid,
            })
            this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
            return
          }
        }
      },
      fail: (res) => {
        wx.showModal({
          cancelColor: 'cancelColor',
          title: "该设备未提供蓝牙OBU的功能",
          content: res.errMsg
        })
      }
    })
  },
  getBLEDeviceCharacteristics(deviceId, serviceId) {
    wx.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        for (let i = 0; i < res.characteristics.length; i++) {
          let item = res.characteristics[i]
          switch(item.uuid){
            case bleobu.ch_write:
              if (item.properties.write) {
                this.setData({
                  ch_write:item.uuid,
                })}
              break;
            case bleobu.ch_read:
              if (item.properties.read) {
                this.setData({
                  ch_read:item.uuid,
                })                
              }
              break;
            case bleobu.ch_indicate:
              if (item.properties.notify || item.properties.indicate) {
                this.setData({
                  ch_indicate:item.uuid,
                })
                wx.notifyBLECharacteristicValueChange({
                  deviceId,
                  serviceId,
                  characteristicId: item.uuid,
                  state: true,
                })
              }
              break;
            default:
              break;
          }
        }
      },
      fail(res) {
        console.error('getBLEDeviceCharacteristics', res)
      }
    })
    // 操作之前先监听，保证第一时间获取数据
    wx.onBLECharacteristicValueChange(this.buffer_push)
  },

  onLoad_ble_obu_auth_init: function (deviceId) {
    this.ble_obu_state = this.ble_obu_state_auth    
    // ble connection
    this.createBLEConnection(deviceId)
  },

  /**
   * 
   * @param {arrayBuffer} ab 
   */
  writeBLECharacteristicValue: function(ab) {        
    for (let k = 0; k < ab.byteLength; k+=20){
      let theab = ab.slice(k, k+20)
      wx.writeBLECharacteristicValue({
        deviceId: this.data.device.deviceId,
        serviceId: this.data.service,
        characteristicId: this.data.ch_write,
        value: theab,
        fail: (res) => {
          wx.showModal({
            title: 'write ble faile',
            content: res.errMsg,}
          )
          return
        },
      })      
    }
  },

  /**
   * ESAM复位  AA指令
   */
  tmss: function() {
    // 如下代码可用 
    //  为演示简单不加入此功能
    // this.ble_obu_push_recv = (res) => {
    //   this.ble_obu_push_recv = null
    //   let msg = ab2hex(res)
    //   console.log("tmss:"+msg)
    //   this.data.msg.push(msg)
    //   this.setData({msg:this.data.msg})
    // }
    let s = "FE010014753100000A001206330B8001AA201800"
    let x = ab_from_hexstring(s)
    this.msg.push("ESAM复位")
    this.writeBLECharacteristicValue(x)
    this.setData({
      messages: this.msg
    })
  },

  read_sys_info: function() {
    let s = "FE010020753100000A001212330D800DAC0009008007010500B0810063F41800"
    this.msg.push("读系统信息(AC)")
    this.setData({
      messages:this.msg
    })
    let x = ab_from_hexstring(s)
    this.writeBLECharacteristicValue(x)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      mask: true,
      title: '连接中.....',
    })
    
    setTimeout( (res) => {   
      if (this.init){return}   
      wx.hideLoading()
      wx.showModal({
        title: this.init,
        content: '建立链路超时（3S）',
        confirmText: "返回",
        showCancel: false,
        success (res) {
          if (res.confirm) {
            wx.navigateBack()
          } 
        }
      })
    }, 3000)
    let device = {deviceId: options.deviceId, name:options.name, }
    this.setData({
      device: device,
    })
    this.onLoad_ble_obu_auth_init(this.data.device.deviceId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.closeBLEConnection()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})