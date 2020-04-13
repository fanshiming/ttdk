// miniprogram/pages/healthBook/healthBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_users_ttdk: '',
    books_ttdk: '',
    date_current: '',
    listDataSet: '',
    listData:{},
    ttdk_current: ''
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
    this.data.listDataSet = new Set()
    //取系统当前日期 作为查询初始日期
    this.setData({date_current: this.dateToString(new Date())})

    //获取 用户信息 打卡信息
    wx.cloud.callFunction({
      name: 'healthBook',
      data: {},
      success: res => {
        //数据落地到内存
        this.data.books_ttdk = {}
        for (let i = 0; i < res.result.book.length; i++){
          let item = res.result.book[i]
          this.data.books_ttdk[item.date] = []
        }
        for (let i = 0; i < res.result.book.length; i++) {
          let item = res.result.book[i]
          this.data.books_ttdk[item.date].push(item)
        }

        this.data.info_users_ttdk = res.result.user
        console.log('检查打卡表', res.result.user, res.result.book)

        this.data.listDataSet.clear()

        if (!this.data.listDataSet.has(this.data.date_current)){
          console.log('开始注入集合')
          this.data.listData[this.data.date_current] = []
          for (let i = 0; i < this.data.books_ttdk.length; i++){
            let item = this.date.books_ttdk[i]
            if (item.date == this.data.date_current){
              this.data.listData[this.data.date_current].push({
                name: this.data.info_users_ttdk[item.sn].name,
                part: this.data.info_users_ttdk[item.sn].part,
                fanjing_date: this.data.info_users_ttdk[item.sn].date,
                gender: this.data.info_users_ttdk[item.sn].gender,
                area: this.data.info_users_ttdk[item.sn].area,
                health: item.health,
              })
            }
          }
          this.data.listDataSet.add(this.data.date_current)
        }
        this.setData({ ttdk_current: this.data.listData[this.data.date_current]})
      },
      fail: res => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取健康码数据，请重试小程序或者检查网络',
        })
      },})
  },

  onDateChange: function(e){

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