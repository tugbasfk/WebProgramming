//Name: Tugba Safak
//Date: 10/20/2026
//Lab: Animal Rescue Counter 




let catCount = 0;
let dogCount = 0;
let birdCount = 0;
let smallCount = 0;
let reptileCount = 0;

const catDisplay = document.querySelector("#catCount");
const dogDisplay = document.querySelector("#dogCount");
const birdDisplay = document.querySelector("#birdCount");
const smallDisplay = document.querySelector("#smallCount");
const reptileDisplay = document.querySelector("#reptileCount");
const totalDisplay = document.querySelector("#totalCount");

const catBtn = document.querySelector("#catBtn");
const dogBtn = document.querySelector("#dogBtn");
const birdBtn = document.querySelector("#birdBtn");
const smallBtn = document.querySelector("#smallBtn");
const reptileBtn = document.querySelector("#reptileBtn");

function updateTotal() {
    let total = catCount + dogCount + birdCount + smallCount + reptileCount;

    totalDisplay.textContent = total;
}

catBtn.addEventListener("click", function() {
    catCount++;
    catDisplay.textContent = catCount;
    updateTotal();
});

dogBtn.addEventListener("click", function() {
    dogCount++;
    dogDisplay.textContent = dogCount;
    updateTotal();
});

birdBtn.addEventListener("click", function() {
    birdCount++;
    birdDisplay.textContent = birdCount;
    updateTotal();
});

smallBtn.addEventListener("click", function() {
    smallCount++;
    smallDisplay.textContent = smallCount;
    updateTotal();
});

smallBtn.addEventListener("click", function() {
    smallCount++;
    smallDisplay.textContent = smallCount;
    updateTotal();
});

reptileBtn.addEventListener("click", function() {
    reptileCount++;
    reptileDisplay.textContent = reptileCount;
    updateTotal();
});

