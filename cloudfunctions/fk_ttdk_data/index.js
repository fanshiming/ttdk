// 云函数入口文件
const cloud = require('wx-server-sdk')
const xlsx = require('node-xlsx');

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  // 先取出集合记录总数
  const countResult = await db.collection('books_ttdk').count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('books_ttdk').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  let books_ttdk = (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }})
  
  console.log('打卡', books_ttdk)

  // 先取出集合记录总数
  const countResult2 = await db.collection('info_users_ttdk').count()
  const total2 = countResult2.total
  // 计算需分几次取
  const batchTimes2 = Math.ceil(total2 / 100)
  // 承载所有读操作的 promise 的数组
  const tasks2 = []
  for (let i = 0; i < batchTimes2; i++) {
    const promise2 = db.collection('info_users_ttdk').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks2.push(promise2)
  }
  // 等待所有注册信息
  let info_users_ttdk = (await Promise.all(tasks2)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
  console.log('注册细腻', info_users_ttdk)
  let users_info = {} //以sn作为主键，注册信息{}作为value
  for (let i = 0; i < info_users_ttdk.data.length; i++) {
    users_info[info_users_ttdk.data[i].sn] = info_users_ttdk.data[i]
  }
  console.log('注册信息', users_info)

  // 生成excel
  try {
    //1,定义excel表格名
    let dataCVS = 'books_ttdk.xlsx'
    //2，定义存储数据的
    let alldata = [];
    let row = ['序号', '姓名', '日期', '公司', '返京日期', '体温', '参与项目']; //表属性
    alldata.push(row);

    // 生成打卡excel
    for (let i = 0; i < books_ttdk.data.length; i++){
      let arr = [];
      arr.push(i+1);
      arr.push(users_info[books_ttdk.data[i].sn].name);
      arr.push(books_ttdk.data[i].date);
      arr.push(users_info[books_ttdk.data[i].sn].part);
      arr.push(users_info[books_ttdk.data[i].sn].date);
      arr.push('正常');
      arr.push('易路行测试');

      alldata.push(arr)
    }
    console.log('表格', alldata)

    //3，把数据保存到excel里
    var buffer = await xlsx.build([{
      name: "登记表",
      data: alldata
    }, {
      name: "总表",
      data: []
    }]);

    //4，把excel文件保存到云存储里
    return await cloud.uploadFile({
      cloudPath: dataCVS,
      fileContent: buffer, //excel二进制文件
    })

  } catch (e) {
    console.error(e)
    return e
  }
}