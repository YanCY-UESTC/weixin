Page({
  data:{
    book_List: [
      {
        book_name: '',
        book_auth: '',
        book_num: '',
        book_image: '',
        book_note: '',
      }]
  },
  onReady: function (){
    var Search = wx.getStorageSync('Search');
    this.setData({
      book_name: Search,
    });
    var that = this;
    wx.request({
      method: 'GET',
      url: 'http:www.forerversix.cn:5555',
      data: {
        'name': this.data.book_name,
        key: 'data'
      },
      header: { 'content-type': 'application/json' },
    })
  }  
})