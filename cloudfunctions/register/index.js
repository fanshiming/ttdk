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

  let tmp = await db.collection('token').where({memo: 'ttdk'}).field({token: true}).get()
  let the_token = tmp.data[0].token
  if (event.token != the_token){
    return {rtc: 2, msg: '口令不正确'}
  }

  let res = await db.collection('info_users_ttdk').where({
    openid: wxContext.OPENID
  }).get()

  if (res.data.length > 0){
    return {rtc: 1, msg: '用户已存在'}
  }

  //查找最大sn
  let sn_cur_max = await db.collection('info_users_ttdk')
  .field({
    sn: true
  })
  .orderBy('sn', 'desc')
  .limit(1)
  .get()

  let sn_next = 2020;
  if (sn_cur_max.data.length > 0){
    sn_next = sn_cur_max.data[0].sn + 1
  } 

  let the_data = {
    _id: sn_next + '', // 可选自定义 _id
    sn: sn_next,
    openid: wxContext.OPENID,
    unionid: wxContext.UNIONID,
    name: event.name,
    phone: event.phone,
    part: event.part,
    memo: event.memo,
    date: event.date,
    role: event.role
  }
  let res2 = await db.collection('info_users_ttdk').add({
    // data 字段表示需新增的 JSON 数据
    data: the_data})

  return {rtc: 0, msg: 'ok'}
}