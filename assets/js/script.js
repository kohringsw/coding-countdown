var startButton = document.getElementById("start-button");

// show questions and hide introductory page
function showQuestions() {
    var showQuestionsEl = document.getElementById("#showQuestions");
    showQuestionsEl.style.display = "flex";
    var introEl = document.getElementById("#intro");
    introEl.style.display = "none";
}

startButton.onclick = showQuestions;