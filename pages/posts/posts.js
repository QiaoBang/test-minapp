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
    var posts_contont=[
      {
            testdate: "Aug 31 13",
            testtitle: "这个星球的最强四门跑车",
            testcontont: "阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧阿尔法罗密欧",
            icon1_image: '/image/icon1.png',
            tou_image: '/image/tou.jpg',
            num2: 88,
            car2_image: '/image/car2.jpg',
            num1: 66,
            icon2_image: '/image/icon2.png',
      },{
        testdate: "Aug 31 13",
        num1: 66,
        tou_image: "/image/tou2.jpg",
        testtitle: "认真学习，努力开车",
        testcontont: "一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯一定要买雷克萨斯",
        icon2_image: '/image/icon2.png',
        num2: 88,
        car2_image: '/image/car.jpg',
        icon1_image: '/image/icon1.png',
      }
    ]
    this.setData({
      posts_key:posts_contont});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})