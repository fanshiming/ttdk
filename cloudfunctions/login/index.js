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
  let openid = wxContext.OPENID
  console.log('openid', wxContext.OPENID)
  let res = await db.collection('users_ttdk').where({
    openid: openid
  }).field({
    openid: true,
    unionid: true,
    sn: true
  }).get()

  let res_2 = await db.collection('info_users_ttdk').doc(res.data[0].sn).get()
    
  return {data1: res.data, data2:res_2.data}   
}