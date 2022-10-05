// TODO: define the array of questions
var questions = [
    {
        question: "To which region are old world monkeys native?",
        choices: ["a. Africa and Asia", "b. South America", "c. Only Asia", "d. Only Africa"],
        answer: "a. Africa and Asia"
    },
    {
        question: "To which region are new world monkeys native?",
        choices: ["a. The United States", "b. Mexico, and Central and South America", "c. Africa", "d. Oceania"],
        answer: "b. Mexico, and Central and South America"
    },
    {
        question: "What is the smallest monkey in the world?",
        choices: ["a. Graells's Tamarin", "b. Pygmy Marmoset", "c. Night Monkey", "d. Dusky Titi"],
        answer: "b. Pygmy Marmoset"
    },
    {
        question: "What is the largest monkey in the world?",
        choices: ["a. Nepal Grey Langur", "b. Olive Baboon", "c. Mandrill", "d. Chacma Baboon"],
        answer: "c. Mandrill"
    },
    {
        question: "What is the loudest land animal on Earth?",
        choices: ["a. Cicada", "b. Howler Monkey", "c. African Elephant", "d. Orangutan"],
        answer: "b. Howler Monkey"
    },
    {
        question: "What traits do monkeys possess that apes don't?",
        choices: ["a. Forward-facing eyes", "b. Opposable Thumbs", "c. Tails", "d. Fingernails"],
        answer: "c. Tails"
    },
    {
        question: "Around how many different species of monkeys are there?",
        choices: ["a. 100", "b. 250", "c. 500", "d. 1000"],
        answer: "b. 250"
    },
    {
        question: "What was the name of the first monkey to go to space?",
        choices: ["a. Albert II", "b. Albert IV", "c. Enos", "d. Ham"],
        answer: "a. Albert II"
    },
    {
        question: "What is the fastest monkey?",
        choices: ["a. Bald Uakari", "b. Chacma Baboon", "c. Patas Monkey", "d. Proboscis Monkey"],
        answer: "c. Patas Monkey"
    },
    {
        question: "How old was the oldest monkey to ever live?",
        choices: ["a. 54 years, 22 days", "b. 61 years, 26 days", "c. 65 years, 268 days", "d. 70 years, 52 days"],
        answer: "c. 65 years, 268 days"
    },
    {
        question: "How long do monkeys sleep every night?",
        choices: ["a. 3 hours", "b. 4.5 hours", "c. 6.5 hours", "d. 9.5 hours"],
        answer: "d. 9.5 hours"
    },
]
// TODO: declare global variables
// global variables
let score = 0;
let timer;
let timeLeft;
let userName = "";
let finalScore;
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


