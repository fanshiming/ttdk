// miniprogram/pages/zhiliangbaogao/zhiliangbaogao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //[{name:'', cloud: ''}, ...]
    books_zhiliangyuebao: [], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      mask: true
    });
    this.data.books_zhiliangyuebao = [];
    /*
    this.data.books_zhiliangyuebao.push({name: 'ETC产品质量跟踪月报 202008', 
    cloud: 'cloud://test-dhys-t0211.7465-test-dhys-t0211-1301479988/zhiliangyuebao/ETC产品质量跟踪月报 202008.pdf'})
    this.data.books_zhiliangyuebao.push({name: 'ETC产品质量跟踪月报 202009', 
    cloud: 'cloud://test-dhys-t0211.7465-test-dhys-t0211-1301479988/zhiliangyuebao/ETC产品质量跟踪月报 202009.pdf'})
    this.setData({
      books_zhiliangyuebao: this.data.books_zhiliangyuebao
    })
    */

    // 调用云函数签到
    wx.cloud.callFunction({
      name: 'getObuBooks',
      data: {tableName: 'books_baogao2'},
      success: res => {
        //数据落地到内存
        for (let i = 0; i < res.result.data.length; i++) {
          this.data.books_zhiliangyuebao.push({name: res.result.data[i].name, 
            cloud: res.result.data[i].cloud});
        }
        this.setData({
          books_zhiliangyuebao: this.data.books_zhiliangyuebao
        })
      },
      fail: err => {
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取数据，请重试小程序或者检查网络',
        })
      },
      complete: () => {
        wx.hideLoading();
      }
    })

    

    console.log(this.data.books_zhiliangyuebao)
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

  openDoc: function(event){
    wx.showLoading({
      mask: true,
      title: 'loading'
    });
    wx.cloud.downloadFile({
      fileID: event.currentTarget.dataset.cloud, // 文件 ID
      success: res => {
        // 返回临时文件路径
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            
          }
        })
      },
      fail: err=>{
        wx.showModal({
          showCancel: false,
          title: '',
          content: '本次未能获取数据，请重试小程序或者检查网络'+err,
        })
      },
      complete: ()=>{
        wx.hideLoading();
      }
    })
  }
})