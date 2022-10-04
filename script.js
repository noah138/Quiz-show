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

// var question = document.querySelector("#question");
// var choices = Array.from(document.querySelectorAll(".option-text"));
// var progressText = document.querySelector("#question-number");
// var scoreText = document.querySelector("#score");

// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let availableQuestions = []

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

// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)

//         return window.location.assign('/end.html')
//     }

//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
//     const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     availableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers = true
// }

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)
//     })
// })

// incrementScore = num => {
//     score +=num
//     scoreText.innerText = score
// }

// startGame()

var startButton = document.getElementById('play')
var optionContainer = document.getElementById('optionContainer')
var questionText = document.getElementById('question')
var chosenAnswer = document.getElementById('option-text')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    
}