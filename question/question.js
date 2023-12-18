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
  
  const questionText = document.getElementById("question-text");
  const choices = document.querySelectorAll(".choice");
  const scoreText = document.getElementById("score-text");
  
  function showQuestion() {
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
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "flex";
    scoreText.textContent = `Your Score: ${score}/${questions.length}`;
  }
  
  showQuestion();
  