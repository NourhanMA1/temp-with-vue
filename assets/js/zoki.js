new Vue({
  el: "#digital-screen",
  data: {
    posts: [
      {
        counterCorrect: 0,
        LODegree: null,
        UserDegree: null,
        type: "",
        BloomTargets: null,
        randomNumber: null,
        loTargets: null,
        numberOfquestion: 0,
        items: [
          {
            type: 1,
            correctCounter: 0,
            numberOfquestions: 0,
            active: true,
            id: 1,
            parag: [" اُذكرْ أول 5 مضاعفات للعدد 5 "],
            parag1: ["اُذكرْ أول 10 مضاعفات للعدد 2"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 2,
                  valid: ["0", "5", "10", "15", "20"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "2"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "10"],
                },
              },
            ],
          },
          {
            type: 1,
            correctCounter: 0,
            numberOfquestions: 0,
            active: true,
            id: 1,
            parag: [" اُذكرْ أول 5 مضاعفات للعدد 5 "],
            parag1: ["اُذكرْ أول 10 مضاعفات للعدد 2"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 2,
                  valid: ["0", "5", "10", "15", "20"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "2"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "10"],
                },
              },
            ],
          },
          {
            type: 1,
            correctCounter: 0,
            numberOfquestions: 0,
            active: true,
            id: 1,
            parag: [" اُذكرْ أول 5 مضاعفات للعدد 5 "],
            parag1: ["اُذكرْ أول 10 مضاعفات للعدد 2"],
            content: [
              {
                input: {
                  nums: 2,
                  valid: ["0", "5", "10", "15", "20"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "2"],
                },
              },
            ],
          },
        ],
      },
    ],
    loQuestions: 3,
    question: false,
    counter: -1,
    bgMusic: false,
    index: -1,
    rightBox: null,
    falseBox: null,
    count: 0,
    questionsNumber: -1,
    questionNumber: 0,
    bgAudio: new Audio(),
    clickBtn: new Audio(),
    wrongAnswer: new Audio(),
    rightAnswer: new Audio(),
    robotsSound: new Audio(),
    zokiBoring: new Audio(),
    feedback: false,
    screenClick: (number = 0),
    screenInterval: null,
    qSound: new Audio(),
    sec: null,
    setInterval: null,
    startLo: false,
    attamps: 0,
    content: null,
    helpHand: true,
    border: null,
    shuffled: [],
    setTimeOut: null,
    zokiStatus: false,
    answer: [],
    showAnswers: [],
    test: 0,
    result: 0,
    finalProgress: 0,
    finalResult: "",
    zokifeedback: false,
    inactiveInputs: null,
  },

  create() {
    // this.shuffle(this.posts[0].items);
  },
  mounted() {
    this.shuffle(this.posts[0].items);
    this.numOfQuestions();
    this.bgAudio.src = "/assets/audio/music.mp3";
    this.wrongAnswer.src = "/assets/audio/WrongAnswer.mp3";
    this.rightAnswer.src = "/assets/audio/RightAnswer.mp3";
    this.robotsSound.src = "/assets/audio/comedy.mp3";
    this.clickBtn.src = "/assets/audio/click_btn.mp3";
    this.zokiBoring.src = "/assets/audio/Knock knock.mp3";
    finalResponse.submitData(JSON.stringify(this.posts[0]), 1);
  },

  methods: {
    muteMusic() {
      this.bgMusic = !this.bgMusic;
      this.bgAudio.loop = true;
      this.bgAudio.paused ? this.bgAudio.play() : this.bgAudio.pause();
    },

    // Get answer maxlength ...
    // suitable for both input types ...

    maxLength(event, element) {
      this.posts[0].items.filter((el) => {
        if (el.active) {
          this.content = el.content;
          this.answers = el.content.slice();
          if (this.showAnswers.length == 0) {
            el.content.forEach((elem) => {
              elem.input.valid.forEach((e) => {
                this.showAnswers.push(e.slice());
              });
            });
          }
        }
      });

      let count = 0;
      document.querySelectorAll(".active input").forEach((el) => {
        el.value == "" ? count++ : "";
      });
      if (count == 0) {
        document.querySelector(".check.hand")?.classList.add("display");
      } else {
        document.querySelector(".check.hand")?.classList.remove("display");
        document
          .querySelector(".display-answer.hand")
          ?.classList.remove("display");
      }

      this.index = event.target.getAttribute("index");
      let maxLength = 0;
      element.content[this.index - 1].input.valid.forEach((el) => {
        maxLength = maxLength > el.length ? maxLength : el.length;
      });
      event.target.setAttribute("maxlength", maxLength);
    },

    isAllQuestionsRight() {
      this.reset();
      this.zokiStatus = true;
      this.rightAnswer.play();
      zokicharecter.playSegments([50, 90], true);
      document.querySelector(".check.hand")?.classList.remove("display");
      document
        .querySelector(".display-answer.hand")
        ?.classList.remove("display");
      document.querySelector(".check.hand")?.classList.add("hide");
      document.querySelector(".check-button")?.classList.add("disable");
      document
        .querySelector(".display-answer-button")
        ?.classList.add("disable");
      document.querySelector(".next-button")?.classList.add("hide");

      setTimeout(() => {
        this.feedback = !this.question;
        this.robotsSound.play();
        robots.playSegments([0, 90], true);
      }, 3000);
      setTimeout(() => {
        this.reset();
        zokicharecter.playSegments([0, 40], true);
        this.question = true;
        this.calculate();
      }, 5500);
    },

    checkvalue(event, element) {
      // Loop over the valid answers array to check if it's right ...
      this.inactiveInputs = document.querySelectorAll(".active .inactive");
      console.log(this.inactiveInputs.length);
      if (element.type == 1) {
        for (const el of element.content[this.index - 1].input.valid) {
          if (el === event.target.value.trim()) {
            event.target.classList.add("right");
            event.target.classList.remove("wrong");
            event.target.classList.remove("false");
            event.target.setAttribute("disabled", "");
            element.correctCounter += 1;
            this.test += 1;
            break;
          } else {
            event.target.classList.remove("right");
            event.target.classList.add("wrong");
            event.target.classList.add("false");
          }
        }
      } else {
        for (const elem of this.answers[this.index - 1].input.valid) {
          if (elem === event.target.value.trim()) {
            let idx = this.answers[this.index - 1].input.valid.indexOf(
              event.target.value
            );
            this.answers[this.index - 1].input.valid.splice(idx, 1);
            // delete this.answers[this.index -1].input.valid[idx];
            event.target.classList.add("right");
            event.target.classList.remove("wrong");
            event.target.classList.remove("false");
            this.test += 1;
            event.target.setAttribute("disabled", "");
            element.correctCounter += 1;
            // console.log(this.test);
            break;
          } else {
            event.target.classList.remove("right");
            event.target.classList.add("wrong");
            event.target.classList.add("false");
          }
        }
      }

      if (
        this.test ===
        element.numberOfquestions - this.inactiveInputs.length
      ) {
        this.inactiveInputs.forEach((el) => {
          el.classList.remove("inactive");
        });
      }

      if (this.test === element.numberOfquestions) {
        this.isAllQuestionsRight();
        this.finished();
      }
    },

    // Remove wrong style ...
    foucs(event) {
      this.clickBtn.play();
      zokicharecter.playSegments([0, 40], true);
      this.reset();
      this.questionSound(this.zokiStatus);
      event.target.classList.remove("false");
    },

    home() {
      location.reload();
    },

    // Get number of questions
    numOfQuestions() {
      this.posts[0].numberOfquestion = this.loQuestions;
      this.posts[0].items.forEach((el) => {
        if (el.type == 1) {
          el.numberOfquestions = el.content.length;
        } else {
          el.content.forEach((elem) => {
            el.numberOfquestions += elem.input.nums;
          });
        }
      });
    },

    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      this.shuffled = a.slice(0, this.loQuestions);
    },

    checkanswer() {
      document.querySelector(".check.hand")?.classList.add("hide");
      document.querySelector(".display-answer.hand")?.classList.add("display");

      this.reset();

      this.clickBtn.play();
      this.count = 0;
      this.rightBox = document.querySelectorAll(".active .right");
      this.rightBox.forEach((elem) => {
        elem.classList.remove("false");
        elem.classList.add("true");
        this.count += 1;
      });

      this.falseBox = document.querySelectorAll(".active .wrong");
      this.falseBox.forEach((elem) => {
        elem.classList.remove("true");
        elem.classList.add("false");
      });

      this.posts[0].items.filter((el) => {
        if (el.active) {
          this.content = el.content;
          el.correctCounter = this.rightBox.length;
          if (this.falseBox.length === 0 && this.inactiveInputs.length == 0) {
            this.isAllQuestionsRight();
          }else if(this.falseBox.length === 0){
            // console.log('happy')
            zokicharecter.playSegments([50, 90], true);
          }
           else {
            this.wrongAnswer.play();
            zokicharecter.playSegments([98, 140], true);
          }
          // this.isTheQuestionRight();
          this.questionSound(this.zokiStatus);
        }
      });
    },

    reset() {
      this.qSound.pause();
      clearInterval(this.setInterval);
      this.screenClick = 0;
      this.zokiBoring.pause();
      clearTimeout(this.setTimeOut);
    },

    displayAnswer() {
      this.posts[0].items.filter((el) => {
        if (el.active) {
          this.content = el.content;
          if (this.showAnswers.length == 0) {
            el.content.forEach((elem) => {
              elem.input.valid.forEach((e) => {
                this.showAnswers.push(e.slice());
              });
            });
          }
        }
      });
      document
        .querySelector(".display-answer.hand")
        ?.classList.remove("display");
      document.querySelector(".help.hand")?.classList.remove("display");
      document.querySelector(".next.hand")?.classList.add("display");
      this.robots = document.getElementById("robots");
      zokicharecter.playSegments([98, 140], true);
      this.clickBtn.play();
      document.querySelector(".next-button")?.classList.remove("hide");
      document
        .querySelector(".display-answer-button")
        ?.classList.add("disable");
      document.querySelector(".check-button")?.classList.add("disable");
      this.zokiStatus = false;
      this.reset();
      this.questionSound(this.zokiStatus);
      // inactivee
      document.querySelectorAll(".active .inactive").forEach((el) => {
        el.classList.remove("inactive");
      });
      // ----------------------------------
      document.querySelectorAll(".active .normal").forEach((elem, i) => {
        let index = elem.getAttribute("index") - 1;
        let type = elem.getAttribute("inputType");
        if (type == 1) {
          elem.value = this.content[index].input.valid[0];
        } else {
          elem.value = this.showAnswers[i];
        }
        elem.classList.remove("false");
        elem.setAttribute("disabled", "");
        // elem.style.pointerEvents = "none";
        elem.style.backgroundImage = "url(assets/images/display-input.png)";
        elem.style.color = "#fff";
      });
    },

    next() {
      this.calculate();
      this.clickBtn.play();
      this.finished();
      this.question = true;
      document.querySelector(".next.hand")?.classList.remove("display");
      document.querySelector(".next-button")?.classList.add("hide");
      this.reset();
    },

    start() {
      this.startLo = true;
      this.muteMusic();
      setTimeout(() => {
        this.qSound.src =
          "/assets/audio/Q/Q" + this.posts[0].items[this.counter].id + ".mp3";
        this.qSound.play();
      }, 1000);
      this.nextQuestion();
      zokicharecter.playSegments([0, 40], true);
    },

    nextQuestion() {
      this.test = 0;
      zokicharecter.playSegments([0, 40], true);
      document
        .querySelector(".display-answer-button")
        ?.classList.remove("disable");
      document.querySelector(".check-button")?.classList.remove("disable");
      document.querySelector(".next-button")?.classList.add("hide");
      this.answers = [];
      this.showAnswers = [];
      this.zokiStatus = false;
      this.border = document.getElementsByClassName("screen-question");
      // document.querySelector(".check.hand")?.classList.remove("hide");
      this.counter += 1;
      this.feedback = this.question = false;
      this.questionsNumber = this.posts[0].items.length;
      if (this.counter > 0) {
        setTimeout(() => {
          this.qSound.src =
            "/assets/audio/Q/Q" + this.posts[0].items[this.counter].id + ".mp3";
          this.qSound.play();
          this.qSound.currentTime = 0;
        }, 1500);
      }
      this.questionSound(this.zokiStatus);

      if (this.questionsNumber != this.counter) {
        this.posts[0].items.forEach((element) => {
          element.active = false;
        });
      }
      this.posts[0].items[this.counter].active = true;
    },

    questionSound(t) {
      this.qSound.currentTime = 0;
      this.zokiBoring.currentTime = 0;
      this.qSound.addEventListener("loadedmetadata", (event) => {
        this.sec = this.qSound.duration + 10;
      });
      if (!t) {
        this.setInterval = setInterval(() => {
          this.screenClick += 1;
          if (this.screenClick == Math.floor(this.sec)) {
            setTimeout(() => {
              this.zokiBoring.loop = true;
              this.zokiBoring.play();
              zokicharecter.playSegments([145, 192], true);
            }, 150);

            if (!this.question) {
              this.setTimeOut = setTimeout(() => {
                this.qSound.play();
                this.screenClick = 0;
                this.zokiBoring.pause();
              }, 10000);
            }
          }
        }, 1000);
      }
    },

    focusin(event) {
      this.clickBtn.play();
      this.helpHand = false;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (innerWidth > innerHeight) {
          if (event.target.offsetTop > innerHeight / 3) {
            this.border[0].style.cssText = `padding-bottom: ${
              innerHeight / 30
            }vw`;
            this.border[0].scrollTop = innerHeight / 30;
            document.querySelector(".zoki-charecter")?.classList.add("hide");
          }
        }
      }
    },

    focusout() {
      document.querySelector(".zoki-charecter")?.classList.remove("hide");
      this.border[0].style.cssText = "padding-bottom: 0vw ;";
    },

    calculate() {
      this.posts[0].items.filter((el) => {
        if (el.active) {
          console.log("right" + el.correctCounter);
          if (this.test == el.numberOfquestions) {
            this.result += 1;
            console.log("re" + this.result);
          }
        }
      });

      // console.log(progressbar);
      this.finalProgress = (this.result / this.loQuestions) * 100;
      console.log(this.finalProgress);
      if (this.finalProgress == 0) {
        progressbar.playSegments([0, 1], true);
        this.finalResult = "ضعيف";
        console.log("ضعيف");
        this.zokifeedback = true;
      } else if (this.finalProgress <= 50) {
        progressbar.playSegments([1, 50], true);
        this.finalResult = "ضعيف";
        console.log("ضعيف");
        this.zokifeedback = true;
      } else if (this.finalProgress >= 51 && this.finalProgress < 65) {
        progressbar.playSegments([50, 65], true);
        console.log("مقبول");
        this.finalResult = "مقبول";
        this.zokifeedback = true;
      } else if (this.finalProgress > 65 && this.finalProgress < 85) {
        progressbar.playSegments([65, 88], true);
        console.log("جيد ");
        this.finalResult = "جيد";
        this.zokifeedback = false;
      } else if (this.finalProgress > 84 && this.finalProgress <= 100) {
        progressbar.playSegments([88, 100], true);
        console.log("يفوق التوقعات ");
        this.finalResult = "يفوق التوقعات ";
        this.zokifeedback = false;
      }
    },

    finished() {
      this.posts[0].counterCorrect === this.posts[0].numberOfquestion
        ? finalResponse.submitData(JSON.stringify(this.posts[0]), 4)
        : finalResponse.submitData(JSON.stringify(this.posts[0]), 1);
    },
  },
});
