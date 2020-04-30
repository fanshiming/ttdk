// miniprogram/pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    part: '',
    gender: ['男', '女', '其他'],
    gender_index: 0,
    area: ['东城', '西城', '朝阳','丰台', '石景山', '海淀', 
      '门头沟', '房山', '通州', '顺义', '昌平', '大兴',
      '怀柔', '平谷', '密云', '延庆'
    ],
    area_index: 1,
    bird: ['火车', '飞机', '自驾', '未离京'],
    bird_index: 0,
    laiwang: ['配合测试', '外协', '借调', '安全员'],
    laiwang_index: 0,
    date: '2019-12-31',
    token: ''
  },

  getInputName: function(e){
    this.setData({name: e.detail.value})
  },

  getInputPhone: function(e){
    this.setData({phone: e.detail.value})
  },

  getInputPart: function (e) {
    this.setData({ part: e.detail.value })
  },

  getInputToken: function (e) {
    this.setData({ token: e.detail.value })
  },
  bindGenderPickerChange: function (e) {
    this.setData({
      gender_index: e.detail.value
    })
  },
  bindAreaPickerChange: function (e) {
    this.setData({
      area_index: e.detail.value
    })
  },

  bindBirdPickerChange: function (e) {
    this.setData({
      bird_index: e.detail.value
    })
  },

  bindRolePickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      laiwang_index: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  submit: function(e){
    if (this.data.name == '' || this.data.phone == '' || this.data.part == '' ||
    this.data.token == ''){
      wx.showModal({
        title: '',  
        content: '有未填写的信息，比如姓名 手机号 组织名称 口令等',  
        confirmText: '我知道了', 
        confirmColor: '',
        showCancel: false, 
      })
      return
    }

    let f_data = {
      name: this.data.name,
      phone: this.data.phone,
      part: this.data.part,
      date: this.data.date,
      gender: this.data.gender[this.data.gender_index],
      area: this.data.area[this.data.area_index],
      role: this.data.laiwang[this.data.laiwang_index],
      memo: this.data.bird[this.data.bird_index],
      token: this.data.token
    }
    // call cloud function
    wx.cloud.callFunction({
      name: 'register',
      data: f_data,
      success: res => {
        console.log('[云函数] [register] : ', res)  
        if (res.result.rtc==0){
          wx.showModal({
          title: 'OK',
          content: '注册成功'
          })
          wx.navigateTo({
            url: '../index/index',
        })
        }
        else{
          wx.showModal({
            title: '注册失败',
            content: res.result.msg
        })}},
      fail: err => {
        console.error('[云函数] [register] 调用失败', err)
        wx.showModal({
          title: 'ERROR',
          content: '向服务器提交数据失败，请稍后再试' + err,
        })  
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})