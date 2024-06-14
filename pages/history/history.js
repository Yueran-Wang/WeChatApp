Page({
  data: {
    score: 0,
    total: 0,
    showScore: true
  },
  onLoad: function(options) {
    if (options.score !== undefined && options.total !== undefined) {
      // 如果URL参数中包含score和total，则显示成绩
      this.setData({
        score: parseInt(options.score, 10),
        total: parseInt(options.total, 10),
        showScore: true
      });
    } else {
      // 如果URL参数中不包含score和total，显示历史记录
      this.setData({
        showScore: false
      });
      this.loadHistory();
    }
  },
  loadHistory: function() {
    // 加载历史记录的逻辑
    console.log("加载历史记录");
  }
});
