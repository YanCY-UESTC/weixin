Page({
  data: {
    book_List :[
      {  
      book_name:'微积分',
      book_auth: '未知',
      book_num: '2',
      book_image: '/images/01.jpg',
      book_note: '',
      search_name: ''
    },
    {
      book_name: '线性代数',
      book_auth: '未知',
      book_num: '2',
      book_image: '/images/01.jpg',
      book_note: '',
      search_name: ''
    }]
  },
  onLoad:function(){

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
      name: e.detail.book_name,
      author: e.detail.book_auth,
      num: e.detail.book_num,
      image: e.detail.book_image,
      note: e.detail.book_note
    }
    wx.setStorageSync('info', info),
    wx.navigateTo({
      url: './book_info/book_info',
    })
  }
})