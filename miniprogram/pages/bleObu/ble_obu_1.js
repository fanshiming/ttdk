// miniprogram/pages/bleObu/ble_obu_operation.js
import {
  gen_ful_uuid,
  service, ch_write, ch_read, ch_indicate,
  ab2hex, inArray,
  tpdu_to_ble_package,
  fragments_ble,qiguai_pkg,
} from "../../utils/bleobu.js";

const bleobu = {
  service: gen_ful_uuid("FEE7"),
  ch_write: gen_ful_uuid("FEC7"),
  ch_read: gen_ful_uuid("FEC9"),
  ch_indicate: gen_ful_uuid("FEC8"),
}


Page({
  /**
   * 页面的初始数据
   */
  data: {
    device: {deviceId: 'hi', name: 'this is name'},
    connected: false,
    service: "",
    ch_write: "",
    ch_read: "",
    ch_indicate: "",
    chs: [],
    services: [],
    msg: [{uuid: "for test", hexdata: "for test 11223344"}],
    ble_frame_SN: 0x00,
    wx_proto_sn_resp: 0x00,
  },

  
  ble_frame_bcc(arr) {
    let thebcc = 0;
    for (let i = 0; i < arr.length; i++){
      thebcc ^= arr[i]
    }
    return thebcc;
  },

  /**
   * 
   * @param {BLE-FRAME-WRITE} req 
   */
  write_ble_obu (arr_ble_frame) {  
    if (arr_ble_frame.byteLength == 0){return}
    wx.writeBLECharacteristicValue({
      deviceId: this.data.device.deviceId,
      serviceId: this.data.service.uuid,
      characteristicId: this.data.ch_write,
      value: arr_ble_frame,
      success:(res) => {
        this.data.msg.push({uuid: this.data.ch_write,
          hexdata: ab2hex(arr_ble_frame),
        })
      },
      fail: (res) => {
        this.data.msg.push({uuid: this.data.ch_write,
          hexdata: 'error' + res.errMsg,
        })
        return
      }
    })
  },

  /**
   * 将数据包req分帧发送
   * @param {array buffer} req 
   */
  ble_obu_fragments(req) {
    if (req.length == 0){return}
    let u8ViewReq = new Uint8Array(req)
    let req_idx_base = 0
    // 拆分为 ble_frame_WIDTH 个字节为一帧
    let fragment_count = Math.floor((req.byteLength)/(this.ble_frame_WIDTH) )
    let fragment_last = (req.byteLength)%(this.ble_frame_WIDTH)  
    let fragment_total = fragment_count + 1
    if (fragment_last == 0){
      fragment_total = fragment_count
    }
    if (fragment_total > 0x70){return}
     
    // 发出第一个帧 
    let bd_len = 0
    if (fragment_count == 0){ bd_len = fragment_last  } else { 
      bd_len = this.ble_frame_WIDTH
    } 
    let buffer_fragment = new ArrayBuffer(bd_len+5)
    let dataView_hd = new DataView(buffer_fragment, 0, 4)
    let dataView_data = new DataView(buffer_fragment, 4, bd_len)
    let dataView_ft = new DataView(buffer_fragment, 4+bd_len, 1) 

    dataView_hd.setUint8(0, this.ble_frame_ST)
    dataView_hd.setUint8(1, this.ble_frame_SN)
    this.ble_frame_SN += 1;
    if (this.ble_frame_SN > 0x0F){ this.ble_frame_SN = 0; }
    dataView_hd.setUint8(2, fragment_total - 1 + 0x80)
    dataView_hd.setUint8(3, bd_len)
    for (let i = 0; i < bd_len; i++){
      dataView_data.setUint8(i, u8ViewReq[req_idx_base+i])
    }
    req_idx_base += bd_len;

    let _u8Arr = new Uint8Array(buffer_fragment)
    let _thebcc = 0
    for (let b = 1; b < _u8Arr.length-1; b++){ _thebcc ^= _u8Arr[b]}
    dataView_ft.setUint8(0, _thebcc)
    this.write_ble_obu(buffer_fragment)

    // 发余下的帧 
    for (let k = 1; k < fragment_count; k++){      
      bd_len = this.ble_frame_WIDTH  
      let buffer_fragment = new ArrayBuffer(bd_len+5)
      let dataView_hd = new DataView(buffer_fragment, 0, 4)
      let dataView_data = new DataView(buffer_fragment, 4, bd_len)
      let dataView_ft = new DataView(buffer_fragment, 4+bd_len, 1) 

      dataView_hd.setUint8(0, this.ble_frame_ST)
      dataView_hd.setUint8(1, this.ble_frame_SN)
      this.ble_frame_SN += 1;
      if (this.ble_frame_SN > 0x0F){ this.ble_frame_SN = 0; }
      dataView_hd.setUint8(2, fragment_total-k-1)
      dataView_hd.setUint8(3, bd_len)
      for (let i = 0; i < bd_len; i++){
        dataView_data.setUint8(i, u8ViewReq[req_idx_base+i])
      }
      req_idx_base += bd_len;
      let _u8Arr = new Uint8Array(buffer_fragment)
      let _thebcc = 0
      for (let b = 1; b < _u8Arr.length-1; b++){ _thebcc ^= _u8Arr[b]}
      dataView_ft.setUint8(0, _thebcc)
      this.write_ble_obu(buffer_fragment)
    }

    // 发最后一帧
    if (fragment_last > 0 && fragment_count >= 1){
      bd_len = fragment_last  
      let buffer_fragment = new ArrayBuffer(bd_len+5)
      let dataView_hd = new DataView(buffer_fragment, 0, 4)
      let dataView_data = new DataView(buffer_fragment, 4, bd_len)
      let dataView_ft = new DataView(buffer_fragment, 4+bd_len, 1) 

      dataView_hd.setUint8(0, this.ble_frame_ST)
      dataView_hd.setUint8(1, this.ble_frame_SN)
      this.ble_frame_SN += 1;
      if (this.ble_frame_SN > 0x0F){ this.ble_frame_SN = 0; }
      dataView_hd.setUint8(2, 0)
      dataView_hd.setUint8(3, bd_len)
      for (let i = 0; i < bd_len; i++){
        dataView_data.setUint8(i, u8ViewReq[req_idx_base+i])
      }
      req_idx_base += bd_len;
      let _u8Arr = new Uint8Array(buffer_fragment)
      let _thebcc = 0
      for (let b = 1; b < _u8Arr.length-1; b++){ _thebcc ^= _u8Arr[b]}
      dataView_ft.setUint8(0, _thebcc)
      this.write_ble_obu(buffer_fragment)
    }

    // 更新消息
    this.setData({
      msg: this.data.msg,
    })
  },

  /**
   * tpdu_arr   type:array
   * @param {将tpdu变为ble包} tpdu_arr 
   */
  ble_obu_pakage (tpdu_arr) {
    let the_tpdu = [0x80, tpdu_arr.length+2, 0x01, tpdu_arr.length, ]
    let ab = new ArrayBuffer(tpdu_arr.length+4)
    let dataViewab = new DataView(ab)
    for (let i = 0; i < the_tpdu.length; i++){
      dataViewab.setUint8(i, the_tpdu[i])
    }
    for (let i = 0; i < tpdu_arr.length; i++){
      dataViewab.setUint8(i+the_tpdu.length, tpdu_arr[i])
    }
    return ab    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    let device = {deviceId: options.deviceId,
      name:options.name,
    }
    this.setData({device:device})
    this.createBLEConnection()
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

  },

  createBLEConnection() {   
    const deviceId = this.data.device.deviceId
    wx.createBLEConnection({
      deviceId,
      success: (res) => {
        this.setData({
          connected: true,
        })
        this.getBLEDeviceServices(deviceId)
      }
    })
  },
  closeBLEConnection() {
    wx.closeBLEConnection({
      deviceId: this.data.device.deviceId,
    })
    this.setData({
      connected: false,
      chs: [],
      services: [],
      service: "",
      ch_indicate: "",
      ch_read: "",
      ch_write: "",
    })
  },
  getBLEDeviceServices(deviceId) {
    wx.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        this.setData({
          services: res.services,
        })

        for (let i = 0; i < res.services.length; i++) {
          if (res.services[i].uuid==bleobu.service) {  
            this.setData({
              service: res.services[i],
            })
            this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
            return
          }
        }
      }
    })
  },
  getBLEDeviceCharacteristics(deviceId, serviceId) {
    wx.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        this.setData({
          chs:res.characteristics,
        })
        for (let i = 0; i < res.characteristics.length; i++) {
          let item = res.characteristics[i]
          switch(item.uuid){
            case bleobu.ch_write:
              if (item.properties.write) {
                this.setData({
                  canWrite: true,
                  ch_write:item.uuid,
                })}
              break;
            case bleobu.ch_read:
              if (item.properties.read) {
                this.setData({
                  ch_read:item.uuid,
                })
                wx.readBLECharacteristicValue({
                  deviceId,
                  serviceId,
                  characteristicId: item.uuid,
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
    wx.onBLECharacteristicValueChange((characteristic) => {      
      let _msg_item = {
        uuid: characteristic.characteristicId,
        hexdata: ab2hex(characteristic.value)
      }
      this.data.msg.push(_msg_item)
    })
  },
  writeBLECharacteristicValue() {
    // 向蓝牙设备发送一个0x00的16进制数据
    let buffer = new ArrayBuffer(1)
    let dataView = new DataView(buffer)
    dataView.setUint8(0, Math.random() * 255 | 0)
    wx.writeBLECharacteristicValue({
      deviceId: this._deviceId,
      serviceId: this._serviceId,
      characteristicId: this._characteristicId,
      value: buffer,
    })
  },

  /**
   * 蓝牙OBU握手操作
   */
  sendA2: function () {    
    let tpdu = new ArrayBuffer(1)
    let vTpdu = new Uint8Array(tpdu)
    vTpdu[0] = 0xa2

    // 实际中没有此编码操作 fuck
    // let abPkg = tpdu_to_ble_package([tpdu, ])

    let ttPkgs = fragments_ble(tpdu)
    console.log(ttPkgs)
    for ( let i = 0; i < ttPkgs.length; i++){
      // update st sn
      let vP = new Uint8Array(ttPkgs[i])
      vP[0] = 0x33
      vP[1] = this.data.ble_frame_SN
      let theBcc = 0
      for (let b = 1; b < vP.length-1; b++){
        theBcc ^= vP[b]
      }
      vP[vP.length-1] = theBcc
      // weixin protoco buf
      let qg = qiguai_pkg(ttPkgs[i])
      // write ble
      for (let k = 0; k < qg.byteLength; k+=20){
        let ab1 = qg.slice(k, k+20)
        console.log('ab1')
        console.log(ab1)
        wx.writeBLECharacteristicValue({
          deviceId: this.data.device.deviceId,
          serviceId: this.data.service.uuid,
          characteristicId: this.data.ch_write,
          value: ab1,
          success:(res) => {
            this.data.msg.push({uuid: this.data.ch_write,
              hexdata: ab2hex(ab1),
            })
          },
          fail: (res) => {
            this.data.msg.push({uuid: this.data.ch_write,
              hexdata: 'error' + res.errMsg,
            })            
          }
        })        
      }
      this.setData({msg:this.data.msg})
    }
  },
})