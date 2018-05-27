Page({
  data:{
    searchValue: '',
  },
  onReady: function (){
    var Search = wx.getStorageSync('Search');
    this.setData({
      searchValue: Search,
    });
  },  
})