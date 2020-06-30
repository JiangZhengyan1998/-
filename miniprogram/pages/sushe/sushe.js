// pages/sushe/sushe.js
Page({
  fanhuishouye: function (options) {
    wx.navigateBack({
      url: '../shouye/shouye',
    })
  },
  men: function (options) {
    wx.navigateTo({
      url: '../men/men',
    })
  },
  chuang: function (options) {
    wx.navigateTo({
      url: '../chuang/chuang',
    })
  },
  deng: function (options) {
    wx.navigateTo({
      url: '../deng/deng',
    })
  },
  kongtiao: function (options) {
    wx.navigateTo({
      url: '../kongtiao/kongtiao',
    })
  },
  shui: function (options) {
    wx.navigateTo({
      url: '../shui/shui',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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