// pages/test/test.js
Page({
  data: {
    "questions": [
      {
        "question": "网络钓鱼是指：",
        "options": ["A. 在网络上发布虚假信息", "B. 发送电子邮件试图骗取私人信息", "C. 在网上发布病毒链接", "D. 盗取网络游戏账号"],
        "answer": "B"
      },
      {
        "question": "哪一项不是有效的数据备份策略？",
        "options": ["A. 使用云存储服务", "B. 定期将数据备份到外部硬盘", "C. 只在设备丢失时备份数据", "D. 创建数据的多个备份副本"],
        "answer": "C"
      },
      {
        "question": "HTTPS和HTTP的主要区别是什么？",
        "options": ["A. HTTPS传输速度更快", "B. HTTPS比HTTP更不安全", "C. HTTPS在传输中对数据进行加密", "D. HTTP支持电子商务交易"],
        "answer": "C"
      },
      {
        "question": "以下哪种密码最难被破解？",
        "options": ["A. 123456", "B. password", "C. 192837465", "D. Xs$1!pQz9_"],
        "answer": "D"
      },
      {
        "question": "什么是双因素认证？",
        "options": ["A. 使用两个密码登录账户", "B. 登录时需要输入验证码", "C. 在密码基础上增加其他验证方式", "D. 同时使用电子邮件和短信验证登录"],
        "answer": "C"
      },
      {
        "question": "以下哪项措施可以提高网络安全？",
        "options": ["A. 定期更换密码", "B. 使用公共Wi-Fi进行敏感交易", "C. 安装安全软件", "D. 开启防火墙"],
        "answer": "C"
      },
      {
        "question": "哪种方法可以用来识别网络钓鱼尝试？",
        "options": ["A. 检查发件人的电子邮件地址", "B. 查找语法和拼写错误", "C. 信任所有带有HTTPS的网站", "D. 验证链接目标地址是否与链接文本匹配"],
        "answer": "D"
      },
      {
        "question": "在网络安全中，以下哪项是常见的攻击类型？",
        "options": ["A. 病毒", "B. 蠕虫", "C. 跨站脚本攻击", "D. 软件更新"],
        "answer": "A"
      },
      {
        "question": "选择防病毒软件时，应该考虑哪个因素？",
        "options": ["A. 价格", "B. 检测率", "C. 用户界面友好性", "D. 更新频率"],
        "answer": "B"
      },
      {
        "question": "以下哪种行为可能导致数据泄露？",
        "options": ["A. 使用未加密的Wi-Fi网络", "B. 定期更新软件", "C. 点击不明链接", "D. 共享密码"],
        "answer": "A"
      },
      {
        "question": "使用公共Wi-Fi进行在线银行交易是安全的。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "所有Wi-Fi网络都提供相同的安全级别。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "定期更换密码可以提高账户安全。",
        "options": ["对", "错"],
        "answer": "对"
      },
      {
        "question": "电子邮件附件中的病毒只有在下载附件后才能激活。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "防火墙可以阻止所有形式的网络攻击。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "只有计算机技术人员需要关注网络安全。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "私人浏览模式可以阻止网站追踪你的在线活动。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "下载未授权的软件是安全的。",
        "options": ["对", "错"],
        "answer": "错"
      },
      {
        "question": "强密码应该包含字母、数字和特殊字符的组合。",
        "options": ["对", "错"],
        "answer": "对"
      },
      {
        "question": "仅仅关闭一个带有恶意链接的电子邮件，就能避免病毒感染。",
        "options": ["对", "错"],
        "answer": "错"
      }
    ],
    currentQuestionIndex: 0,
    selectedOption: null,
    answers: []
  },
  onLoad() {
    this.resetQuiz();
  },
  resetQuiz() {
    this.setData({
      currentQuestionIndex: 0,
      selectedOption: null,
      answers: [],
      currentQuestion: this.data.questions[0]
    });
  },
  selectOption(e) {
    let answers = this.data.answers;
    answers[this.data.currentQuestionIndex] = e.detail.value;
    this.setData({
      selectedOption: e.detail.value,
      answers: answers
    });
    this.nextQuestion(); // 自动进入下一题
  },
  prevQuestion() {
    let index = this.data.currentQuestionIndex;
    if (index > 0) {
      index--;
      this.setData({
        currentQuestionIndex: index,
        currentQuestion: this.data.questions[index],
        selectedOption: this.data.answers[index] || null
      });
    }
  },
  nextQuestion() {
    let index = this.data.currentQuestionIndex;
    if (index < this.data.questions.length - 1) {
      index++;
      this.setData({
        currentQuestionIndex: index,
        currentQuestion: this.data.questions[index],
        selectedOption: this.data.answers[index] || null
      });
    } else {
      this.submitAnswers();
    }
  },
  
  submitAnswers() {
    let answers = this.data.answers;
    answers[this.data.currentQuestionIndex] = this.data.selectedOption;
    let score = 0;
    for (let i = 0; i < this.data.questions.length; i++) {
      if (answers[i] && answers[i].slice(0, 1) === this.data.questions[i].answer) {
        score++;
      }
    }
    // 将成绩存储到全局数据或通过页面跳转参数传递
    wx.redirectTo({
      url: `/pages/history/history?score=${score}&total=${this.data.questions.length}`
    });
  }
});
