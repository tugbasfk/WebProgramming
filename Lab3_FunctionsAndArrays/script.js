//Name: Tugba Safak
//Date: 10/5/2026
//Lab3: JavaScript Functions and Arrays


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
    gradebook.innerHTML = ""; 

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let grade = calculateGrade(student.score);

        gradebook.innerHTML +=
            "<p>" +
            student.name +
            " - Score: " + student.score +
            " - Grade: " + grade +
            "</p>";
    }
}

function sortByName() {

    students.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    displayResults();
}

function sortByScore() {

    students.sort(function(a, b) {
        return b.score - a.score;
    });

    displayResults();
    
}


document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let score = Number(document.getElementById("studentScore").value);

    students.push({
        name: name,
        score: score
    });

    displayResults();

    document.getElementById("studentForm").reset();
});

displayResults();
