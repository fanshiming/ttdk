// miniprogram/pages/lalo2/lalo2.js

function countDist2(lat1, lng1, lat2, lng2) {//纬度1,经度1,纬度2,经度2
      var f = ((lat1 + lat2) / 2) * Math.PI / 180.0;  
      var g = ((lat1 - lat2) / 2) * Math.PI / 180.0;  
      var l = ((lng1 - lng2) / 2) * Math.PI / 180.0;  
      var sg = Math.sin(g);  
      var sl = Math.sin(l);  
      var sf = Math.sin(f);  
      var s, c, w, r, d, h1, h2;  
      var a = 6378137.0;//地球的直径  
      var fl = 1 / 298.257;  
      sg = sg * sg;  
      sl = sl * sl;  
      sf = sf * sf;  
      s = sg * (1 - sl) + (1 - sf) * sl;  
      c = (1 - sg) * (1 - sl) + sf * sl;  
      w = Math.atan(Math.sqrt(s / c));  
      r = Math.sqrt(s * c) / w;  
      d = 2 * w * a;  
      h1 = (3 * r - 1) / 2 / c;  
      h2 = (3 * r + 1) / 2 / s;  
      var num = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg))  
      return num;//返回单位:米  
  }

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
    nest_interval: 4000,  //扫描间隔 毫秒
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

          let dn = countDist2(that.data.latitude, that.data.longitude, latitude, longitude)
        
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
  }
})