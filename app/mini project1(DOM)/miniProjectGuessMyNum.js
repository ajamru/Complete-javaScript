'use strict'

//all dom related things are not actually js
//dom are part of web APIs
/*
console.log(document.querySelector('.message').textContent)

//chnaging a text content
document.querySelector('.message').textContent = 'Correct Number'

document.querySelector('.number').textContent = 13
*/

//generating a random number

let number = Math.trunc(Math.random() * 20) + 1

//function for displaying message

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}


//decreasing score for every incorrect guess
let score = 20
let highScore = 0

// event listner

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess) {
        //document.querySelector('.message').textContent = 'Not a number'
        displayMessage('Not a Number')

    //when player wins
    } else if(guess === number) {
        //document.querySelector('.message').textContent = 'Correct Number'
        displayMessage('Correct Number')
        document.querySelector('.number').textContent = number

        //changing colour once get sucess
        // when we manipulate a sting we need to specify storing value i a string
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        //getting high score
        if (score > highScore) {
            highScore = score
            document.querySelector('.highScore').innerHTML = highScore
        }
    
    // when guess is too high or too low and also decreasing the score
    /*}
    else if (guess > number) {
        if(score > 0) {
            document.querySelector('.message').textContent = 'Number is Much greater!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You loose the Game!'
        }
        
    } else if(guess < number) {
        if(score > 0) {
            document.querySelector('.message').textContent = 'Number is Less!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You loose the Game!'
        }
    */ // destructed above block
    } else if(guess !== number) {
        if(score > 0) {
            //document.querySelector('.message').textContent = guess > number ? 'Number is Much greater!' : 'Number is Less!'

            displayMessage(guess > number ? 'Number is Much greater!' : 'Number is Less!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            //document.querySelector('.message').textContent = 'You loose the Game!'
            displayMessage('You loose the Game!')
        }
    }
})

// wroking with play again
document.querySelector('.again').addEventListener('click', function() {
    number = Math.trunc(Math.random() * 20) + 1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    //document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222'
})