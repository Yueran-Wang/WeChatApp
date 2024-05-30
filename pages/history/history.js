// pages/history/history.js
Page({
  data: {
    history: []
  },

  onLoad: function() {
    // 从本地存储获取历史记录
    const history = wx.getStorageSync('history') || [];
    
    // 对历史记录进行倒序处理
    const reversedHistory = history.reverse();
    
    // 设置数据
    this.setData({ history: reversedHistory });
  }
});

