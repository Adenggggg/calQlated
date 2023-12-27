// Set the total time for the quiz in seconds
var totalTime = 60; // 1 minute

// Variable to store the remaining time
var timeRemaining = totalTime;

// Function to start the timer
function startTimer() {
  var timerBar = document.getElementById('timer-bar');

  // Calculate the width of the timer bar for each iteration
  var barIncrement = 100 / totalTime;

  // Update the timer every 100 milliseconds for a smoother animation
  var timerInterval = setInterval(function () {
    timeRemaining -= 0.1; // Decrease by 0.1 for smoother animation

    // Update the timer bar width
    var percentageRemaining = (timeRemaining / totalTime) * 100;
    var timerWidth = 100 - percentageRemaining; // Adjust to make the bar move from right to left
    timerBar.style.width = timerWidth + '%';

    // Check if the time is up
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);

      // Perform actions when the timer reaches zero (e.g., submit the quiz)
      submitQuiz();
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  // Initially hide the quiz container
  document.getElementById('quiz-container').style.opacity = '1';

  // Get all questions
  var questions = document.querySelectorAll('.question-container');

  // Reveal all questions at once
  questions.forEach(function (question) {
    question.style.opacity = '1';
  });

  // Start the timer when the page loads
  startTimer();
});

function submitQuiz() {
  // Add your scoring logic here
  // For simplicity, let's assume the user gets 1 point for each correct answer
  var score = 0;

  // Check the answers for each question
  // Add your scoring logic here

  // Display the score on the page
  document.getElementById('result').innerText = `Your final score is: ${score}`;
  document.getElementById('result').style.display = 'block';

  // Optionally, you can hide the submit button after the quiz is submitted
  document.getElementById('submit-button').style.display = 'none';

  // Optionally, you can hide the timer after the quiz is submitted
  document.getElementById('timer').style.display = 'none';
}
