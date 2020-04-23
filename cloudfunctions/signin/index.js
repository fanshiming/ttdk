// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //用户校验 后台校验 暂不做

  // 根据openid取用户系统唯一标识sn
  let res = await db.collection("info_users_ttdk")
  .where({openid: wxContext.OPENID})
  .get()

  if (res.data.length == 0){
    return {rtc: 1, msg: '非法用户'}
  }

  let user_base_info = res.data[0]
  
  //取系统当前日期 作为打卡日期
  let date = new Date()
  console.log('系统日期', date)
  date.setHours(date.getHours() + 8);    // utc8
  console.log('系统日期+8', date)
  let the_y = date.getFullYear()
  let the_m = date.getMonth() + 1
  let the_d = date.getDate()
  if (the_m < 10) {
    the_m = '0' + the_m
  };
  if (the_d < 10) {
    the_d = '0' + the_d
  };
  let the_date = the_y + "-" + the_m + "-" + the_d
  console.log('入库日期字符串', the_date)

// 检测是否已经打过卡
  res = await db.collection("books_ttdk")
    .where({ 
      sn: user_base_info.sn,
      date: the_date })
  .get()
  if (res.data.length > 0){
    return {rtc: 2, msg:'今日已打卡'}
  }

  //组织打卡数据
  let myHealthUrl = await cloud.getTempFileURL({
    fileList: [event.health],
  })

  let f_data = {
    date: the_date,
    health: event.health,
    healthUrl: myHealthUrl.fileList[0].tempFileURL,
    sn: user_base_info.sn
  }

  let res2 = await db.collection('books_ttdk').add({
    // data 字段表示需新增的 JSON 数据
    data: f_data
  })
  return { rtc: 0, msg: 'ok' }
}