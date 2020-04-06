const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = (event, context) => {
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()

  console.log(event)
  console.log(context)
  console.log(wxContext.OPENID)
  const record = []
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  const _ = db.command
  // 根据openid unionid等查询是否为注册用户
  db.collection('users_ttdk').where({
    openid: "o2f8s5K24Vk0YaAj1zHvwHneI6mE"
  })
    .get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data)
        record.push(res.data)
      }
    })

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
    record: record
  }
}

