//user.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    schools: ["清水河校区","沙河校区"],
    school_index: 0,
    change: false,
    user_phone: "未填写",
    user_QQ: "未填写",
    user_weixin: "未填写",
    user_school: ""
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
    var value = wx.getStorageSync('userDetail')
    if (value) {
      if(value.school==1){
      this.setData({school_index: 1})
      }else{
        this.setData({school_index: 0})
      }
      if(value.user_phone!=""){
        this.setData({ user_phone: value.user_phone})
      } else { this.setData({ user_phone: "未填写"})}
      if(value.user_QQ!=""){
        this.setData({ user_QQ: value.user_QQ})
      } else { this.setData({ user_QQ: "未填写"})}
      if(value.user_weixin!=""){
        this.setData({user_weixin: value.user_weixin})
      } else { this.setData({ user_weixin: "未填写"})}
      // Do something with return value
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
  /*checkbox_click1: function(e) {
      this.setData({
        check1: !this.data.check1,
        user_phone: ""
      })
  },
  checkbox_click2: function (e) {
      this.setData({
        check2: !this.data.check2,
        user_QQ: ""
      })
  },
  checkbox_click3: function (e) {
   
      this.setData({
        check3: !this.data.check3,
        user_weixin: ""
      })
  },*/
  schoolchange: function (e) {
    this.setData({
      school_index: e.detail.value
    })
  },
  userSubmit: function (e) {
    console.log(e.detail.value);
    if(e.detail.value.phone==""&&e.detail.value.weixin==""&&e.detail.value.qq==""){
      wx.showToast({
        title: '修改失败,至少填写或修改一个联系方式',
        icon: 'none',
        duration: 1500
      })
    }
    else{
    var userDetail= {
      school: e.detail.value.school,
      user_phone: e.detail.value.phone,
      user_QQ: e.detail.value.qq,
      user_weixin: e.detail.value.weixin
    }
    wx.setStorageSync('userDetail', userDetail);
    this.setData({
      school_index: e.detail.value.school,
      user_phone: e.detail.value.phone,
      user_QQ: e.detail.value.qq,
      user_weixin: e.detail.value.weixin
    })
    if (e.detail.value.phone == "") {this.setData({user_phone: "未填写" })}
    if (e.detail.value.weixin == "") {this.setData({ user_weixin:"未填写"})} 
    if (e.detail.value.qq == "") { this.setData({ user_QQ: "未填写" }) } 
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1500
    })
    console.log(e.detail.value);
   }
  }
})
