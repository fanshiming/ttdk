// pages/draw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctx: '',
    lastX: '',
    lastY: '',
    isClear: false,
    penColor: 'red',
    lineWidth: 5,
    points: []
  },
  onLoad() {
      let context = wx.createCanvasContext("myCanvas")
      this.setData({
        ctx: context
      })
  },
  /**
   * 触摸开始
   */
  touchStart: function (e) {
    //得到触摸点的坐标
    let startX = e.changedTouches[0].x
    let startY = e.changedTouches[0].y
    let context = this.data.ctx
    this.setData({
      lastX: startX,
      lastY: startY
    })
    this.data.points.push([startX, startY, e.timeStamp])

    // console.log('setStrokeStyle', this.data.penColor)
    // 设置画笔颜色
    // this.context.strokeStyle = this.data.penColor;
    // 设置线条宽度
    context.setLineWidth(this.data.lineWidth)
    context.setLineCap('round') // 让线条圆润
    context.beginPath()      
  },

  /**
   * 手指触摸后移动
   */
  touchMove: function (e) {
      let startX1 = e.changedTouches[0].x
      let startY1 = e.changedTouches[0].y
      let context = this.data.ctx
      context.moveTo(this.data.lastX, this.data.lastY)
      context.lineTo(startX1, startY1)
      context.stroke()
      context.draw(true)

      this.setData({
        lastX: startX1,
        lastY: startY1
      })
      this.data.points.push([startX1, startY1, e.timeStamp])
  },

  /**
   * 触摸结束
   */
  touchEnd: function (e) {
      this.touchMove(e)
      // console.log(this.data.points)
  }
})