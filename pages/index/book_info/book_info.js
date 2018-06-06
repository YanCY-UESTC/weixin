Page({
  data:{
    book_name: '',
    book_auth: '',
    book_num: '',
    book_image: '',
    book_note: '',
  },
  onReady: function () {
    var info = wx.getStorageSync('info');
    this.setData({
      book_name: info.name,
      book_auth: info.author,
      book_num: info.num,
      book_image: info.image,
      book_note: info.note,
    });
  }
})