const gantrys = require("../../utils/gantry.js").gantrys;
const calculateDistance = require("../../utils/lalo.js").calculateDistance;
const countDist =  require("../../utils/lalo.js").countDist;
const calcDistance =  require("../../utils/lalo.js").calcDistance;
const getDistance =  require("../../utils/lalo.js").getDistance;

// miniprogram/pages/lalo/lalo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lalo:[{desc: 'countDist', name: 'a'},
    {desc: 'calcDistance', name: 'b'},
    {desc:'getDistance', name: 'c', checked: 'true'},
    ],
    laloF: calculateDistance,
    gaosugonglu: [],  // 高速公路
    gaosu_chosen: '',  // 选定的高速公路
    menjia_chosen: [],   // 选定的高速公路上的门架列表
    menjia:{},
    nest_range: 300000, // 搜寻范围300公里
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
    this.anayGantryList(gantrys);
    this.startSetInter();
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

  /**
   * 选择了不同的计算经纬度距离的版本
   */
  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    let _v = e.detail.value
    switch (_v){
      case 'a':
        this.setData({
        laloF:countDist
        });
        break;
      case 'b':
        this.setData({
          laloF:calcDistance
        });
        break;
      case 'c': 
        this.setData({
          laloF:getDistance
        })
        break;
      default: 
        this.setData({
          laloF:''
        });
    }
    // console.log(this.data.laloF.name)
  },

  // 分解获取高速路门架信息
  anayGantryList: function(theGantry){
    let gaosu = new Set();
    for (let i=0; i < theGantry.length; i++){
      let _gaosu = theGantry[i][3];
      gaosu.add(_gaosu);
    }
    let menjia = {};
    for(let item of gaosu.values()){
      menjia[item] = []
    }

    for (let i=0; i < theGantry.length; i++){
      menjia[theGantry[i][3]].push(theGantry[i])
    }

    this.setData({
      gaosugonglu: Array.from(gaosu),
      menjia: menjia,
      gaosu_chosen:  0,
      menjia_chosen: menjia[Array.from(gaosu)[0]]
    });
  },

  // 开始定时
  startSetInter: function () {
    let that = this;
    that.data.setInter = setInterval(function () { 
      // console.log(that.data.laloF.name)  
      let m = that.data.message;      
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          let _nest_gantry = []
          for (let i = 0; i < that.data.menjia_chosen.length; i++){
            let dn = that.data.laloF(that.data.menjia_chosen[i][0], that.data.menjia_chosen[i][1],latitude, longitude)
            if (dn <= that.data.nest_range){
              let _gantry = []  
              _gantry.push(Math.floor(dn))          
              _gantry.push(that.data.menjia_chosen[i][0])
              _gantry.push(that.data.menjia_chosen[i][1])
              _gantry.push(that.data.menjia_chosen[i][2])            
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
    clearInterval(this.data.setInter)
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
  },
  
  bindGaosugongluChange: function(e) {
    this.setData({
        gaosu_chosen: e.detail.value,
        menjia_chosen: this.data.menjia[this.data.gaosugonglu[e.detail.value]]
    });
},
})
