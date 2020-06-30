// pages/men/men.js

const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  switch1Change : function() {
    this.setData({
      switch1Checked : !this.data.switch1Checked,
      switch2Checked : !this.data.switch2Checked
    })
  },
  switch2Change : function() {
    this.setData({
      switch1Checked : !this.data.switch1Checked,
      switch2Checked : !this.data.switch2Checked
    })
  },
  switch3Change : function() {
    this.setData({
      switch3Checked : !this.data.switch3Checked,
      switch4Checked : !this.data.switch4Checked
    })
  },
  switch4Change : function() {
    this.setData({
      switch3Checked : !this.data.switch3Checked,
      switch4Checked : !this.data.switch4Checked
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    db.collection('men').doc('b06604d45ee57f1e000c806424ba6d65').get({
      success: (res) => {
        this.setData({
          switch1Checked : res.data.switch1Checked,
          switch2Checked : res.data.switch2Checked,
          switch3Checked : res.data.switch3Checked,
          switch4Checked : res.data.switch4Checked
        })
      }
    })

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