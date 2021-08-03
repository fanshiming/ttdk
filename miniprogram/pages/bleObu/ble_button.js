// miniprogram/pages/bleObu/ble_button.js
import {ab2hex, inArray, tpdu_to_ble_package,fragments_ble, } from "../../utils/bleobu.js";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[],
  },

  test1: function (params) {
    let x = new ArrayBuffer(16)
    let xView = new Uint8Array(x)
    for (let i =0; i < xView.length; i++){ xView[i] = i}
    this.data.msg.push(ab2hex(x))
    let nx = fragments_ble(x)
    console.log(nx)
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