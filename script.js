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

// TODO: declare global variables
// global variables
let score = 0;
let timer;
let timeLeft;
// let username = "";
var currentQ;
// var maxHighScores = 5;

// DOM objects
var startButton = document.querySelector("#startGame");
var startDisplay = document.querySelector("#startDisplay");
var questionDisplay = document.querySelector("#questionsDisplay");
// var questionText = document.querySelector("#questionText");
var answerChoice = document.querySelector("#answers");
var endDisplay = document.querySelector("#endDisplay");
// var leaderboards = document.querySelector("#leaderboards");
var seeHighScores = document.querySelector("#seeHighScores");
var seeScore = document.querySelector(".score");
var seeTimer = document.querySelector(".timer");
var timeLeftSpan = document.querySelector("#timer")
var scoreSpan = document.querySelector("#score")
// var header = document.querySelector("#header");
// var result = document.querySelector("#result")
// var submitScore = document.querySelector("#submitScore")
// var nameInput = document.querySelector("#nameInput")
// var highScoresList = document.querySelector("#highScoresList")
// var clearScores = document.querySelector("#clearHighScores")


startButton.addEventListener("click", startGame);
seeHighScores.addEventListener("click", seeScores)

function seeScores() {
    window.location.href = "./highscores.html"
}
// clearScores.addEventListener("click", clearScores);

startButton.hidden = false;

function hideAll() {
    startDisplay.hidden = true;
    startButton.hidden = true;
    endDisplay.hidden = true;
    questionDisplay.hidden = true;
    // leaderboards.hidden = true;
    seeHighScores.hidden = true;
    seeScore.hidden = true;
    seeTimer.hidden = true;
}

function startGame() {
    hideAll();
    seeScore.hidden = false;
    seeTimer.hidden = false;
    questionDisplay.hidden = false;
    currentQ = 0;
    displayQ(questions[currentQ]);
    timeLeft = 31;
    displayTime();
    displayScore();
}

function displayTime() {
    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        timeLeftSpan.innerHTML = timeLeft;
        if (timeLeft<=0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function displayScore() {
    clearInterval(score);
    scoreSpan.innerHTML = score;
    localStorage.setItem("mostRecentScore", score);
}

function displayQ(question) {
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
        gameOver();
    } else {
        currentQ++;
        clearQ();
        displayQ(questions[currentQ]);
    }
}

function clearQ() {
    while (answerChoice.firstChild) {
        answerChoice.removeChild(answerChoice.firstChild);
    }
}

function gameOver() {
    return window.location.assign("input.html")
}

// function gameOver() {
//     clearInterval(timeLeft)
//     timeLeftSpan.innerHTML = "Time's Up!";
//     hideAll();
//     endDisplay.hidden = false;
//     seeScore.hidden = false;
//     seeTimer.hidden = false;

//     result.innerText = "Your final score is: " + score;
// }

// submitScore.addEventListener("click", function() {
//     var score = {score: score,
//                 name: nameInput.value};
//     highScores.push(score);
//     highScores.sort((a,b)=>b.score - a.score);
//     highScores.splice(maxHighScores);

//     localStorage.setItem("highScores", JSON.stringify(highScores));
//     showScores()
//     console.log(score)
// })

// function showScores() {
//     clearInterval(timeLeft);
//     timer.innerHTML = "";
//     clearQ;
//     hideAll();
//     endDisplay.hidden = false;
//     highScoresList.innerHTML = highScores
//     .map(score => {
//         return '<li class="scoresList">${score.name}-${score.score}</li>';
//     })
//     .join("");
//     startButton.hidden = false
// }

// function clearScores() {
//     localStorage.clear();
//     location.reload();
// }
