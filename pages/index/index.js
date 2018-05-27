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
    var Search = this.data.searchValue
    wx.setStorageSync('Search', Search),
    wx.navigateTo({
      url: '../result/result',
      success: function(res) {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  }
})