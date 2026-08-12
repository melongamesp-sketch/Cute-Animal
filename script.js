document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Hero Slider
  // =========================

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  let currentSlide = 0;
  let slideTimer;

  function showSlide(index) {
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startSlider() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  if (slides.length > 0) {
    showSlide(0);
    startSlider();
  }


  // =========================
  // Smooth Scroll
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // =========================
  // Mobile Navigation
  // =========================

  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });

  }


  // =========================
  // Dog Life Diagnosis
  // =========================

  const diagnosis = {

    questions: [

      {
        question: "犬との時間をどのくらい作れそう？",
        options: [
          { text: "かなり作れる", score: 3 },
          { text: "ある程度なら作れる", score: 2 },
          { text: "あまり時間がない", score: 1 }
        ]
      },

      {
        question: "毎日の散歩はどう感じる？",
        options: [
          { text: "楽しそう！", score: 3 },
          { text: "できそう", score: 2 },
          { text: "少し大変そう", score: 1 }
        ]
      },

      {
        question: "抜け毛や掃除は？",
        options: [
          { text: "全然気にならない", score: 3 },
          { text: "多少なら大丈夫", score: 2 },
          { text: "できれば少ない方がいい", score: 1 }
        ]
      },

      {
        question: "犬のしつけについては？",
        options: [
          { text: "しっかり勉強したい", score: 3 },
          { text: "基本から覚えたい", score: 2 },
          { text: "できるだけ簡単にしたい", score: 1 }
        ]
      },

      {
        question: "犬と暮らす上で一番大切なのは？",
        options: [
          { text: "たくさん遊ぶこと", score: 3 },
          { text: "一緒にのんびり過ごすこと", score: 2 },
          { text: "お世話の負担を抑えること", score: 1 }
        ]
      },

      {
        question: "旅行や外出が多い？",
        options: [
          { text: "あまり多くない", score: 3 },
          { text: "たまにある", score: 2 },
          { text: "かなり多い", score: 1 }
        ]
      },

      {
        question: "家の広さは？",
        options: [
          { text: "広め", score: 3 },
          { text: "普通", score: 2 },
          { text: "コンパクト", score: 1 }
        ]
      },

      {
        question: "犬の運動量についてどう思う？",
        options: [
          { text: "たくさん運動させたい", score: 3 },
          { text: "普通くらいがいい", score: 2 },
          { text: "できるだけ少ない方がいい", score: 1 }
        ]
      },

      {
        question: "家族みんなで犬を迎える？",
        options: [
          { text: "みんなで協力する", score: 3 },
          { text: "主に自分がお世話する", score: 2 },
          { text: "ほぼ自分だけ", score: 1 }
        ]
      },

      {
        question: "犬との暮らしで楽しみなのは？",
        options: [
          { text: "一緒に遊ぶ！", score: 3 },
          { text: "毎日そばにいること", score: 2 },
          { text: "かわいい姿を見ること", score: 1 }
        ]
      },

      // -------------------------
      // 11〜15問目
      // -------------------------

      {
        question: "休日は犬とどう過ごしたい？",
        options: [
          { text: "一緒に外へ出かけたい", score: 3 },
          { text: "近所を散歩したい", score: 2 },
          { text: "家でゆっくりしたい", score: 1 }
        ]
      },

      {
        question: "犬のお手入れについては？",
        options: [
          { text: "こまめにお手入れしたい", score: 3 },
          { text: "必要ならできる", score: 2 },
          { text: "できるだけ簡単がいい", score: 1 }
        ]
      },

      {
        question: "犬と一緒に運動するなら？",
        options: [
          { text: "たくさん運動したい", score: 3 },
          { text: "軽い運動ならしたい", score: 2 },
          { text: "あまり運動はしたくない", score: 1 }
        ]
      },

      {
        question: "犬が少しやんちゃでも大丈夫？",
        options: [
          { text: "もちろん大丈夫！", score: 3 },
          { text: "ある程度なら大丈夫", score: 2 },
          { text: "できれば落ち着いた犬がいい", score: 1 }
        ]
      },

      {
        question: "犬との暮らしで一番重視したいのは？",
        options: [
          { text: "一緒にたくさん楽しむこと", score: 3 },
          { text: "無理なく楽しく暮らすこと", score: 2 },
          { text: "生活への負担を抑えること", score: 1 }
        ]
      }

    ]

  };


  // =========================
  // Diagnosis Elements
  // =========================

  const diagnosisStart =
    document.querySelector("#diagnosisStart");

  const diagnosisQuiz =
    document.querySelector("#diagnosisQuiz");

  const diagnosisResult =
    document.querySelector("#diagnosisResult");

  const quizCount =
    document.querySelector("#quizCount");

  const progressBar =
    document.querySelector("#progressBar");

  const quizQuestion =
    document.querySelector("#quizQuestion");

  const quizOptions =
    document.querySelector("#quizOptions");

  const skipDiagnosis =
    document.querySelector("#skipDiagnosis");

  const quizBack =
    document.querySelector("#quizBack");

  const restartDiagnosis =
    document.querySelector("#restartDiagnosis");

  const resultFace =
    document.querySelector("#resultFace");

  const resultTitle =
    document.querySelector("#resultTitle");

  const resultText =
    document.querySelector("#resultText");

  const resultSize =
    document.querySelector("#resultSize");

  const resultTips =
    document.querySelector("#resultTips");


  // =========================
  // Diagnosis State
  // =========================

  let selectedQuestionCount = 5;
  let currentQuestion = 0;
  let totalScore = 0;


  // =========================
  // Start Diagnosis
  // =========================

  function startDiagnosis(questionCount) {

    selectedQuestionCount =
      Math.min(questionCount, diagnosis.questions.length);

    currentQuestion = 0;
    totalScore = 0;

    if (diagnosisStart) {
      diagnosisStart.classList.add("hidden");
    }

    if (diagnosisResult) {
      diagnosisResult.classList.add("hidden");
    }

    if (diagnosisQuiz) {
      diagnosisQuiz.classList.remove("hidden");
    }

    if (progressBar) {
      progressBar.style.width = "0%";
    }

    showQuestion();

  }


  // =========================
  // Show Question
  // =========================

  function showQuestion() {

    if (!quizQuestion || !quizOptions) return;

    const question =
      diagnosis.questions[currentQuestion];

    if (!question) {
      showResult();
      return;
    }

    // Question number
    if (quizCount) {
      quizCount.textContent =
        `${currentQuestion + 1} / ${selectedQuestionCount}`;
    }

    // Question text
    quizQuestion.textContent =
      question.question;

    // Progress
    if (progressBar) {

      const progress =
        (currentQuestion / selectedQuestionCount) * 100;

      progressBar.style.width =
        `${progress}%`;
    }

    // Clear old options
    quizOptions.innerHTML = "";


    // Create answer buttons
    question.options.forEach(option => {

      const button =
        document.createElement("button");

      button.type = "button";

      // CSSの .quiz-option を使用
      button.className = "quiz-option";

      button.textContent =
        option.text;


      button.addEventListener("click", () => {

        totalScore += option.score;

        currentQuestion++;

        if (
          currentQuestion >= selectedQuestionCount
        ) {

          showResult();

        } else {

          showQuestion();

        }

      });


      quizOptions.appendChild(button);

    });

  }


  // =========================
  // Show Diagnosis Result
  // =========================

  function showResult() {

    if (diagnosisQuiz) {
      diagnosisQuiz.classList.add("hidden");
    }

    if (diagnosisResult) {
      diagnosisResult.classList.remove("hidden");
    }

    if (progressBar) {
      progressBar.style.width = "100%";
    }


    const maxScore =
      selectedQuestionCount * 3;

    const percentage =
      totalScore / maxScore;


    let resultFaceText = "🐶";
    let resultTitleText = "";
    let resultTextContent = "";
    let resultSizeText = "";
    let resultTipsText = "";


    // =========================
    // Active Type
    // =========================

    if (percentage >= 0.78) {

      resultFaceText = "🐕";

      resultTitleText =
        "アクティブわんこ生活タイプ";

      resultTextContent =
        "犬との時間をたっぷり楽しめそう！一緒に遊んだり、お散歩したり、いろいろな体験を共有する暮らしが向いています。";

      resultSizeText =
        "小型〜大型まで幅広く候補にできます。";

      resultTipsText =
        "活動的な犬との相性も考えやすいタイプです。ただし、大型犬ほど運動量や生活スペースなどの条件が増えるので、犬種ごとの特徴もしっかり確認しましょう。";

    }


    // =========================
    // Relaxed Type
    // =========================

    else if (percentage >= 0.55) {

      resultFaceText = "🐶";

      resultTitleText =
        "のんびり仲良しタイプ";

      resultTextContent =
        "犬と一緒にゆったり過ごす時間を大切にできそう。日常生活に無理なく犬との時間を組み込むスタイルが向いています。";

      resultSizeText =
        "小型〜中型犬が特に検討しやすいでしょう。";

      resultTipsText =
        "犬種によって必要な運動量や性格が大きく違います。見た目だけではなく、普段の生活リズムとの相性を確認しましょう。";

    }


    // =========================
    // Easygoing Type
    // =========================

    else {

      resultFaceText = "🏠";

      resultTitleText =
        "マイペース暮らしタイプ";

      resultTextContent =
        "犬を迎えるなら、生活リズムとの相性をじっくり考えるのがおすすめ。無理なく続けられる環境づくりがポイントです。";

      resultSizeText =
        "比較的小型犬から検討すると考えやすいでしょう。";

      resultTipsText =
        "小型犬だから必ずお世話が楽というわけではありません。犬種ごとの性格・運動量・お手入れ・健康面などを確認して選びましょう。";

    }


    // =========================
    // Put Result Into HTML
    // =========================

    if (resultFace) {
      resultFace.textContent =
        resultFaceText;
    }

    if (resultTitle) {
      resultTitle.textContent =
        resultTitleText;
    }

    if (resultText) {
      resultText.textContent =
        resultTextContent;
    }

    if (resultSize) {
      resultSize.textContent =
        resultSizeText;
    }

    if (resultTips) {
      resultTips.textContent =
        resultTipsText;
    }


    // 結果が見える位置までスクロール
    if (diagnosisResult) {

      setTimeout(() => {

        diagnosisResult.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 100);

    }

  }


  // =========================
  // Diagnosis Mode Buttons
  // =========================

  const modeCards =
    document.querySelectorAll(".mode-card");


  modeCards.forEach(card => {

    card.addEventListener("click", () => {

      const count =
        Number(card.dataset.count);

      if (!count) return;

      startDiagnosis(count);

    });

  });


  // =========================
  // Skip Diagnosis
  // =========================

  if (skipDiagnosis) {

    skipDiagnosis.addEventListener("click", () => {

      const checkSection =
        document.querySelector("#check");

      const costSection =
        document.querySelector("#cost");

      if (costSection) {

        costSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

      if (diagnosisStart) {
        diagnosisStart.classList.remove("hidden");
      }

      if (diagnosisQuiz) {
        diagnosisQuiz.classList.add("hidden");
      }

      if (diagnosisResult) {
        diagnosisResult.classList.add("hidden");
      }

    });

  }


  // =========================
  // Back To Diagnosis Top
  // =========================

  if (quizBack) {

    quizBack.addEventListener("click", () => {

      if (diagnosisQuiz) {
        diagnosisQuiz.classList.add("hidden");
      }

      if (diagnosisResult) {
        diagnosisResult.classList.add("hidden");
      }

      if (diagnosisStart) {
        diagnosisStart.classList.remove("hidden");
      }

      if (progressBar) {
        progressBar.style.width = "0%";
      }

      currentQuestion = 0;
      totalScore = 0;

    });

  }


  // =========================
  // Restart Diagnosis
  // =========================

  if (restartDiagnosis) {

    restartDiagnosis.addEventListener("click", () => {

      if (diagnosisResult) {
        diagnosisResult.classList.add("hidden");
      }

      if (diagnosisQuiz) {
        diagnosisQuiz.classList.add("hidden");
      }

      if (diagnosisStart) {
        diagnosisStart.classList.remove("hidden");
      }

      if (progressBar) {
        progressBar.style.width = "0%";
      }

      currentQuestion = 0;
      totalScore = 0;

      // 診断トップまで戻す
      if (diagnosisStart) {

        setTimeout(() => {

          diagnosisStart.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }, 100);

      }

    });

  }


  // =========================
  // FAQ Accordion
  // =========================

  const faqItems =
    document.querySelectorAll(".faq-question");

  faqItems.forEach(question => {

    question.addEventListener("click", () => {

      const item =
        question.closest(".faq-item");

      if (!item) return;

      const isOpen =
        item.classList.contains("open");


      document
        .querySelectorAll(".faq-item.open")
        .forEach(openItem => {
          openItem.classList.remove("open");
        });


      if (!isOpen) {
        item.classList.add("open");
      }

    });

  });


  // =========================
  // Scroll Reveal
  // =========================

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {
      observer.observe(element);
    });

  }

});