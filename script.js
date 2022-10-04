// Answers are stored in an arary, with variable correct answer correlating to the position of the correct answer in the array
// When play is pressed, take to first question and timer is started
// If right answer is selected, add point/any other alerts (answer turns green) and go to next question
// If wrong answer is selected, deduct time from timer, do not add point, and go to next question
// Repeat this until question number equals the total length of the questions
// Report a score and store it in the leaderboards

// function startGame {

// }

// function nextQuestion {

// }

// function answer {

// }

let questions = [
    {
        question: "??????????",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 1"
    },
    {
        question: "??????????",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 2"
    },
    {
        question: "??????????",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 3"
    },
    {
        question: "??????????",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 4"
    },
    {
        question: "??????????",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 1"
    }
]

var startButton = document.getElementById('play')
var optionContainer = document.getElementById('optionContainer')
var questionText = document.getElementById('question')
var chosenAnswer = document.getElementById('option-text')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    
}