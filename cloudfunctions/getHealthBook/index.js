// 根据传入的日期字符串，获取当天的健康码信息
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
  // 先取出集合记录总数
  const countResult = await db.collection('books_ttdk')
  .where({date: event.the_date_string})
  .count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('books_ttdk')
      .where({ date: event.the_date_string })
      .field({
        _id: false,
        date: true,
        health: true,
        sn: true,
      })
      .skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }

  if (tasks.length == 0){
    return {
      data: [],
      errMsg: 'ok'
    }
  } else {
  // 等待所有信息
  return (await Promise.all(tasks)).reduce((acc, cur) => {    
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })}
}