//app.js
var qcloud = require('./vendor/weixin/index')
var config = require('./config')

App({
  data:{
    book_name: '',
    book_ISBN: '',
    author: '',
    publish: '',
    publish_date: '',
    price: '',
    page_num: ''
  },
  onLaunch: function (options) {
    //获取后台数据
    this.get_data()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //云服务器
    qcloud.setLoginUrl(config.service.loginUrl)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //获取数据
  get_data:function(){},
  //添加数据至数据库
  insert:function(e){},
  //从数据库查询数据信息
  database_search:function(e){},
  //数据库信息删除
  database_delete:function(e){},
  //数据库信息修改
  database_change:function(e){}
})