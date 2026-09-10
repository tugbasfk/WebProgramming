// The secret number we are trying to guess
const secretNumber = 75;

// Your guess!
const myGuess = 90;

// Use Math.abs() to find the absolute difference
const difference = Math.abs(secretNumber - myGuess);

// Create a message using a template literal
const outputMessage = `Your guess of ${myGuess} is off by ${difference} from the secret number!`;

// Find the HTML element with the ID "game-output"
const outputElement = document.getElementById("game-output");

// Change the content of that element to your message
outputElement.textContent = outputMessage;
