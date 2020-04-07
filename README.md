建立用户体系
   用户数据在 app.globalData 中
   {
     logged, false 尚未登陆， true 已登陆
     baseUser: {     
      openid, unionid,  来自微信系统的唯一标识 
      sn,   用户的唯一标识
      }

      ttdkUser: {
  _id, baseUser.sn
   name, 用户姓名
   part,  公司名称
   phone, 手机号
   date, 返京日期
   memo, 返京交通方式等备注
      }
   }

云函数 login
    如果是已注册用户，返回用户注册信息[{openid, unionid, sn}] [name, phone, part, role,...]
    如果未注册用户， 且无注册口令，返回的用户信息是空[]

云函数 signin
    如果未注册已用户，且提供了注册口令和注册信息，则注册该用户，返回用户注册信息
