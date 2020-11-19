// miniprogram/pages/bee/bee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beeTo: [
      {nickname: '健康码', url: '../index/index'},
      {nickname: '门架扫描', url: '../lalo/lalo'},
      {nickname: '距离定位', url: '../lalo2/lalo2'},
      {nickname: '门架巡检', url: '../chedaoxunjian/chedaoxunjian'},
      {nickname: '质量报告', url: '../zhiliangbaogao/zhiliangbaogao'},
    ],
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

  nav_to_nurl: function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.nurl,
    })
  },

  openSetting: function(){
    wx.openSetting()
  }
})