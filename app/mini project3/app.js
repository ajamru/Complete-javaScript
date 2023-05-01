'use strict';

//selecting elements
const scoreZeroEl = document.querySelector('#score--0')
const scoreOneEl = document.getElementById('score--1')
const currentZero = document.getElementById('current--0')
const currentOne = document.getElementById('current--1')
const newButton = document.querySelector('.btn--new')
const rollButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

let playing, scores, currentScore, activePlayer

const init = function() {
    scoreZeroEl.textContent = 0
    scoreOneEl.textContent = 0
    currentZero.textContent = 0
    currentOne.textContent = 0

    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    document.querySelector('.dice').classList.add('hidden')

    scores = [0, 0]
    //current score
    currentScore = 0
    //active player
    activePlayer = 0
    playing = true  
}

init()

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0

    //toggle will work if present it will remove or vise versa
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
} 

//rolling dice
rollButton.addEventListener('click', function() {
    if(playing) {
        //generating a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1
       //console.log(dice)

       // display the dice
       diceEl.classList.remove('hidden')
       diceEl.src = `dice-${dice}.png`

       if(dice !== 1) {
           currentScore += dice
           document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
           // switch the player
           switchPlayer()
        }
    }
})

holdButton.addEventListener('click', function() {
    if(playing) {
        //add current score to active player score
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    
        if(scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.querySelector('.dice').classList.remove('hidden')
        } else {
            switchPlayer()
        }
    }
})

document.querySelector('.btn--new').addEventListener('click', init)


