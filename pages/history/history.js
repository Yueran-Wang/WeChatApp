// pages/history/history.js
Page({
  data: {
    score: 0,
    total: 0
  },
  onLoad(options) {
    this.setData({
      score: options.score,
      total: options.total
    });
  }
});