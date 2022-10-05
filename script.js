// TODO: define the array of questions
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
let userName = "";
let finalScore;
var currentQ;
var maxHighScores = 5;

// DOM objects
var startButton = document.querySelector("#startGame");
var startDisplay = document.querySelector("#startDisplay");
var questionDisplay = document.querySelector("#questionsDisplay");
var endDisplay = document.querySelector("#endDisplay");
var leaderboards = document.querySelector("#leaderboards");

startButton.addEventListener("click", startGame);
highScoresButton.addEventListener("click", showScores);

function hideAll() {
    startDisplay.hidden = true;
    endDisplay.hidden = true;
    questionDisplay.hidden = true;
    leaderboards.hidden = true;
}

function startGame() {
    hideAll();
    questionDisplay.hidden = false;
    currentQ = 0;
    displayQ();
    timer = 30;
    displayTime();
}

function displayQ() {
    let question = questions[currentQ];
    let choices = question.choices;
    let choiceBtn = document.querySelector()

    let questionHeader = document.querySelector("#questionText");
    questionHeader.textContent = question.question;

    for (let i=0; i < choices.length; i++) {
        let choice = choices[i];
        let choiceBtn = 
    }
}

// TODO: start timer when game is started, end game when timer equals 0
// TODO: define startgame function - hide start page elements, show first question elements, randomly choose question
// TODO: define function that goes to next question
// TODO: show first question, decide how to sift for answer
// TODO: write two outcomes: wrong answer or right answer
// TODO: wrong answer decrements timer, both outcomes display a message on screen
// TODO: go to next question unless there are none left in the question array, then go to game over screen
// TODO: display score at end of the game
// TODO: create leaderboards
// TODO: create user input for submitting name and score to leaderboards
// TODO: extra: make sure leaderboards can be accessed from the start screen
// TODO: make a monkey screech when you press play


