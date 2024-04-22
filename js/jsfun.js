
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('triviaInput').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        checkTriviaAnswer();
      }
    });
  
    document.getElementById('numberInput').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        checkNumber();
      }
    });
  });
  
  // Function to check the trivia answer
  function checkTriviaAnswer() {
    var userGuess = document.getElementById('triviaInput').value.trim();
    var result = document.getElementById('triviaResult');
    if (userGuess.toLowerCase() === 'paris') {
      result.innerHTML = `<div class="alert alert-success" role="alert">
                            You guessed ${userGuess}. Correct!
                          </div>`;
    } else {
      result.innerHTML = `<div class="alert alert-danger" role="alert">
                            You guessed ${userGuess}. Incorrect!
                          </div>`;
    }
  }
  
  // Function to check if the number is five digits and if it's odd or even
  function checkNumber() {
    var number = document.getElementById('numberInput').value.trim();
    var result = document.getElementById('numberResult');
    // Check if the number is exactly five digits
    if (/^\d{5}$/.test(number)) {
      var isEven = parseInt(number, 10) % 2 === 0;
      result.innerHTML = `<div class="alert alert-info" role="alert">
                            ${number} is an ${isEven ? 'even' : 'odd'} number.
                          </div>`;
    } else {
      result.innerHTML = `<div class="alert alert-warning" role="alert">
                            Please enter a valid 5-digit number.
                          </div>`;
    }
  }
  