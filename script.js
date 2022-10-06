var questions = [
    {
        question: "To which region are old world monkeys native?",
        answers:[{text: "Africa and Asia", correct: true},
                {text: "South America", correct: false},
                {text: "Only Asia", correct: false},
                {text: "Only Africa", correct: false}]
    },
    {
        question: "To which region are new world monkeys native?",
        answers:[{text: "The United States", correct: false},
                {text: "Mexico, and Central and South America", correct: true},
                {text: "Africa", correct: false},
                {text: "Oceania", correct: false}]
    },
    {
        question: "What is the smallest monkey in the world?",
        answers:[{text: "Graells's Tamarin", correct: false},
                {text: "Pygmy Marmoset", correct: true},
                {text: "Night Monkey", correct: false},
                {text: "Dusky Titi", correct: false}]
    },
    {
        question: "What is the largest monkey in the world?",
        answers:[{text: "Nepal Grey Langur", correct: false},
                {text: "Olive Baboon", correct: false},
                {text: "Mandrill", correct: true},
                {text: "Chacma Baboon", correct: false}]
    },
    {
        question: "What is the loudest land animal on Earth?",
        answers:[{text: "Cicada", correct: false},
                {text: "Howler Monkey", correct: true},
                {text: "African Elephant", correct: false},
                {text: "Orangutan", correct: false}]
    },
    {
        question: "What traits do monkeys possess that apes don't?",
        answers:[{text: "Forward-facing eyes", correct: false},
                {text: "Opposable Thumbs", correct: false},
                {text: "Tails", correct: true},
                {text: "Fingernails", correct: false}]
    },
    {
        question: "Around how many different species of monkeys are there?",
        answers:[{text: "100", correct: false},
                {text: "250", correct: true},
                {text: "500", correct: false},
                {text: "1000", correct: false}]
    },
    {
        question: "What was the name of the first monkey to go to space?",
        answers:[{text: "Albert II", correct: true},
                {text: "Albert IV", correct: false},
                {text: "Enos", correct: false},
                {text: "Ham", correct: false}]
    },
    {
        question: "What is the fastest monkey?",
        answers:[{text: "Bald Uakari", correct: false},
                {text: "Chacma Baboon", correct: false},
                {text: "Patas Monkey", correct: true},
                {text: "Proboscis Monkey", correct: false}]
    },
    {
        question: "How long do monkeys sleep every night?",
        answers:[{text: "3 hours", correct: false},
                {text: "4.5 hours", correct: false},
                {text: "6.5 hours", correct: false},
                {text: "9.5 hours", correct: true}]
    },
    {
        question: "How old was the oldest monkey to ever live?",
        answers:[{text: "54 years, 22 days", correct: false},
                {text: "61 years, 26 days", correct: false},
                {text: "65 years, 268 days", correct: true},
                {text: "70 years, 52 days", correct: false}]
    },
]

// global variables
let score = 0;
let timer;
let timeLeft;
var currentQ;

// DOM objects
var startButton = document.querySelector("#startGame");
var startDisplay = document.querySelector("#startDisplay");
var questionDisplay = document.querySelector("#questionsDisplay");
var questionText = document.querySelector("#questionText");
var answerChoice = document.querySelector("#answers");
var endDisplay = document.querySelector("#endDisplay");
var highScoresDisplay = document.querySelector("#highScoresDisplay");
var highScoreName = document.querySelector("#highScoresName");
var highScoreScore = document.querySelector("#highScoresScore");
var seeScore = document.querySelector(".score");
var seeTimer = document.querySelector(".timer");
var timeLeftSpan = document.querySelector("#timer")
var scoreSpan = document.querySelector("#score")
var header = document.querySelector("#header");
var gameOverContainer = document.querySelector("#gameOverContainer")
var finalScoreEl = document.querySelector("#finalScore")
var result = document.querySelector("#result")
var submitScore = document.querySelector("#submitScore")
var nameInput = document.querySelector("#nameInput")
var clearScores = document.querySelector("#clearScores")
var submitScoreButton = document.querySelector("#submitScore")
var seeHighScores = document.querySelector("#seeHighScores")

startButton.hidden = false;
seeHighScores.hidden = false;

