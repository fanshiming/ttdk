const gantrys = require("../../utils/gantry.js").gantrys;
const calculateDistance = require("../../utils/lalo.js").calculateDistance;


// miniprogram/pages/lalo/lalo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nest_range: 12000, // 搜寻范围12公里
    nest_gantry: [],  // 最近门架信息
    nest_count: 8, // 搜寻最大数量
    nest_interval: 2000, //扫描间隔 毫秒
    latitude: 0,
    lotitude: 0,
    setInterNum: ''
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
          let _nest_gantry = []
          let _cur_count = 0;
          for (var i = 0; i < gantrys.length; i++){
            let dn = calculateDistance(gantrys[i][0], gantrys[i][1],latitude, longitude)
            if (dn <= that.data.nest_range){
              let _gantry = []  
              _gantry.push(Math.floor(dn))          
              _gantry.push(gantrys[i][0])
              _gantry.push(gantrys[i][1])
              _gantry.push(gantrys[i][2])            
              _nest_gantry.push(_gantry)
            }            
          }
          _nest_gantry.sort(function(a,b){return a[0]-b[0]});
                  
          that.setData({
            nest_gantry: _nest_gantry.slice(0, that.data.nest_count)
          })
        }
       })      
    }, that.data.nest_interval);

  },

  //清除计时器 即清除setInter
  endSetInter: function () {
    var that = this;
    clearInterval(that.data.setInter)
  },

  getInputNestRange: function(e){
    this.setData({nest_range: e.detail.value})
  },

  getInputNestCount: function(e){
    this.setData({nest_count: e.detail.value})
  },

  getInputNestInterval: function(e){
    this.setData({nest_interval: e.detail.value})
    this.endSetInter()
    this.startSetInter()
  }  
})
