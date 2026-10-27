const students = [
    {
        name: "John",
        score: 95
    },
    {
        name: "Sarah",
        score: 87
    },
    {
        name: "Michael",
        score: 76
    },
    {
        name: "Emily",
        score: 68
    },
    {
        name: "David",
        score: 82
    }
];


function calculateGrade(score) {

    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}


function displayResults() {

    let gradebook = document.getElementById("gradebook");

    let table = "<table border='1'>";

    table += "<tr>";
    table += "<th>Name</th>";
    table += "<th>Score</th>";
    table += "<th>Grade</th>";
    table += "</tr>";

    for (let i = 0; i < students.length; i++) {

        let student = students[i];
        let grade = calculateGrade(student.score);

        table += "<tr>";
        table += "<td>" + student.name + "</td>";
        table += "<td>" + student.score + "</td>";
        table += "<td>" + grade + "</td>";
        table += "</tr>";
    }

    table += "</table>";

    gradebook.innerHTML = table;
}


function sortScores() {

    students.sort(function(a, b) {
        return b.score - a.score;
    });

    displayResults();
}


function addStudent() {

    let name = prompt("Enter student name:");

    let score = prompt("Enter student score:");

    score = Number(score);

    students.push({
        name: name,
        score: score
    });

    displayResults();
}


displayResults();