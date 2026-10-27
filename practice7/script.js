let mainTitle = document.querySelector("#mainTitle");

if (mainTitle) {
    mainTitle.textContent = "ITSE Web Scripting | Active Roster";
}
let statusBanner = document.querySelector("#statusBanner");

if (statusBanner) {
    statusBanner.innerHTML = "<strong>Status: Session Active</strong>";
}
if (statusBanner) {
    statusBanner.classList.add("active-status");
}
let students = document.querySelectorAll(".student-item");

students.forEach(function(student) {
    student.textContent += " - Verified Student";
    student.classList.toggle("highlight");
});
let statusIcon = document.getElementById("statusIcon");

if (statusIcon) {
    statusIcon.setAttribute("src", "https://placehold.co/150/008000/FFFFFF?text=Active");
    statusIcon.setAttribute("alt", "Active Session Status");
}
