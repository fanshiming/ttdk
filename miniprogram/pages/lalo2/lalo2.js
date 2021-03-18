const calculateDistance = require("../../utils/lalo.js").calculateDistance;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 目标的纬度经度
    latitude: 39.885915,
    longitude: 116.312672,
    // 手机当前的纬度经度
    phone_la: 0,
    phone_lo: 0,
    // 手机与目标的距离
    cur_dn: 0,
    nest_interval: 2000,  //扫描间隔 毫秒
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success (res) {
        if (res.authSetting["scope.userLocation"] != true){
          wx.showModal({
            title: "需要授权",
            content: '为了更好的使用体验，请到小程序首页-授权设置-中，授予使用地理位置的权限',
            confirmText: '我知道了',
            showCancel: false,
          })
        }
      },        
    })
    this.startSetInter()
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
    this.endSetInter()
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

  getInputLatitude: function(e){
    if ( parseFloat(e.detail.value) != this.data.latitude){
      this.setData({latitude: parseFloat(e.detail.value)});
    }
  },

  getInputLongitude: function(e){
    if ( parseFloat(e.detail.value) != this.data.longitude){
      this.setData({longitude: parseFloat(e.detail.value)});}
  },

  getNestInterval: function(e){
    if ( parseFloat(e.detail.value) != this.data.nest_interval){
      this.setData({nest_interval: parseInt(e.detail.value)});
      this.endSetInter();
      this.startSetInter();
    }
  },

  // 开始定时
  startSetInter: function () {
    var that = this;
    that.data.setInter = setInterval(function () {      
      let m = that.data.message;
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy

          let dn = calculateDistance(that.data.latitude, that.data.longitude, latitude, longitude)
          console.log("计算距离 ", dn)
          that.setData({
            cur_dn: Math.floor(dn)
          })
        }
       })      
    }, this.data.nest_interval);

  },

  //清除计时器 即清除setInter
  endSetInter: function () {
    var that = this;
    clearInterval(that.data.setInter)
  },

  // 获取当前的纬度和经度
  changeLalo: function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        that.setData({
          latitude: res.latitude,
          longitude:  res.longitude
        })
      }
     })  
  }
})