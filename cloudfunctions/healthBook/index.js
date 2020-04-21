// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let res = await db.collection('info_users_ttdk').where({
    openid: wxContext.OPENID
  }).get()
  if (res.data.length == 0) {
    return { user: '', book: '', msg: '权限不足' }
  }

  // 先取出集合记录总数
  const countResult = await db.collection('info_users_ttdk').count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('info_users_ttdk').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  let info_users = (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })

  // 先取出集合记录总数
  const countResult2 = await db.collection('books_ttdk').count()
  const total2 = countResult2.total
  // 计算需分几次取
  const batchTimes2 = Math.ceil(total2 / 100)
  // 承载所有读操作的 promise 的数组
  const tasks2 = []
  for (let i = 0; i < batchTimes2; i++) {
    const promise2 = db.collection('books_ttdk')
      .field({
        date: true,
        health: true,
        sn: true,
      })
      .skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks2.push(promise2)
  }
  // 等待所有信息
  let books = (await Promise.all(tasks2)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })

  return { user: info_users.data, book: books.data, msg: 'ok' }
}