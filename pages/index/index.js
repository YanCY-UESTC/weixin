Page({
  data:{
      searchValue: '',
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
    var search = this.data.searchValue
    wx.navigateTo({
      url: '../result/result',
      success: function(res) {
        wx.setStorageSync('search', search)
      },
      fail: function(res) {},
      complete: function(res) {},
    });
  },
})