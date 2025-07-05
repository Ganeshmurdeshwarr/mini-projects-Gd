const questions = [
    {
        question: "what is the capital of India?",
        answers: [
            { text: "karnataka", correct: false },
            { text: "Panjab", correct: false },
            { text: "New dehli", correct: true },
            { text: "Andra", correct: false },
        ]
    },
    {
        question: "what is the GDP of India?",
        answers: [
            { text: "3Trillion", correct: false },
            { text: "2Trillion", correct: false },
            { text: "4Trillion ", correct: true },
            { text: "5Trillion", correct: false },
        ]
    },
    {
        question: "what is the capital of america?",
        answers: [
            { text: "washington DC", correct: true },
            { text: "new york", correct: false },
            { text: "new jersy ", correct: false },
            { text: "san adrase", correct: false },
        ]
    },
    {
        question: "who is the captain of indian cricket player?",
        answers: [
            { text: "Rohit sharma", correct: true },
            { text: "Virat Kohli", correct: false },
            { text: "Dhoni ", correct: false },
            { text: "Sachin", correct: false },
        ]
    }
];

const questionElement = document.querySelector(".h2q");
const ansbtn = document.querySelector(".ans-btn");
const nextbtn = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function resetsate() {
    nextbtn.style.display = "none";
    while (ansbtn.firstChild) {
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function showQuestion() {
    resetsate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
        ansbtn.appendChild(button);
    });
}

function selectAns(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbtn.style.display = "block";
}

function showScore() {
    resetsate();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
