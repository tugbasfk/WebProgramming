//Full Name: Tugba Safak
//Lab Number: Lab 1
//Date Completed: 09/09/2026


// =====================================
// STEP 3: Declare Base Variables
// =====================================

// 1. Person's name (all lowercase)
const personName = "bob smith";

// 2. Birth year
const birthYear = 1996;

// 3. Favorite number
const favoriteNumber = 5;

// 4. Favorite color
const favoriteColor = "blue";

// 5. Current year
const currentYear = 2026;


// =====================================
// STEP 4: Perform Calculations &
// String Manipulations
// =====================================

// Calculate age
const calculatedAge = currentYear - birthYear;

// Convert name to uppercase
const uppercaseName = personName.toUpperCase();

// Multiply favorite number by 3
const tripledValue = favoriteNumber * 3;


// =====================================
// STEP 5: Output to Webpage Using
// Template Literals
// =====================================

// Create formatted output
const outputMessage = `
${uppercaseName} is ${calculatedAge} years old.<br>
${uppercaseName}'s favorite color is ${favoriteColor} and favorite number is ${favoriteNumber}.<br>
Three times of the favorite number is ${tripledValue}.
`;

// Display output on webpage
document.getElementById("outputDisplay").innerHTML = outputMessage;