// pages/bleObu/msg_warn.js
// import {service, ch_write, ch_read, ch_indicate} from '../../utils/bleobu.js';
import { common } from "./bundle.js";
// var protobuf = require("../../utils/protobuf.js");
// import { AwesomeMessage } from "../../utils/compiled.js";
// var awesomeConfig = require('./proto.js');

function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i;
    }
  }
  return -1;
}

// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  test1: function (params) {    
    this.data.msg.push({name: "service", value: "service"})  
    let buffer = new ArrayBuffer(10);
    let bView=  new Uint8Array(buffer)
    bView[0] = 1
    bView[1] = 2
    bView[2] = 3
    bView[3] = 4
    bView[4] = 5
    bView[5] = 6
    let theinfo = {
      errorCode: 0,
      errorMessage: bView.slice(0, 6),
    }
    console.log(theinfo)
    let errinfo = common.ErrorInfo.create(theinfo)
    let errBuffer = common.ErrorInfo.encode(errinfo).finish()
    //把Uint8Array (browser) 或者 Buffer (node) 解码成ErrorInfo对象
    let message = common.ErrorInfo.decode(errBuffer)
    // //转化为一个对象
    let obj = common.ErrorInfo.toObject(message, {
      enums: String, // enums as string names
      longs: String, // longs as strings (requires long.js)
      defaults: true,
    })
    console.log(message)
    console.log(obj);    
    this.data.msg.push({name: "message", value: ab2hex(message.errorMessage)})
    this.setData({msg: this.data.msg})
  }
})