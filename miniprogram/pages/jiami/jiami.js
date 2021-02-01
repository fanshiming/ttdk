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
      sm4_plain_length: _p.replace(/[^a-f,^A-F,^0-9]/g,"").length/2,
    })
  },

  keyLength: function(e){
    let _p = e.detail.value
    this.setData({
      sm4_key: _p,
      sm4_key_length: _p.replace(/[^a-f,^A-F,^0-9]/g,"").length/2,
    })
  },

  sm4Calc1: function(){
    let msg = this.data.sm4_plain.replace(/[^a-f,^A-F,^0-9]/g,"");
    let key = this.data.sm4_key.replace(/[^a-f,^A-F,^0-9]/g,"");
    
    // 判断
    if (msg.length % 2 != 0){
      this.setData({
        desc: '请核对输入的待加密解密Hex字符串'
      })
      return
    }
    if (key.length != 16*2){
      this.setData({
        desc: '请核对输入的密钥长度为16字节'
      })
      return
    }
    // 加密
    let _desc = "加密\r\n"
    let the_data = sm4.encrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
    this.setData({
      desc: _desc + the_data
    })
  },

  sm4Calc2: function(){
    let msg = this.data.sm4_plain.replace(/[^a-f,^A-F,^0-9]/g,"");
    let key = this.data.sm4_key.replace(/[^a-f,^A-F,^0-9]/g,"");
    
    // 判断
    if (msg.length % 2 != 0){
      this.setData({
        desc: '请核对输入的待加密解密Hex字符串'
      })
      return
    }
    if (key.length != 16*2){
      this.setData({
        desc: '请核对输入的密钥长度为16字节'
      })
      return
    }
    // 解密
    let _desc = "解密\r\n"
    let the_data = sm4.decrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
    this.setData({
      desc: _desc + the_data
    })
  }

})