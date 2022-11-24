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
            type: 2,
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
                  nums: 5,
                  valid: ["0", "5", "10", "15", "20"],
                },
              },
              {
                input: {
                  nums: 10,
                  valid: [
                    "0",
                    "2",
                    "4",
                    "6",
                    "8",
                    "10",
                    "12",
                    "14",
                    "16",
                    "18",
                  ],
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
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 1,
            parag: [" اُذكرْ أول 7 مضاعفات للعدد 6 "],
            parag1: ["اُذكرْ أول 5 مضاعفات للعدد 8"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 7,
                  valid: ["0", "6", "12", "18", "24", "30", "36"],
                },
              },
              {
                input: {
                  nums: 5,
                  valid: ["0", "8", "16", "24", "32"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "24"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 3,
            parag: ["  اُذكرْ أول 10 مضاعفات للعدد 3 "],
            parag1: ["اُذكرْ أول 4 مضاعفات للعدد 9"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 10,
                  valid: [
                    "0",
                    "3",
                    "6",
                    "9",
                    "12",
                    "15",
                    "18",
                    "21",
                    "24",
                    "27",
                  ],
                },
              },
              {
                input: {
                  nums: 4,
                  valid: ["0", "9", "18", "27"],
                },
              },
              {
                input: {
                  nums: 4,
                  valid: ["0", "9", "18", "27"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 4,
            parag: ["  اُذكرْ أول 8 مضاعفات للعدد 2 "],
            parag1: ["اُذكرْ أول 4 مضاعفات للعدد 7"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 8,
                  valid: ["0", "2", "4", "6", "8", "10", "12", "14"],
                },
              },
              {
                input: {
                  nums: 4,
                  valid: ["0", "7", "14", "21"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "14"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 5,
            parag: ["  اُذكرْ أول 7 مضاعفات للعدد 6 "],
            parag1: ["اُذكرْ أول 7 مضاعفات للعدد 4"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 7,
                  valid: ["0", "6", "12", "18", "24", "30", "36"],
                },
              },
              {
                input: {
                  nums: 7,
                  valid: ["0", "4", "8", "12", "16", "20", "24"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "12", "24"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 6,
            parag: [" اُذكرْ مضاعفات العدد 2 الأقل من 20"],
            parag1: ["اُذكرْ مضاعفات العدد 4 الأقل من 20"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 10,
                  valid: [
                    "0",
                    "2",
                    "4",
                    "6",
                    "8",
                    "10",
                    "12",
                    "14",
                    "16",
                    "18",
                  ],
                },
              },
              {
                input: {
                  nums: 5,
                  valid: ["0", "4", "8", "12", "16"],
                },
              },
              {
                input: {
                  nums: 5,
                  valid: ["0", "4", "8", "12", "16"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 7,
            parag: ["اُذكرْ مضاعفات العدد 2 المحصورة بين 20 ،  31"],
            parag1: ["اُذكرْ مضاعفات العدد 3 المحصورة بين 20 ،  31"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 6,
                  valid: ["20", "22", "24", "26", "28", "30"],
                },
              },
              {
                input: {
                  nums: 4,
                  valid: ["21", "24", "27", "30"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["24", "30"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 8,
            parag: ["اُذكرْ مضاعفات العدد 3 المحصورة بين 14 ،  32"],
            parag1: ["اُذكرْ مضاعفات العدد 5 الأقل من 32"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 6,
                  valid: ["15", "18", "21", "24", "27", "30"],
                },
              },
              {
                input: {
                  nums: 7,
                  valid: ["0", "5", "10", "15", "20", "25", "30"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["15", "30"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 9,
            parag: ["اُذكرْ مضاعفات العدد 3 المحصورة بين 20 ،  40"],
            parag1: ["اُذكرْ مضاعفات العدد 4 المحصورة بين 19 ،  40"],
            parag2: ["ما المضاعفات المشتركة للعددين؟ "],
            content: [
              {
                input: {
                  nums: 7,
                  valid: ["21", "24", "27", "30", "33", "36", "39"],
                },
              },
              {
                input: {
                  nums: 5,
                  valid: ["20", "24", "28", "32", "36"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["36", "24"],
                },
              },
            ],
          },
          {
            type: 2,
            correctCounter: 0,
            numberOfquestions: 0,
            active: false,
            id: 10,
            parag: ["اُذكرْ أول 5 مضاعفات للعدد 8 "],
            parag1: ["اُذكرْ أول 7 مضاعفات للعدد 4 "],
            parag2: ["اُذكرْ أول 5 مضاعفات للعدد 6"],
            parag3: ["ما المضاعفات المشتركة للأعداد الثلاثة؟ "],
            content: [
              {
                input: {
                  nums: 5,
                  valid: ["0", "8", "16", "24", "32"],
                },
              },
              {
                input: {
                  nums: 7,
                  valid: ["0", "4", "8", "12", "16", "20", "24"],
                },
              },
              {
                input: {
                  nums: 5,
                  valid: ["0", "6", "12", "18", "24"],
                },
              },
              {
                input: {
                  nums: 2,
                  valid: ["0", "24"],
                },
              },
            ],
          },
        ],
      },
    ],
    loQuestions: 6,
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
    progressBarAnimation: null,
    answer: [],
    showAnswers: [],
    test: 0,
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
            // console.log(this.showAnswers);
          }
        }
      });

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
      document.querySelector(".check-button")?.classList.add("disable");
      event.target.setAttribute("disabled", "");
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
      }, 5500);
    },

    checkvalue(event, element) {
      // Loop over the valid answers array to check if it's right ...
      if (element.type == 1) {
        for (const el of element.content[this.index - 1].input.valid) {
          if (el === event.target.value.trim()) {
            event.target.classList.add("right");
            event.target.classList.remove("wrong");
            event.target.classList.remove("false");
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
            // console.log(this.test);
            break;
          } else {
            event.target.classList.remove("right");
            event.target.classList.add("wrong");
            event.target.classList.add("false");
          }
          // }
        }
      }

      if (this.test === element.numberOfquestions) {
        this.isAllQuestionsRight();
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
      this.posts[0].numberOfquestion = this.posts[0].items.length;
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
      this.reset();
      document.querySelector(".check.hand")?.classList.remove("display");
      document.querySelector(".check.hand")?.classList.add("hide");
      this.clickBtn.play();
      this.count = 0;
      this.rightBox = document.querySelectorAll(".active .right");
      this.rightBox.forEach((elem) => {
        elem.classList.remove("false");
        elem.classList.add("true");
        this.count += 1;
      });
      // console.log("right " + this.rightBox.length);
      this.falseBox = document.querySelectorAll(".active .wrong");
      this.falseBox.forEach((elem) => {
        elem.classList.remove("true");
        elem.classList.add("false");
      });
      // console.log("false " + this.falseBox.length);
      this.posts[0].items.filter((el) => {
        if (el.active) {
          this.content = el.content;
          el.correctCounter = this.rightBox.length;
          this.isTheQuestionRight();
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

    isTheQuestionRight() {
      if (this.falseBox.length === 0) {
        this.isAllQuestionsRight();
      } else {
        this.wrongAnswer.play();
        zokicharecter.playSegments([98, 140], true);
      }
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
      document.querySelectorAll(".active .normal").forEach((elem, i) => {
        let index = elem.getAttribute("index") - 1;
        let type = elem.getAttribute("inputType");
        if (type == 1) {
          elem.value = this.content[index].input.valid[0];
        } else {
          elem.value = this.showAnswers[i];
        }
        elem.classList.remove("false");
        elem.style.pointerEvents = "none";
        elem.style.backgroundImage = "url(assets/images/display-input.png)";
        elem.style.color = "#fff";
      });
    },

    next() {
      this.clickBtn.play();
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
      document.querySelector(".check.hand")?.classList.remove("hide");
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
  },
});
