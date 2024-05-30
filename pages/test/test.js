// pages/test/test.js
Page({
  data: {
    questions: [
      {
        question: "1、第二代计算机采用的电子元件主要是（  ）。",
        options: ["A. 电子管", "B. 晶体管", "C. 集成电路", "D. 大规模和超大规模集成电路"],
        answer: "B"
      },
      {
        question: "2、图书借阅管理系统“是计算机在（  ）领域的应用。",
        options: ["A. 网络", "B. 大数据", "C. 操作系统", "D. 数据库"],
        answer: "D"
      },
      {
        question: "3、在学生数据库中为防止添加和删除数据的错误，必须设置哪个属性（  ）。",
        options: ["A. 列名", "B. 序号", "C. 主键", "D. 整数型"],
        answer: "C"
      },
      {
        question: "4、人们习惯于将计算机的发展划分为四代，划分的主要依据是（  ）。",
        options: ["A. 计算机的规模", "B. 计算机的运行速度", "C. 计算机的应用领域", "D. 计算机主机所使用的主要元器件"],
        answer: "D"
      },
      {
        question: "5、（  ）主要包括运算器和控制器，它的性能很大程度上决定了微机的性能和档次。",
        options: ["A. RAM", "B. ROM", "C. UPS", "D. CPU"],
        answer: "D"
      },
      {
        question: "6、计算机系统中的核心系统是（  ）。",
        options: ["A. 语言处理系统", "B. 数据库系统", "C. 操作系统", "D. 广泛使用的应用软件"],
        answer: "C"
      },
      {
        question: "7、二进制数1001111转化为八进制数的结果是（  ）。",
        options: ["A. 110", "B. 217", "C. 221", "D. 117"],
        answer: "D"
      },
      {
        question: "8、在计算表达式1+2+3+4……+100的算法中，流程图的设计应该采用（  ）控制结构。",
        options: ["A. 顺序", "B. 选择分支", "C. 循环", "D. 倒序"],
        answer: "C"
      },
      {
        question: "9、求解表达式 ，若采用流程图来设计算法，则该流程图应采用（  ）控制结构。",
        options: ["A. 顺序", "B. 选择分支", "C. 循环", "D. 倒序"],
        answer: "C"
      },
      {
        question: "10、二进制数01011011 转化为十进制数的结果是（  ）。",
        options: ["A. 103", "B. 171", "C. 71", "D. 91"],
        answer: "D"
      },
      {
        question: "11、下列叙述正确的是（  ）。",
        options: ["A. 世界上第一台电子计算机ENIA", "B. 计算机的发展过程分为四个时代", "C. 微型计算机最早出现于第三代计算机中", "D. 冯.诺依曼提出的计算机体系"],
        answer: "D"
      },
      {
        question: "12、1 Byte = （  ）Bit。",
        options: ["A. 2", "B. 8", "C. 10", "D. 16"],
        answer: "B"
      },
      {
        question: "13、与十六进制数9D相等的二进制数是（  ）。",
        options: ["A. 10100101", "B. 10011001", "C. 10011101", "D. 10110101"],
        answer: "C"
      },
      {
        question: "14、世界上第一台电子数字计算机采用的主要逻辑部件是（  ）。",
        options: ["A. 光电管", "B. 晶体管", "C. 继电器", "D. 电子管"],
        answer: "D"
      },
      {
        question: "15、计算机内所有的信息都是以（  ）数码形式表示的。",
        options: ["A. 十六进制", "B. 八进制", "C. 十进制", "D. 二进制"],
        answer: "D"
      },
      {
        question: "16、八进制数312转化成二进制数是（  ）。",
        options: ["A. 11001010", "B. 10101010", "C. 11011010", "D. 01100101"],
        answer: "C"
      },
      {
        question: "17、下列哪个不是操作系统的功能（  ）。",
        options: ["A. 管理计算机硬件和软件资源", "B. 合理地组织计算机的工作流程", "C. 完成高级语言程序的”翻译”工作", "D. 为用户提供方便和安全的工作环境"],
        answer: "C"
      },
      {
        question: "18、一个完整的计算机硬件系统应包括（  ）。",
        options: ["A. 系统硬件和系统软件", "B. 硬件系统和软件系统", "C. 主机和外部设备", "D. 主机、键盘、显示器和辅助存储器"],
        answer: "C"
      },
      {
        question: "19、求长为10，宽为5的长方形的周长算法，应该采用（  ）控制结构。",
        options: ["A. 顺序", "B. 选择分支", "C. 循环", "D. 倒序"],
        answer: "A"
      },
      {
        question: "20、计算1+3+5+…+99的值，应该采用（  ）控制结构",
        options: ["A. 顺序", "B. 选择分支", "C. 循环", "D. 倒序"],
        answer: "C"
      }
    ],
    currentQuestionIndex: 0,
    selectedOption: null,
    answers: []
  },
  onLoad() {
    this.setData({
      currentQuestion: this.data.questions[this.data.currentQuestionIndex]
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
      // 到达最后一题时可以自动提交或者提示用户提交
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
    wx.navigateTo({
      url: `/pages/result/result?score=${score}&total=${this.data.questions.length}`
    });
  }  
});
