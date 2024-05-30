// pages/cal/cal.js
Page({
  data: {
    display: '0',             // 显示屏上的内容
    operand1: null,           // 第一个操作数
    pendingOperation: null,   // 等待完成的操作符
    resetDisplay: false,      // 是否需要重置显示屏上的数字
    history: []               // 计算历史
  },

  // 页面加载时触发
  onLoad: function() {
    // 从本地存储获取历史记录
    const history = wx.getStorageSync('history') || [];
    this.setData({ history });
  },

  // 数字按钮点击事件处理
  onNumberTap: function(e) {
    const num = e.currentTarget.dataset.num;
    let { display, resetDisplay } = this.data;

    if (resetDisplay) {
      display = num;
      resetDisplay = false;
    } else {
      display = display === '0' ? num : display + num;
    }

    this.setData({ display, resetDisplay });
  },

  // 操作符按钮点击事件处理
  onOperatorTap: function(e) {
    const op = e.currentTarget.dataset.op;
    let { display, operand1, pendingOperation, resetDisplay, history } = this.data;

    // 如果需要重置显示屏
    if (resetDisplay) {
      display = '0';
      operand1 = null;
      pendingOperation = null;
      resetDisplay = false;
      this.setData({ display, operand1, pendingOperation, resetDisplay });
    }

    switch (op) {
      case 'clear':
        // 清除操作
        this.setData({ display: '0', operand1: null, pendingOperation: null, resetDisplay: false });
        break;

      case 'backspace':
        // 退格操作
        if (display === '0' || display.length === 1) {
          this.setData({ display: '0' });
        } else {
          this.setData({ display: display.slice(0, -1) });
        }
        break;

      case 'toggle':
        // 正负号切换
        if (display !== '0') {
          this.setData({ display: display.startsWith('-') ? display.slice(1) : '-' + display });
        }
        break;

      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        // 四则运算操作
        if (!pendingOperation) {
          this.setData({
            operand1: parseFloat(display),
            pendingOperation: op,
            resetDisplay: false,
            display: display + this.getOperatorSymbol(op)
          });
        }
        break;

      case 'equals':
        // 等号操作
        if (pendingOperation && operand1 !== null) {
          let operand2 = parseFloat(display.split(this.getOperatorSymbol(pendingOperation))[1]);
          const result = this.calculate(operand1, operand2, pendingOperation);
          
          history.push(`${operand1} ${this.getOperatorSymbol(pendingOperation)} ${operand2} = ${result}`);
          wx.setStorageSync('history', history);

          this.setData({
            display: String(result),
            operand1: null,
            pendingOperation: null,
            resetDisplay: true,
            history
          });
        }
        break;
      
      case 'history':
        // 历史记录页面跳转
        wx.navigateTo({
          url: '/pages/history/history'
        });
        break;
    }
  },

  // 计算函数
  calculate: function(operand1, operand2, operator) {
    switch (operator) {
      case 'add':
        return operand1 + operand2;
      case 'subtract':
        return operand1 - operand2;
      case 'multiply':
        return operand1 * operand2;
      case 'divide':
        return operand2 === 0 ? 'Error' : operand1 / operand2;
      default:
        return operand2;
    }
  },

  // 获取操作符符号
  getOperatorSymbol: function(operator) {
    const symbols = {
      'add': '+',
      'subtract': '-',
      'multiply': '*',
      'divide': '/'
    };
    return symbols[operator] || '?';
  }
});
