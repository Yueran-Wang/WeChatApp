// pages/chat/chat.js
Page({
  data: {
      inputValue: '',
      response: '请在下方输入框内输入你的问题，人工智能会为你解答疑惑。'
  },
  bindInput: function(e) {
      this.setData({
          inputValue: e.detail.value
      });
  },
  sendMessage: function() {
      const that = this;
      const message = this.data.inputValue;
      
      this.setData({
          inputValue: '',
          response: '等待中...'
      });
      
      wx.request({
          url: 'http://localhost:3000/api/chat',
          method: 'POST',
          data: {
              message: message
          },
          header: {
              'content-type': 'application/json'
          },
          success(res) {
              that.setData({
                  response: res.data.message || 'No response message'
              });
          },
          fail(error) {
              that.setData({
                  response: 'Error: ' + error.errMsg
              });
          }
      });
  }
});
