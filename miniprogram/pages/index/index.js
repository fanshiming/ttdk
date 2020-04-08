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

        // 上传图片
        let up_date = new Date()
        const cloudPath = 'ttdk/healthcode-' 
          + up_date.toLocaleString()
          + filePath.match(/\.[^.]+?$/)[0]

        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)  
            this.setData({
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
    wx.cloud.callFunction({
      name: 'signin',
      data: { health: this.data.health},
      success: res => {
        console.log('[云函数] [signin] : ', res)
        if (res.result.rtc == 0) {
          this.setData({signin: true})
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
