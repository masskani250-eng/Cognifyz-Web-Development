// TASK 1: COLOR CHANGING BUTTON

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {

    const colors = [
        "#e74c3c",
        "#3498db",
        "#2ecc71",
        "#f39c12",
        "#9b59b6"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    colorButton.style.backgroundColor = randomColor;

});


// TASK 2: GREETING ALERT BASED ON CURRENT TIME

const greetingButton = document.getElementById("greetingButton");

greetingButton.addEventListener("click", function () {

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {

        greeting = "Good Morning! Have a wonderful day!";

    } else if (currentHour < 17) {

        greeting = "Good Afternoon! Hope you are doing well!";

    } else {

        greeting = "Good Evening! Have a great day!";

    }

    alert(greeting);

});


// TASK 3: ADDITION CALCULATOR

const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {

    const number1 = document.getElementById("num1").value;

    const number2 = document.getElementById("num2").value;

    if (number1 === "" || number2 === "") {

        alert("Please enter both numbers!");

        return;

    }

    const sum = Number(number1) + Number(number2);

    document.getElementById("result").textContent =
        "Result: " + sum;

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    document.getElementById("contactMessage").textContent =
        "Thank you, " + name + "! Your message was received.";

    contactForm.reset();

});