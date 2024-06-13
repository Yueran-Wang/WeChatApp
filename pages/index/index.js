// pages/index/index.js
Page({
  navigateToStudy: function() {
    wx.navigateTo({
      url: '/pages/study/study'
    });
  },
  navigateToTest: function() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  },
  navigateToAI: function() {
    wx.navigateTo({
      url: '/pages/chat/chat'
    });
  }
});