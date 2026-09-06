
// 1. Declare student and course information using 'const'
const studentName = "Alex Morgan";
const courseName = "Intro to Web Programming";

// 2. Declare enrollment status using a boolean (true or false) with 'let'
let isEnrolled = true;

// 3. Declare three assignment scores out of 100 using 'let'
let assignment1 = 88;
let assignment2 = 94;
let quizScore = 82;

// PART 2: Calculations


let finalAverage = (assignment1 + assignment2 + quizScore) / 3;

finalAverage += 5;

// PART 3: Dynamic Template Literal

let summaryMessage =
    `Student ${studentName} enrolled in ${courseName} has a final score of ${finalAverage}.`;

// PART 4: Console Output & Debugging

console.log(summaryMessage);

console.log(typeof finalAverage);

console.warn("Student enrollment status verified.");
