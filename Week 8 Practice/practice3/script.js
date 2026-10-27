//My bonus practice is Practice 3

let timerInterval = null; 
let startTime = 0;        
let savedMs = 0;          

const timerDisplay = document.querySelector("#timerDisplay");
const startedAt = document.querySelector("#startedAt");
const statusMsg = document.querySelector("#statusMsg");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const timerResetBtn = document.querySelector("#timerResetBtn");

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setStatus(text, stateClass) {
    statusMsg.textContent = text;
    statusMsg.classList.remove("idle", "running", "stopped");
    statusMsg.classList.add(stateClass);
}

function updateDisplay() {
    const elapsed = savedMs + (Date.now() - startTime);
    timerDisplay.textContent = formatTime(elapsed);
}

startBtn.addEventListener("click", () => {
    if (timerInterval !== null) return;

    startTime = Date.now();
    startedAt.textContent = `Last started at: ${new Date().toLocaleTimeString()}`;

    timerInterval = setInterval(updateDisplay, 250);
    setStatus("Status: Timer Running...", "running");
});


stopBtn.addEventListener("click", () => {
    if (timerInterval === null) return;

    clearInterval(timerInterval);
    timerInterval = null;

    savedMs += Date.now() - startTime;
    timerDisplay.textContent = formatTime(savedMs);
    setStatus("Status: Timer Stopped", "stopped");
});


timerResetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;

    startTime = 0;
    savedMs = 0;
    timerDisplay.textContent = "00:00";
    startedAt.textContent = "Last started at: --";
    setStatus("Status: Timer Reset & Idle", "idle");
});



