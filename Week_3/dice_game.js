// Generate a random number between 1 and 6 for Die 1
const die1 = Math.floor(Math.random() * 6) + 1;

// Generate a random number between 1 and 6 for Die 2
const die2 = Math.floor(Math.random() * 6) + 1;

// Calculate the total of the two dice
const total = die1 + die2;

// Create a message that shows the result of the roll
const outputMessage = `You rolled a ${die1} and a ${die2}. Your total is ${total}!`;

// Find the HTML element with the ID "game-output"
const outputElement = document.getElementById("game-output");

// Change the content of that element to your message
outputElement.textContent = outputMessage;