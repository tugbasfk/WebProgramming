//name: Tugba Safak
//date: 09/09/2026
//activity name: Pet Profile & Expense Calculator

// ==========================================
// STEP 2: Base Pet & Expense Data
// ==========================================

// 1. Declare pet's name written in all lower case (string)
const petName = "barnaby jones";

// 2. Declare pet's species/breed (string)
const petType = "corgi";

// 3. Declare pet's birth year (number)
const birthYear = 2021;

// 4. Declare current year (number)
const currentYear = 2026;

// 5. Declare estimated monthly food expense in dollars (number)
let monthlyFoodCost = 45;

// ==========================================
// STEP 3: Calculations & String Transformations
// ==========================================

// 1. Calculate pet's age (currentYear minus birthYear)
let petAge = currentYear - birthYear;

// 2. Convert pet name to uppercase using .toUpperCase()
let uppercasePetName = petName.toUpperCase();

// 3. Calculate annual food cost (monthlyFoodCost multiplied by 12)
let annualFoodCost = monthlyFoodCost * 12;

// ==========================================
// STEP 4: Webpage Output
// ==========================================

let profileOutput = `
${uppercasePetName} is a ${petType} and is ${petAge} years old.<br>
Monthly food budget is $${monthlyFoodCost}.<br>
Total estimated annual food cost for ${uppercasePetName} is $${annualFoodCost}.
`;

document.getElementById("petProfileDisplay").innerHTML = profileOutput;