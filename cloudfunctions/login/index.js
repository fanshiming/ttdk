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
  // 查询用户注册信息
  let res = await db.collection('info_users_ttdk').where({
    openid: wxContext.OPENID
  }).get()
  // 查询打卡信息
  var res2 = {data:'',}
  if (res.data.length>0){
    // 先取出集合记录总数
    const countResult = await db.collection('books_ttdk')
    .where({sn: res.data[0].sn})
    .field({ _id: false, date: true, })
    .count()
    const total = countResult.total
    if (total >= 1){        
      // 计算需分几次取
      const batchTimes = Math.ceil(total / 100)
      // 承载所有读操作的 promise 的数组
      const tasks = []
      for (let i = 0; i < batchTimes; i++) {
        const promise = db.collection('books_ttdk')
        .where({sn: res.data[0].sn})
        .field({ _id: false, date: true, })
        .skip(i * MAX_LIMIT).limit(MAX_LIMIT)
        .get()
        tasks.push(promise)
      }
      // 等待所有
      res2 = (await Promise.all(tasks)).reduce((acc, cur) => {
        return {
          data: acc.data.concat(cur.data),
          errMsg: acc.errMsg,
        }
      })
    }
  }
   
  return {
    openid: wxContext.OPENID,
    unionid: wxContext.UNIONID,
    userInfo: res.data,
    signBook: res2.data
  }
}