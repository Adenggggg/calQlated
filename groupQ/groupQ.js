const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest mammal?",
      choices: ["Elephant", "Blue Whale", "Giraffe"],
      correctAnswer: 1,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  
  const questionText = document.getElementById("question-text");
  const choices = document.querySelectorAll(".choice");
  const scoreText = document.getElementById("score-text");
  const timerMinutesText = document.getElementById("timer-minutes");
  const timerSecondsText = document.getElementById("timer-seconds");
  
  function startTimer() {
    let seconds = 10;
  
    timer = setInterval(() => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
  
      timerMinutesText.textContent = padZero(minutes);
      timerSecondsText.textContent = padZero(remainingSeconds);
  
      if (seconds <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
  
      seconds--;
    }, 1000);
  }
  
  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }
  
  function showQuestion() {
    clearInterval(timer);
    startTimer();
  
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    choices.forEach((choice, index) => {
      choice.textContent = current.choices[index];
    });
  }
  
  function checkAnswer(answerIndex) {
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      score++;
    }
  
    nextQuestion();
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  }
  
  function showScore() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "flex";
    scoreText.textContent = `Your Score: ${score}/${questions.length}`;

    document.getElementById("timer-container").style.display = "none";
    document.getElementById("timer-minutes").textContent = "00";
    document.getElementById("timer-seconds").textContent = "00";

    startConfetti();
  }
  
  function startConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  
  showQuestion();
  