// miniprogram/pages/healthBook/healthBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_users_ttdk: '',  // 用户注册基本信息，已sn作为主键，注册信息{}作为value
    books_ttdk: '',       // 用户上传健康码信息，已日期作为主键，所有人的打卡信息[]作为value
    books_ttdk_Set: '',   // 因为{}没有Key in 功能，所以单独设置一个集合，判断 books_ttdk是否存在某主键

    date_current: '',     // 当前要展示打卡信息的日期
    ttdk_current: ''     // 当前要展示的打卡信息[]     
  },

  //字符串转日期  '2020-01-22' -> 2020.1.22
  stringToDate: function (dateStr, separator) {
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
  },

  // 日期转字符串 2020.1.1 -> '2020-01-01'
  dateToString: function (date) {
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    this.data.books_ttdk_Set = new Set()
    //取系统当前日期 作为查询初始日期
    this.setData({date_current: this.dateToString(new Date())})

    //获取 用户信息 打卡信息
    wx.cloud.callFunction({
      name: 'healthBook',
      data: {},
      success: res => {
        //数据落地到内存
        this.data.info_users_ttdk = {}
        for (let i = 0; i < res.result.user.length; i++){
          this.data.info_users_ttdk[res.result.user[i].sn] = res.result.user[i]
        }

        this.data.books_ttdk = {}
        for (let i = 0; i < res.result.book.length; i++){
          let item = res.result.book[i]
          this.data.books_ttdk[item.date] = []
        }
        for (let i = 0; i < res.result.book.length; i++) {
          let item = res.result.book[i]
          this.data.books_ttdk[item.date].push({
            name: this.data.info_users_ttdk[item.sn].name,
            part: this.data.info_users_ttdk[item.sn].part,
            welcome_date: this.data.info_users_ttdk[item.sn].date,
            gender: this.data.info_users_ttdk[item.sn].gender,
            area: this.data.info_users_ttdk[item.sn].area,
            health: item.health,
          })
          this.data.books_ttdk_Set.add(item.date)
        }
     
        this.setData({ ttdk_current: this.data.books_ttdk[this.data.date_current]
        })

      },
      fail: res => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取健康码数据，请重试小程序或者检查网络',
        })
      },
      complete: res => {
        wx.hideLoading()
      }
    })
  },
  
  update_ttdk_current: function(){
    if (this.data.books_ttdk_Set.has(this.data.date_current)){
      this.setData({
        ttdk_current: this.data.books_ttdk[this.data.date_current]
      })
    } else {
      this.setData({
        ttdk_current: '',
      })
    }
  },

  bindDateChange: function(e){
    this.setData({
      date_current: e.detail.value
    })

    this.update_ttdk_current()
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
    let curDate = this.stringToDate(this.data.date_current);
    let prevDate = new Date(curDate.getTime() - 24*60*60*1000);
    this.setData({
      date_current: this.dateToString(prevDate)
    })
    this.update_ttdk_current()
  },
  next: function(){
    let curDate = this.stringToDate(this.data.date_current);
    let nextDate = new Date(curDate.getTime() + 24*60*60*1000);
    this.setData({
      date_current: this.dateToString(nextDate)
    })
    this.update_ttdk_current()
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