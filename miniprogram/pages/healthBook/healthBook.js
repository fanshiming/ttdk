//字符串转日期  '2020-01-22' -> 2020.1.22
function stringToDate(dateStr, separator) {
  if (!separator) {
    separator = "-";
  }
  var dateArr = dateStr.split(separator);
  var year = parseInt(dateArr[0]);
  var month;
  //处理月份为04这样的情况                         
  if (dateArr[1].indexOf("0") == 0) {
    month = parseInt(dateArr[1].substring(1));
  } else {
    month = parseInt(dateArr[1]);
  }
  var day = parseInt(dateArr[2]);
  var date = new Date(year, month - 1, day);
  return date;
};

// 日期转字符串 2020.1.1 -> '2020-01-01'
function dateToString(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString();
  var day = (date.getDate()).toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  return dateTime;
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_users_ttdk: 'new Map()',  // 用户注册基本信息，以sn作为主键，注册信息{}作为value
    books_ttdk: 'new Map()',       // 用户上传健康码信息，以日期作为主键，所有人的打卡信息[]作为value

    date_current: '',     // 当前要展示打卡信息的日期
    ttdk_current: []     // 当前要展示的打卡信息[]     
  },

  getUsersInfo: function() {
    wx.cloud.callFunction({
      name: 'getUsersInfo',
      data: {},
      success: res => {
        //数据落地到内存
        for (let i = 0; i < res.result.data.length; i++) {
          this.data.info_users_ttdk.set(res.result.data[i].sn, res.result.data[i]);
        }
      },
      fail: err => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取注册数据，请重试小程序或者检查网络',
        })
      }
    })
  },

  // the_date_string: '2020-04-20'
  getHealthBook: function(the_date_string) {  
    this.setData({
      ttdk_current: [],
    })
    if (!this.data.books_ttdk.has(this.data.date_current)){
      wx.showLoading({
        mask: true,
      })
      wx.cloud.callFunction({
        name: 'getHealthBook',
        data: {the_date_string: the_date_string},
        success: res => {
          let the_rows = []
          for (let i = 0; i < res.result.data.length; i++) {
            let item = res.result.data[i]
            the_rows.push({
              name: this.data.info_users_ttdk.get(item.sn).name,
              part: this.data.info_users_ttdk.get(item.sn).part,
              welcome_date: this.data.info_users_ttdk.get(item.sn).date,
              gender: this.data.info_users_ttdk.get(item.sn).gender,
              area: this.data.info_users_ttdk.get(item.sn).area,
              health: item.health,
              phone: this.data.info_users_ttdk.get(item.sn).phone
            })
          }
          this.data.books_ttdk.set(the_date_string, the_rows);
          let a = this.data.books_ttdk.get(the_date_string)
          this.setData({
            ttdk_current: a,
          });
          
        },
        fail: err => {
          wx.showModal({
            showCancel: false,
            title: '',
            content: '本次未能获取健康码数据，请重试小程序或者检查网络:' +err,
          })
        },
        complete: () => { wx.hideLoading();}
    })} else {
    let a = this.data.books_ttdk.get(the_date_string);
    this.setData({
      ttdk_current: a,
    });}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.info_users_ttdk = new Map();
    this.data.books_ttdk = new Map();
    wx.showLoading({
      mask: true
    });
    wx.cloud.callFunction({
      name: 'getUsersInfo',
      data: {},
      success: res => {
        //数据落地到内存
        for (let i = 0; i < res.result.data.length; i++) {
          this.data.info_users_ttdk.set(res.result.data[i].sn, res.result.data[i]);
        }
        //取系统当前日期 作为查询初始日期
        let the_date = dateToString(new Date());
        this.setData({ date_current:  the_date});
        this.update_ttdk_current(the_date);
      },
      fail: err => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取注册数据，请重试小程序或者检查网络',
        })
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  },
  
  update_ttdk_current: function(the_date){
    this.getHealthBook(the_date);
  },

  bindDateChange: function(e){
    this.setData({
      date_current: e.detail.value
    })
    this.update_ttdk_current(e.detail.value)
  },

  showHealth: function(e) {
    wx.navigateTo({
      url: '../showHealth/showHealth',
      success: function(res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: {health:e.target.id} })
      }
  })
  },

  prev: function(){
    let curDate = stringToDate(this.data.date_current);
    let prevDate = new Date(curDate.getTime() - 24*60*60*1000);
    this.setData({
      date_current: dateToString(prevDate)
    })
    this.update_ttdk_current(dateToString(prevDate))
  },
  next: function(){
    let curDate = stringToDate(this.data.date_current);
    let nextDate = new Date(curDate.getTime() + 24*60*60*1000);
    this.setData({
      date_current: dateToString(nextDate)
    })
    this.update_ttdk_current(dateToString(nextDate))
  },

  callMe: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phone
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

})