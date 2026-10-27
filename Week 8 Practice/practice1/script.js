// State variable
let count = 0;

// Element selections
const countDisplay = document.querySelector("#countDisplay");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

console.log(countDisplay, incrementBtn);

// Event listeners
incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    if(count>0){
        count--;
    
    countDisplay.textContent = count;
    }
});


resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});

// 1. Changing count++ to count += 5 makes the counter increase by 5 each click.
// 2. Removing countDisplay.textContent = count means the variable still changes, but the page does not update.
// 3. Stretch Goal: Added an if statement to prevent the counter from going below 0.