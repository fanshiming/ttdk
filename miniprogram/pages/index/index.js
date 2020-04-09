//index.js
const app = getApp()

Page({
  data: {
    signin: false,
    logged: false,
    userInfo: '',
    openid: '',
    unionid: '',
    health: ''
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
        console.log('[云函数] [login] : ', res)
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
        }  
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })   
  },

  // 上传图片
  doUpload: function () {
    let that = this
    // 选择图片
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
        let date = new Date()
        let the_y = date.getFullYear();
        let the_m = date.getMonth() + 1;//获取当前月份的日期 
        let the_d = date.getDate();
        if (the_m < 10) {
          the_m = '0' + the_m;
        };
        if (the_d < 10) {
          the_d = '0' + the_d;
        };
        let the_date = the_y + "-" + the_m + "-" + the_d
        
        // 上传图片
        const cloudPath = 'ttdk/healthcode-' 
          + that.data.userInfo.sn + '-'
          + the_date
          + filePath.match(/\.[^.]+?$/)[0]
        
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)  
            that.setData({
              health: cloudPath
            })        
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  // 签到
  signOn: function(e){
    if (this.data.health == ''){
      wx.showToast({
        icon: 'none',
        title: '签到失败，请确认已选择今日健康码',
      })
      return
    }
    let that = this
    wx.cloud.callFunction({
      name: 'signin',
      data: { health: that.data.health},
      success: res => {
        console.log('[云函数] [signin] : ', res)
        if (res.result.rtc == 0) {
          that.setData({signin: true})
          wx.showToast({
            title: 'ok',
          })
        }
        else {
          wx.showToast({
            title: 'fail' + res.result.msg,
          })
        }
      },
      fail: err => {
        console.error('[云函数] [register] 调用失败', err)
        wx.showToast({
          title: 'err ' + err,
      })}
    })
  }
})
