// miniprogram/pages/bee/bee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beeTo: [
      // {nickname: '健康码', url: '../index/index'},
      // {nickname: '门架扫描', url: '../lalo/lalo'},
      // {nickname: '门架图形索引', url: '../etcMap/etcMap'},
      // {nickname: '距离定位', url: '../lalo2/lalo2'},
      // {nickname: '门架巡检', url: '../chedaoxunjian/chedaoxunjian'},
      // {nickname: '质量报告', url: '../zhiliangbaogao/zhiliangbaogao'}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getObuBooks',
      data: {tableName: 'bee_to'},
      success: res => {
        //数据落地到内存
        for (let i = 0; i < res.result.data.length; i++) {
          this.data.beeTo.push({nickname: res.result.data[i].nickname, 
            url: res.result.data[i].nav,
            seq: res.result.data[i].seq});
        }
        this.setData({
          beeTo: this.data.beeTo.sort(function(a,b){return a.seq-b.seq})
        })
      },
      fail: err => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取数据，请重试小程序或者检查网络',
        })
      },
      complete: () => {
        wx.hideLoading();
      }
    })
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