// Hides all the displays except for load screen
function hideAll() {
    startDisplay.hidden = true;
    startButton.hidden = true;
    questionDisplay.hidden = true;
    highScoresDisplay.hidden = true;
    seeScore.hidden = true;
    seeTimer.hidden = true;
    gameOverContainer.hidden = true;
    seeHighScores.hidden = true;
    gameOverButtons.hidden = true;
}

// First hides all, then displays the first question, time remaining, and score
// Sets time to 30 and score to 0
function startGame() {
    hideAll();
    seeScore.hidden = false;
    seeTimer.hidden = false;
    timeLeft = 31;
    score = 0;
    currentQ = 0;
    displayQ(questions[currentQ]);
    displayTime();
    displayScore();
    questionDisplay.hidden = false;
}

// Displays the time remaining, which counts down from 30 seconds
// When you reach zero seconds the game ends
function displayTime() {
    timer = setInterval(function () {
        timeLeft--;
        timeLeftSpan.innerHTML = timeLeft;
        if (timeLeft<=0) {
            clearInterval(timer);
            localStorage.setItem("mostRecentScore", score);
            gameOver();
        }
    }, 1000);
}

// Updates the score and displays it next to the score header
function displayScore() {
    clearInterval(score);
    scoreSpan.innerHTML = score;
}

// Creates 4 clickable buttons with each choice displayed inside
function displayQ(question) {
    questionText.innerText = question.question
    question.answers.forEach(answer => {
        var btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.classList.add("button");
        if(answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click", selectAnswer);
        answerChoice.appendChild(btn);
    });
}

// For question selection
// If the answer you click on doesn't match the correct answer from the dataset, your score and time are decreased
// If your answer matches, your score is increased
// Regardless of answer next question in the questions array is shown
// When there are no more questions to fetch run the gameOver() function
function selectAnswer(element) {
    var optFor = element.target;
    if (!optFor.dataset.correct) {
        timeLeft = timeLeft-5;
        score = score-2;
        displayScore();
    } if (optFor.dataset.correct) {
        score=score+10;
        displayScore();
    }
    if (currentQ == questions.length-1) {
        localStorage.setItem("mostRecentScore", score);
        gameOver();
    } else {
        currentQ++;
        clearQ();
        displayQ(questions[currentQ]);
    }
}

// Clears the choices for the question
function clearQ() {
    while (answerChoice.firstChild) {
        answerChoice.removeChild(answerChoice.firstChild);
    }
}

// Hides all, displays the game over screen and displays your score
function gameOver() {
    hideAll();
    clearInterval(timer);
    gameOverContainer.hidden = false;
    nameInput.value = "";
    finalScoreEl.innerHTML = "You got finished with a score of " + score;
}

// When name is submitted, highscore function runs which saves and turns the array of high scores already saved into strings and pushes our new name and score into the array
submitScoreButton.addEventListener("click", function highScore() { 
    if(nameInput.value === "") {
        alert("Please enter a name");
        return false;
    }else{
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var userName = nameInput.value;
        var currentHighScore = {
            name: userName,
            score: score
        };
    
        hideAll();
        highScoresDisplay.hidden = false;

        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
        showHighscore();

    }
    
});

// Clears the list for the high scores and generates a new high score list from local storage
function generateHighScores() {
    highScoreName.innerHTML = "";
    highScoreScore.innerHTML = "";

    var highScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    
    for (i = 0; i < highScores.length; i++) {

        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");

        newNameSpan.textContent = highScores[i].name;
        newScoreSpan.textContent = highScores[i].score;
        highScoreName.appendChild(newNameSpan);
        highScoreScore.appendChild(newScoreSpan);
    }
}

// Shows only the highscores page
function showHighscore() {
    hideAll();
    highScoresDisplay.hidden = false;
    playAgain.hidden = false;
    clearScores.hidden = false;
    generateHighScores();
}

// Clears local storage of scores and names
function clearScore() {
    window.localStorage.clear();
    highScoreName.textContent = "";
    highScoreScore.textContent = "";
}

function restart() {
    window.location.href = "./index.html"
}

startButton.addEventListener('click', startGame);
seeHighScores.addEventListener('click', showHighscore);
