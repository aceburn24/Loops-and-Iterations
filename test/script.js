function checkAge() {
    let age = document.getElementById("age").value;
    if (age >= 25) {
        alert("You are 25 years old or older.");
    } else {
        alert("You are younger than 25.");
    }
}

function printNumbers() {
    let output = "";
    for (let i = 0; i <= 30; i++) {
        output += i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function printEvenNumbers() {
    let output = "";
    for (let i = 0; i <= 40; i += 2) {
        output += i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function printMultiplesOfThree() {
    let output = "";
    for (let i = 40; i >= 10; i--) {
        if (i % 3 === 0) {
            output += i + "<br>";
        }
    }
    document.getElementById("output").innerHTML = output;
}