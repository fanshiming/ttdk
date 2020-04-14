//index.js
const app = getApp()

Page({
  data: {
    signin: false,
    logged: false,
    userInfo: '',
    signBook: '',
    openid: '',
    unionid: '',
    healthcode_fileid: '',
    demo6_days_style: '',

    health_fix: ''
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

  next: function(event){
    this.signBookShow(event.detail.currentYear, event.detail.currentMonth)
  },
  //点击显示健康码
  dayClick: function (event) {
    /** 不显示
    this.setData({
      health_fix: ''
    })
    let file_id = '';
    for (let i = 0; i < this.data.signBook.length; i++){
      let the_date = this.data.signBook[i].date
      if (event.detail.year == the_date.getFullYear() &&
        event.detail.month == (the_date.getMonth()+1) &&
        event.detail.day == the_date.getDate()
      ){
        this.setData({
          health_fix: this.data.signBook[i].healthcode_fileid
        })
        break;
      }
    }
    */
  },

  //设置日历打卡信息  month=1时 date().month=0
  signBookShow: function(year, month){
    let demo6_days_style = [];
    for (let i = 0; i < this.data.signBook.length; i++){
      let the_date = this.data.signBook[i].date      
      if (the_date.getFullYear() != year || (the_date.getMonth()+1) != month){
        continue;
      }

      if (the_date.getDate() == 4){
        demo6_days_style.push({ 
          month: 'current', day: the_date.getDate(), color: 'white', background: '#f5a8f0'})
      } else if (the_date.getDate() == 14) {
        demo6_days_style.push({ 
          month: 'current', day: the_date.getDate(), color: 'white', background: '#3c5281'})
      } else {
        demo6_days_style.push({ 
          month: 'current', day: the_date.getDate(), color: 'white', background: '#84e7d0' })
      }
    }
    this.setData({
      demo6_days_style: demo6_days_style
    })
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    //获取用户注册信息
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        if (res.result.userInfo.length == 0){
          app.globalData.logged = false
          console.log('没有查找到用户信息，跳转到注册页面')
          wx.navigateTo({
            url: '../sign/sign',
        })} 
        else{
          this.setData({
            logged: true,
            userInfo: res.result.userInfo[0],
            openid: res.result.openid,
            unionid: res.result.unionid
          })
        
          let signBook = []
          for (let i = 0; i < res.result.signBook.length; i++){
            signBook.push({
              date: this.stringToDate(res.result.signBook[i].date, '-'), 
              healthcode_fileid: res.result.signBook[i].health})
          }

          let current_date = new Date()          
          for (let i = 0; i < signBook.length; i++){
            let year = signBook[i].date.getFullYear()
            let month = signBook[i].date.getMonth()
            let day = signBook[i].date.getDate()
            if (year == current_date.getFullYear() &&
            month == current_date.getMonth() &&
            day == current_date.getDate()
            ){
              this.setData({ signin: true })
              break;
            }
          }

          this.setData({signBook: signBook})
          let the_temp_date = new Date()
          this.signBookShow(the_temp_date.getFullYear(), the_temp_date.getMonth()+1)
        }  
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })   
  },

  // 签到 集合了上传健康码功能
  signOn2: function (e) {
    let that = this
    // 选择健康码并上传
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]

        //取系统当前日期 作为打卡日期
        let the_date = that.dateToString(new Date())

        // 上传图片
        const cloudPath = 'ttdk/healthcode-'
          + that.data.userInfo.sn + '-'
          + the_date
          + filePath.match(/\.[^.]+?$/)[0]

        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: cloudPath,
          filePath: filePath,
          // 成功回调
          success: res => {
            that.setData({
              healthcode_fileid: res.fileID
            })     
            // 调用云函数签到
            wx.cloud.callFunction({
              name: 'signin',
              data: { health: that.data.healthcode_fileid },
              success: res => {
                console.log('[云函数] [signin] : ', res)
                if (res.result.rtc == 0) {
                  let c_date = new Date()
                  that.setData({
                    signin: true
                  })
                  that.data.signBook.push({
                    health: that.data.healthcode_fileid,
                    date: c_date
                  })
                  that.signBookShow(c_date.getFullYear(), c_date.getMonth() + 1)
                  wx.showToast({
                    title: 'ok',
                  })
                }
                else {
                  wx.showToast({
                    title: '签到失败: ' + res.result.msg,
                  })
                }
              },
              fail: err => {
                console.error('[云函数] [register] 调用失败', err)
                wx.showToast({
                  title: 'err ' + err,
                })
              }
            })
          },
          fail: e => {
            console.error('[上传健康码] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传健康码失败',
            })
          },
          complete:() =>{},
        })      
      complete: () => {
        wx.hideLoading()
      }}})
  },

  nav_to_info: function(){
    wx.navigateTo({
      url: '../healthBook/healthBook'
    })
  }

})
