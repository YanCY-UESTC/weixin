Page({
<<<<<<< HEAD
  suo:function(e){
    wx.navigateTo({
      url: '../logs/logs',
=======
  data:{
      searchValue: '',
      img: '',
  },
  onLoad: function () {
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
  },  
  search: function(e){
    wx.navigateTo({
      url: '../user/user',
>>>>>>> 972f19522be8315581726ad3d4f29dd86e896e65
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
<<<<<<< HEAD
=======
  },
  suo: function (e) {
>>>>>>> 972f19522be8315581726ad3d4f29dd86e896e65
  }
})