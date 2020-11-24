const cloud = require('wx-server-sdk')

cloud.init({env: cloud.DYNAMIC_CURRENT_ENV})
const db = cloud.database()
const MAX_LIMIT = 100
const _ = db.command
exports.main = async (event, context) => {
  // 先取出集合记录总数
  let tableName = event.tableName
  const countResult = await db.collection(tableName)
  .where({
    unwill: _.neq(1)
  }).count()
  const total = countResult.total
  if (total == 0) {
    return {
      data: [],
      errMsg: ''
    }
  }

  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection(tableName)
    .where({
      unwill: _.neq(1)
    }).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}