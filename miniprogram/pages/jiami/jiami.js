// miniprogram/pages/jiami/jiami.js
const sm4 = require("../../utils/sm4.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sm4_plain: '0123456789ABCDEFFEDCBA9876543210',
    sm4_plain_length: 16,
    sm4_key: '0123456789ABCDEFFEDCBA9876543210',
    sm4_key_length: 16,
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

  plainLength: function(e){
    let _p = e.detail.value
    this.setData({
      sm4_plain: _p,
      sm4_plain_length: _p.length/2,
    })
  },

  keyLength: function(e){
    let _p = e.detail.value
    this.setData({
      sm4_key: _p,
      sm4_key_length: _p.length/2,
    })
  },

  sm4Calc1: function(){
    // 判断明文是否16倍数
    if (this.data.sm4_plain.length%16 != 0){
      this.setData({
        desc: '数据长度应是16的倍数'
      })
      return
    }
    if (this.data.sm4_key.length%16 != 0){
      this.setData({
        desc: '密钥长度应是16'
      })
      return
    }
    let msg = this.data.sm4_plain
    let key = this.data.sm4_key
    // 加密
    let encryptData = sm4.encrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
    this.setData({
      desc: encryptData
    })
  },

  sm4Calc2: function(){
    // 判断密文是否16倍数
    if (this.data.sm4_plain.length%16 != 0){
      this.setData({
        desc: '数据长度应是16的倍数'
      })
      return
    }
    if (this.data.sm4_key.length%16 != 0){
      this.setData({
        desc: '密钥长度应是16'
      })
      return
    }
    let msg = this.data.sm4_plain
    let key = this.data.sm4_key
    // 加密
    let encryptData = sm4.decrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
    this.setData({
      desc: encryptData
    })
  }

})