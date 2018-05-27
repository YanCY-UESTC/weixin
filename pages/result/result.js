Page({
  data:{
    searchValue: '',
  },
  onReady: function (){
    var search = wx.getStorageSync('search');
    this.setData({
      searchValue: search,
    });
  },  
})