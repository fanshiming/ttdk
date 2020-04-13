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

  let res = await db.collection('info_users_ttdk').where({
    openid: wxContext.OPENID
  }).get()
  if (res.data.length == 0) {
    return { user:'', book: '', msg: '权限不足' }
  }

  //查找用户表
  let info_users = await db.collection('info_users_ttdk').get()

  //查找打卡表
  let books = await db.collection('books_ttdk')
  .field({
    date: true,
    health: true,
    sn: true,})
    .get()

  return {user: info_users.data, book: books.data, msg: 'ok' }
}