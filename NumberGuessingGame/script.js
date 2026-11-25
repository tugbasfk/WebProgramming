let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10;
let wins = 0;
let losses = 0;
let gameOver = false;


let game = {
    guesses: []
};


function showHistory() {

    let history = "";

    for (let i = 0; i < game.guesses.length; i++) {

        history += game.guesses[i] + " ";

    }

    document.getElementById("guessHistory").textContent = history;
}


function checkGuess() {

    if (gameOver == true) {
        return;
    }

    let guess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");

    message.className = "normal";


    if (document.getElementById("guessInput").value == "") {

        message.textContent = "Please enter a number.";

        return;
    }


    if (guess < 1 || guess > 100 || isNaN(guess)) {

        message.textContent = "Please enter a number between 1 and 100.";

        return;
    }


    if (guess % 1 != 0) {

        message.textContent = "Please enter a whole number.";

        return;
    }


    game.guesses.push(guess);

    showHistory();


    attempts--;

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("progressBar").value = attempts;


    if (guess == secretNumber) {

        message.textContent = "Correct! You guessed the number!";

        message.className = "correct";

        wins++;

        document.getElementById("wins").textContent = wins;

        gameOver = true;

    }

    else if (attempts == 0) {

        message.textContent = "Game Over! The number was " + secretNumber;

        message.className = "incorrect";

        losses++;

        document.getElementById("losses").textContent = losses;

        gameOver = true;

    }

    else if (guess > secretNumber) {

        message.textContent = "Too high! Try again.";

        message.className = "normal";

    }

    else {

        message.textContent = "Too low! Try again.";

        message.className = "normal";

    }

    document.getElementById("guessInput").value = "";
}


function restartGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 10;

    gameOver = false;

    game.guesses = [];

    document.getElementById("guessHistory").textContent = "No guesses yet.";

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("progressBar").value = 10;

    document.getElementById("message").textContent = "";

    document.getElementById("message").className = "normal";

    document.getElementById("guessInput").value = "";
}


document.getElementById("guessButton").addEventListener("click", checkGuess);

document.getElementById("restartButton").addEventListener("click", restartGame);