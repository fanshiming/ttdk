// var blebundle = require("blebundle.js")
import {MmBp} from "blebundle.js"

/**
 *  "1122" -> 0x11 0x22
 * @param { hex string} hexstring 
 */
function ab_from_hexstring(hexstring) {
  let ab = new ArrayBuffer(hexstring.length/2)
  let abView = new Uint8Array(ab)
  for (let i = 0; i < abView.length; i++){
    abView[i] = parseInt(hexstring[i*2])*16+parseInt(hexstring[i*2+1])
  }
  return ab
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[],
  },

  clearmsg: function (params) {
    this.setData({msg:[]})
  },

  clickme: function (params) {
    let payload = "0A0018848004200128023A06"
    this.data.msg.push(MmBp.EmAuthMethod.EAM_macNoEncrypt)
    let x = MmBp.AuthRequest.create({
      BaseRequest: MmBp.BaseRequest.create(),
      ProtoVersion: 0x010203,
      AuthProto: 1,
      AuthMethod: MmBp.EmAuthMethod.EAM_macNoEncrypt,
    })
    let xbufer = MmBp.AuthRequest.encode(x).finish()
    //把Uint8Array (browser) 或者 Buffer (node) 解码成ErrorInfo对象
    // xbufer = ab_from_hexstring(payload)
    // let xv = new Uint8Array(xbufer)
    // let message = MmBp.AuthRequest.decode(xv)
    console.log(xbufer)
    this.setData({msg:this.data.msg})
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

  }
})