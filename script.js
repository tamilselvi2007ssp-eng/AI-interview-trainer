let questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "Why should we hire you?",
    "Where do you see yourself in 5 years?"
];

let currentQuestion = 0;

function startInterview() {

    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    document.querySelector(".card").style.display = "none";
    document.getElementById("interviewBox").style.display = "block";

    document.getElementById("welcome").innerText =
        "Welcome " + name + "!";

    document.getElementById("question").innerText =
        "Question 1: " + questions[currentQuestion];
}

function submitAnswer() {

    let answer = document.getElementById("answer").value;

    if (answer === "") {
        alert("Please enter your answer!");
        return;
    }

    let feedback = document.getElementById("feedback");

    if (answer.length > 50) {
        feedback.innerHTML =
            "✅ Good answer! Try to make it more clear and structured.";
    } else {
        feedback.innerHTML =
            "💡 Your answer is a little short. Add more details and examples.";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        setTimeout(function () {

            document.getElementById("question").innerText =
                "Question " + (currentQuestion + 1) +
                ": " + questions[currentQuestion];

            document.getElementById("answer").value = "";
            feedback.innerHTML = "";

        }, 1500);

    } else {

        document.getElementById("question").innerText =
            "🎉 Interview Completed!";

        document.getElementById("answer").style.display = "none";

        feedback.innerHTML =
            "🏆 Great job! Your mock interview is completed.";
    }
}