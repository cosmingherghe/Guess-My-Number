'use strict';
/*
Testing: querySelector

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Corrent Number!';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 19;
document.querySelector('.guess').value = 99;

console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.guess').value);
*/

let score = 10;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayGuess = function(guess) {
    document.querySelector('.guess').value = guess;
}

const displayHighScore = function(highscore) {
    document.querySelector('.highscore').textContent = highscore;
}

const styleBodyBgroundColor = function(color) {
    document.querySelector('body').style.backgroundColor = color;
}

const styleNumberWidth = function(width) {
    document.querySelector('.number').style.width = width;
}

document.querySelector('.again')
    .addEventListener('click',
        function() {
            score = 10;
            secretNumber = Math.trunc(Math.random() * 20) + 1;

            displayScore(score);
            displayNumber('?');
            displayMessage('Start guessing... 🤪');
            displayGuess('');
            displayHighScore(highscore);
            styleBodyBgroundColor('#222');
            styleNumberWidth('15rem');
        }
    );


document.querySelector('.check')
    .addEventListener('click', function () {
        
        const randomGuess = document.querySelector('.guess').value; 

        if(randomGuess ==='') {
            displayMessage('🚩 Enter a Number 🚩');
        } else {
            const guess = Number(randomGuess);

            if (guess === secretNumber) {
                displayMessage('Correct Number 🥳');

                displayNumber(secretNumber);
                styleBodyBgroundColor('#60b347');
                styleNumberWidth('25rem');

                console.log(highscore, score);
                if(highscore < score) {
                    highscore = score;
                    displayHighScore(highscore);
                }

            } else {
                let message = (guess > secretNumber) ? '❗ Too high' : '❗ Too low';
                
                displayMessage(message);

                if(score > 0) score--;
            }
            
            displayScore(score);

            if(score < 1) {
                displayMessage('😢 Game Over');
            }
        }
    });