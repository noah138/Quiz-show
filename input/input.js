var username = document.querySelector("#username")
var submitScore = document.querySelector("#submitScore")
var userScore = document.querySelector("#userScore")
var mostRecentScore = localStorage.getItem("mostRecentScore")

var leaderboards = JSON.parse(localStorage.getItem('leaderboards')) || []

var numberOfScores = 5

userScore.innerText = mostRecentScore

username.addEventListener('keyup', ()=> {
    submitScore.disabled = !username.value
})

saveScore = x => {
    x.preventDefault()

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    leaderboards.push(score)
    console.log(leaderboards)

}