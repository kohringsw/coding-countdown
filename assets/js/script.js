var startButton = document.getElementById("start-button");
var submitScoreButton = document.getElementById("submitScore")
var quizTimer = document.getElementById("timer");
var timeLeft = 75;
var answerButtonEl = document.getElementById("A", "B", "C", "D");
var answerButtonAEl = document.getElementById("A");
var answerButtonBEl = document.getElementById("B");
var answerButtonCEl = document.getElementById("C");
var answerButtonDEl = document.getElementById("D");
var rightAnswerEl = document.getElementById("right");
var wrongAnswerEl = document.getElementById("wrong");
var questionEl = document.getElementById("question");
var currentQuestionIndex = 0;
var finalQuestionIndex = 4;
var timerInterval;
var correct;
var gameScore = document.getElementById("gameScore");

// show questions and hide introductory page
function showQuestion() {
    var showQuestion = document.getElementById("showQuestion");
    showQuestion.style.display = "block";
    var intro = document.getElementById("intro");
    intro.style.display = "none";

    var currentQuestion = questions[currentQuestionIndex];
    questionEl.innerHTML = currentQuestion.question;
    answerButtonAEl.innerHTML = currentQuestion.choices[0];
    answerButtonBEl.innerHTML = currentQuestion.choices[1];
    answerButtonCEl.innerHTML = currentQuestion.choices[2];
    answerButtonDEl.innerHTML = currentQuestion.choices[3];
}

// start timer
function startTimer() {
    timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;

    
        if (timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000); 
}

function startQuiz() {
    showQuestion();
    startTimer();
}

startButton.addEventListener("click", startQuiz);

// questions array for the Coding Countdown Challenge
var questions = [
    {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    correct: "C"
    },
    
    {
    question: "The condition in an if/else statement is enclosed within:",
    choices: ["A. Parentheses", "B. Curly brackets", "C. Quotes", "D. Square brackets"],
    correct: "A"
    },

    {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
    correct: "D"
    },

    {
    question: "When being assigned to variables, strings must be enclosed within:",
    choices: ["A. Commas", "B. Quotes", "C. Curly Brackets", "D. Parentheses"],
    correct: "B"
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["A. Console.log", "B. GitHub", "C. JavaScript", "D. For loops"],
    correct: "A"
    },
] 

// check answer when button is clicked
function rightAnswer() {
    rightAnswerEl.style.display = "block";
    wrongAnswerEl.style.display = "none";
}

function wrongAnswer() {
    wrongAnswerEl.style.display = "block";
    rightAnswerEl.style.display = "none";
}

function checkAnswer(answer) {
    correct = questions[currentQuestionIndex].correct;
    
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        rightAnswer();
        currentQuestionIndex++;
        showQuestion();
    }

    else if (answer !== correct && currentQuestionIndex !==finalQuestionIndex) {
        wrongAnswer();
        currentQuestionIndex++;
        showQuestion();
        timeLeft = timeLeft - 14;
    }

    else if (answer !== correct || answer === correct && currentQuestionIndex === finalQuestionIndex) {
        showScore();
        clearInterval(timerInterval);
    }

    else {
        showScore();
        clearInterval(timerInterval);
    }
}

// show score function after all questions are answered or timer is 0
function showScore() {
    var showQuestion = document.getElementById("showQuestion");
    showQuestion.style.display = "none";
    var yourScore = document.getElementById("yourScore");
    yourScore.style.display = "block";
    gameScore.textContent = timeLeft;
}

function submitScore() {
    var inputNameEl = document.getElementById("score-name");
    localStorage.setItem("name", inputNameEl.value);
    localStorage.setItem("score", timeLeft);
}

submitScoreButton.addEventListener("click", submitScore);


