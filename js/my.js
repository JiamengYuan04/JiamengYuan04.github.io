const quizQuestions = [
    {
        question: "How many countries have I visited?",
        answer: "15",
        options: ["15", "10", "20", "25"]
    },
    {
        question: "What is my zodiac sign?",
        answer: "Libra",
        options: ["Libra", "Scorpio", "Gemini", "Aries"]
    },
    {
        question: "I have lived in Singapore, London, and Chicago during my studies. Guess which is my favorite city?",
        answer: "Chicago",
        options: ["Singapore", "London", "Chicago", "New York"]
    },
    {
        question: "Guess my MBTI?",
        answer: "INFP",
        options: ["INFP", "ENTJ", "ISTP", "ENFP"]
    }
];

let currentQuestion = 0;

function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    $('#question').text(question.question);
    $('#answers').empty();
    question.options.forEach(option => {
        $('#answers').append(`<button class="btn btn-outline-primary m-1" onclick="checkAnswer('${option}')">${option}</button>`);
    });
}

function checkAnswer(selected) {
    const question = quizQuestions[currentQuestion];
    if (selected === question.answer) {
        $('#quiz-result').text('Correct!').addClass('text-success').removeClass('text-danger');
        moveToNextQuestion();
    } else {
        $('#quiz-result').text(`Oops, that's not right. The correct answer is ${question.answer}.`).addClass('text-danger').removeClass('text-success');
        moveToNextQuestion();
    }
}

function moveToNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        setTimeout(() => {
            $('#quiz-result').text('');
            displayQuestion();
        }, 3000);
    } else {
        $('.quiz-card').hide(); // Hide the quiz card
        $('#quiz-result').text('End of quiz. Thanks for playing!').show();
        $('#restartQuiz').show(); 
    }
}

$(document).ready(function() {
    displayQuestion();
    $('#restartQuiz').click(function() {
        currentQuestion = 0;
        $('#quiz-result').text('');
        $('#restartQuiz').hide(); // Hide the restart button
        $('.quiz-card').show(); // Show the quiz card again
        displayQuestion();
    });
});
