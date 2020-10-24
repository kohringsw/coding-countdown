var startButton = document.getElementById("start-button");
var quizTimer = document.getElementById("timer");
var timeLeft = 10;
var answerButtonA = document.getElementById("A");
var answerButtonB = document.getElementById("B");
var answerButtonC = document.getElementById("C");
var answerButtonD = document.getElementById("D");
var yourScore = document.getElementById("question");

// show questions and hide introductory page
function showQuestions() {
    var showQuestions = document.getElementById("showQuestions");
    showQuestions.style.display = "block";
    var intro = document.getElementById("intro");
    intro.style.display = "none";
}

startButton.addEventListener("click", showQuestions);

// start timer
function startTimer () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000); 
}

startButton.addEventListener("click", startTimer);

// questions array for the Coding Countdown Challenge
var questions = [
    {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    correct: "C. Alerts"
    },
    
    {
    question: "The condition in an if/else statement is enclosed within:",
    choices: ["A. Parentheses", "B. Curly brackets", "C. Quotes", "D. Square brackets"],
    correct: "A. Parentheses"
    },

    {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
    correct: "D. All of the above"
    },

    {
    question: "When being assigned to variables, strings must be enclosed within:",
    choices: ["A. Commas", "B. Quotes", "C. Curly Brackets", "D. Parentheses"],
    correct: "B. Quotes"
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["A. Console.log", "B. GitHub", "C. JavaScript", "D. For loops"],
    correct: "A. Console.log"
    },
] 

// show score function after all questions are answered or timer is 0
function showScore() {
    var showQuestions = document.getElementById("showQuestions");
    showQuestions.style.display = "none";
    var yourScore = document.getElementById("yourScore");
    yourScore.style.display = "block";
    var gameScore = document.getElementById("gameScore");
    gameScore.textContent = timeLeft;

}