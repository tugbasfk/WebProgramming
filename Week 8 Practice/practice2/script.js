const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const resultDisplay = document.querySelector("#resultDisplay");


// Helper function to extract and convert input values
function getInputs() {
    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);
    return { val1, val2 };
}

function showResult(value) {
    if(typeof value === "number"){
        value = Number(value.toFixed(4));
    }
    resultDisplay.textContent = `Result: ${value}`;
}

document.querySelector("#addBtn").addEventListener("click", () => {
    const { val1, val2 } = getInputs();
    if (isNaN(val1) || isNaN(val2)) return showResult("Please enter valid numbers");
    showResult(val1 + val2);
});

document.querySelector("#subtractBtn").addEventListener("click", () => {
    const { val1, val2 } = getInputs();
    if (isNaN(val1) || isNaN(val2)) return showResult("Please enter valid numbers");
    showResult(val1 - val2);
});

document.querySelector("#multiplyBtn").addEventListener("click", () => {
    const { val1, val2 } = getInputs();
    if (isNaN(val1) || isNaN(val2)) return showResult("Please enter valid numbers");
    showResult(val1 * val2);
});


document.querySelector("#divideBtn").addEventListener("click", () => {
    const { val1, val2 } = getInputs();
    if (isNaN(val1) || isNaN(val2)) return showResult("Please enter valid numbers");
    if (val2 === 0) return showResult("Cannot divide by zero");
    showResult(val1 / val2);
});


// 1. Adding 0.1 and 0.2 gives 0.30000000000000004 because of floating-point rounding errors.
// 2. Without parseFloat(), adding 2 and 3 gives 23 because the inputs are treated as strings.
// 3. Stretch Goal: I used toFixed(4) to round numerical results to four decimal places.