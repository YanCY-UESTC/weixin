Page({
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
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  },
  suo: function (e) {
  }
})