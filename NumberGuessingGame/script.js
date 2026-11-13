//variables to store secret num, attempts, wins, losses 
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let wins = 0;
let losses = 0;
let gameOver = false;
// Store the player's guesses
let game = {
    guesses: []
};

// Display all guess history
function showHistory() {

    let history = "";

    for (let i = 0; i < game.guesses.length; i++) {

        history += game.guesses[i] + " ";

    }

    document.getElementById("guessHistory").textContent = history;
}

// Check the player's guess
function checkGuess() {

    if (gameOver == true) {
        return;
    }

    let guess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");

   // Check if the input is empty
if (document.getElementById("guessInput").value == "") {
    message.textContent = "Please enter a number.";
    return;
}

// Check if the number is valid
if (guess < 1 || guess > 100 || isNaN(guess)) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
}

// Check if the number is a whole number
if (guess % 1 != 0) {
    message.textContent = "Please enter a whole number.";
    return;
}

    game.guesses.push(guess);

    showHistory();

    attempts--;

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("progressBar").style.width = (attempts * 10) + "%";

    // Check the guess
    if (guess == secretNumber) {

        message.textContent = "Correct! You guessed the number!";

        message.style.color = "green";

        wins++;

        document.getElementById("wins").textContent = wins;

        gameOver = true;

    }
    else if (attempts == 0) {

        message.textContent = "Game Over! The number was " + secretNumber;

        message.style.color = "red";

        losses++;

        document.getElementById("losses").textContent = losses;

        gameOver = true;

    }
    else if (guess > secretNumber) {

        message.textContent = "Too high! Try again.";

    }
    else {

        message.textContent = "Too low! Try again.";

    }

    document.getElementById("guessInput").value = "";
}


// Restart the game
function restartGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 10;

    gameOver = false;

    game.guesses = [];

    document.getElementById("guessHistory").textContent = "No guesses yet.";

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("message").textContent = "";

    document.getElementById("guessInput").value = "";
}


// Button event listeners
document.getElementById("guessButton").addEventListener("click", checkGuess);

document.getElementById("restartButton").addEventListener("click", restartGame);