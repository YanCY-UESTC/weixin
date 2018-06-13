Page({
  data: {
   add_image: '/images/add.png',
   book_name: '',
   book_ISBN: '',
   author: '',
   image: '',
   publish: '',
   publish_date: '',
   price: '',
   page_num: ''
  }, 
  onLoad: function (options) {
  },
  bookNameInput: function(e){
    this.setData({
      book_name: e.detail.value
    });
  },
  bookIBSNInput:function(e){
    this.setData({
      book_ISBN: e.detail.value
    });
  },
  writerInput: function(e){
    this.setData({
      author: e.detail.value
    });
  },
  publisherInput: function(e){
    this.setData({
      publish: e.detail.value
    });
  },
  publishDateInput: function(e){
    this.setData({
      publish_date: e.detail.value
    });
  },
  priceInput: function(e){
    this.setData({
      price: e.detail.value
    });
  },
  pagesInput: function(e){
    this.setData({
      page_num: e.detail.value
    });
  },
  uploadPhoto(e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认1
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        upload(that, tempFilePaths);
      }
    })
  },
  submit: function(e){
    var that = this;
    wx.request({
      method: 'POST',
      url: 'http:www.forerversix.cn:5555',
      data: {
        'data': book_name,book_ISBN,author,image,publish,publish_date,page_num
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        wx.showToast({
          title: '提交成功',
        })
      }
    })
  }
})

function upload(page, path) {
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    wx.uploadFile({
      url: constant.SERVER_URL + "/FileUploadServlet",
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      },
      
    })
}