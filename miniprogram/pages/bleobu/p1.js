const app = getApp()
import {inArray, ab2hex} from "../../utils/util.js";


Page({
  data: {
    devices: [],
  },
  openBluetoothAdapter() {
    wx.openBluetoothAdapter({
      success: (res) => {
        // console.log('openBluetoothAdapter success', res)
        this.startBluetoothDevicesDiscovery()
      },
      fail: (res) => {
        if (res.errCode === 10001) {
          wx.onBluetoothAdapterStateChange(function (res) {
            // console.log('onBluetoothAdapterStateChange', res)
            if (res.available) {
              this.startBluetoothDevicesDiscovery()
            }
          })
        }
      }
    })
  },
  getBluetoothAdapterState() {
    wx.getBluetoothAdapterState({
      success: (res) => {
        // console.log('getBluetoothAdapterState', res)
        if (res.discovering) {
          this.onBluetoothDeviceFound()
        } else if (res.available) {
          this.startBluetoothDevicesDiscovery()
        }
      }
    })
  },
  startBluetoothDevicesDiscovery() {
    if (this._discoveryStarted) {
      return
    }
    this._discoveryStarted = true
    wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      success: (res) => {
        // console.log('startBluetoothDevicesDiscovery success', res)
        this.onBluetoothDeviceFound()
      },
    })
  },
  stopBluetoothDevicesDiscovery() {
    wx.stopBluetoothDevicesDiscovery()
  },
  onBluetoothDeviceFound() {
    wx.onBluetoothDeviceFound((res) => {
      res.devices.forEach(device => {
        if (!device.name && !device.localName) {
          return
        }
        if (device.name.slice(0,3).toUpperCase() == 'ETC'){
          device.etcbadge = "OBU"
        } else {device.etcbadge = ""}
        const foundDevices = this.data.devices
        const idx = inArray(foundDevices, 'deviceId', device.deviceId)
        const data = {}
        if (idx === -1) {
          data[`devices[${foundDevices.length}]`] = device
        } else {
          data[`devices[${idx}]`] = device
        }
        
        this.setData(data)
      })
    })
  },
  
  getBLEDeviceServices(deviceId) {
    wx.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        for (let i = 0; i < res.services.length; i++) {
          if (res.services[i].isPrimary) {
            this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
            return
          }
        }
      }
    })
  },
 
  closeBluetoothAdapter() {
    wx.closeBluetoothAdapter()
    this._discoveryStarted = false
  },

  navigateToPage(event){
    if (event.currentTarget.dataset.etcbadge != 'OBU'){
      wx.showModal({
        title: "提示",
        content: "该设备没有广播ETC标志，继续操作可能会有异常情况发生",
        cancelText: "我在想想",
        confirmText: "依然继续",
        success: (res) => {
          if (res.confirm) {
            // console.log('用户点击确定')
            this.stopBluetoothDevicesDiscovery()
            wx.navigateTo({
              url: "p2?deviceId="+event.currentTarget.dataset.deviceid+"&name="+
              event.currentTarget.dataset.name,
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')            
          }
        }
      })
    } else {
      this.stopBluetoothDevicesDiscovery()
      wx.navigateTo({
        url: "p2?deviceId="+event.currentTarget.dataset.deviceid+"&name="+
        event.currentTarget.dataset.name,
      })
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync()
    if (sysInfo.platform != "ios"){
      wx.showToast({
        icon: "none",
        title: '本页面仅在 ios 系统进行过测试',
        duration: 2000,
      })
    }
  },
})
