Page({
  data:{  
    book_name:'微积分',
    book_auth: '未知',
    book_num: '2',
    book_image: '/images/01.jpg',
    book_note: '',
    search_name: ''
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      search_name: value,
    });
  },  
  search: function(e){
    var Search = this.data.search_name
    wx.setStorageSync('Search', Search),
    wx.navigateTo({ 
      url: '../result/result',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  },
  book_info:function(e){
    var info = {
      name: this.data.book_name,
      author: this.data.book_auth,
      num: this.data.book_num,
      image: this.data.book_image,
      note: this.data.book_note
    }
    wx.setStorageSync('info', info),
    wx.navigateTo({
      url: './book_info/book_info',
    })
  }
})