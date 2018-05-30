//user.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    check1: true,
    check2: false,
    check3: false,
    schools: ["清水河校区","沙河校区"],
    school_index: 0,
    change: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  checkbox_click1: function(e) {
      this.setData({
        check1: !this.data.check1
      })
  },
  checkbox_click2: function (e) {
      this.setData({
        check2: !this.data.check2
      })
  },
  checkbox_click3: function (e) {
   
      this.setData({
        check3: !this.data.check3
      })
  },
  schoolchange: function (e) {
    this.setData({
      school_index: e.detail.value
    })
  },
  userSubmit: function (e) {
    console.log(e.detail.value);
  }
})
