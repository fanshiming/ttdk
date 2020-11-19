签到日期样式
colors: '14 #3c5281  4 #f5a8f0  other #84e7d0',
  
  lizi demo6_days_style: [{ month: 'current', day: 2, color: 'white', background: '#84e7d0'},
      { month: 'current', day: 7, color: 'white', background: '#3c5281' },
      { month: 'current', day: 12, color: 'white', background: '#f5a8f0' },
    ]


建立用户体系
   info_users_ttdk

云函数 login
  功能：登陆用户
  参数：空
  返回：res.result.data[]
    如果 res.result.data长度为0，则该用户未注册，如果长度为1，则 res.result.data[0]是用户注册信息
    data[0] = 
    {
      name: 姓名,
      phone: 电话,
      part: 公司信息,
      date: 返京日期,
      role: 来访角色,
      memo: 返京交通工具,
    }

云函数 register
    功能：注册用户
    参数：data = {
      name: 姓名,
      phone: 电话,
      part: 公司信息,
      date: 返京日期,
      role: 来访角色,
      memo: 返京交通工具,
      token: 口令
    }
    返回： res.result{rtc:0, msg:'msg'}
     rtc：0 注册成功， 1 已存在该用户  2口令错误
     msg: 对rtc的描述
     
     
     云函数 getObuBooks
    功能：获取数据表的所有记录
        由于近期无法生成新的云函数，故改造了此云函数，使之为获取数据表的所有记录
    参数：data = {
      tableName: 数据表的名字  比如  books_zhiliangyuebao
    }
    返回： res.result{data:[{},...], errMsg:'msg'}
     data：数据记录的数组
     errMsg: 对函数调用结果的描述
