// Function to check the user's answer and provide feedback
function checkAnswer() {
  // The correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
