var postsData = require('../../data/posts-data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   * 用this.setData()函数模拟将数据传入data｛｝。
   * 
   */
  onLoad: function (options) {
  
    this.setData({
      posts_key:postsData.postsList
      });
      
  },

  onPostsTap:function(event){
    var postsId = event.currentTarget.dataset.postsid;
    //console.log('onPosts id is' + postsId);
    wx.navigateTo({
      url: 'posts-detail/posts-detail',
    })
  }


})