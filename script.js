let beginButton = document.getElementById("begin-button");
let questionSection = document.getElementById("question-section");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-button");

let randomPickOfQuestion; /* selects randomly one of the array questions */
let beginQuestioning;

beginButton.addEventListener("click", beginGame);
nextButton.addEventListener("click", () => {
    beginQuestioning++;
    setNextQuestion();
});

function beginGame() {
    console.log("beginButton"); /* confirms game begins */
    beginButton.classList.add("hide"); /* removes begin button */
    questionSection.classList.remove("hide"); /* displays questions */
    randomPickOfQuestion = questions.sort(() => Math.random() - .5); 
    beginQuestioning = 0 /* starting questions */
    setNextQuestion();
}

function setNextQuestion() {
    cleanButton();
    pullQuestion(randomPickOfQuestion[beginQuestioning]);
}

function pullQuestion(question) { /* insert test question */
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button"); /* creates button */
        button.innerText = answer.text; /* pulling text --> button from below questions */
        button.classList.add("btn-secondary"); /* adding answer buttons */
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button); /* adds button */
    })
} 

function cleanButton() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (randomPickOfQuestion.length > beginQuestioning + 1) {
        nextButton.classList.remove("hide");
    } else {
        beginButton.innerText = "Restart";
        beginButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {question: "Who is our main instructor?",
        answers: [
            { text: "Latisha McNeel", correct: true },
            { text: "Brandon Gatlin", correct: false },
            { text: "Peter Winston", correct: false },
            { text: "Michelle Bury", correct: false }
        ]
    } ,
    {question: "In coding, HTML stands for?",
        answers: [
            { text: "Hamburger, Tomato, Mayo, and Lettuce", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "How to Make Laughs", correct: false },
            { text: "Hey That's My Lunch", correct: false }
        ]
    },
    {question: "What does CSS stand for?",
        answers: [
            { text: "Counter-Strike:Source", correct: false },
            { text: "Context-Sensitive Solutions", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Systems Support", correct: false }
        ]
    },
    {question: "What is JavaScript?",
        answers: [
            { text: "Coffee", correct: false },
            { text: "The same thing as Java", correct: false },
            { text: "Makes me cry", correct: false },
            { text: "One of 3 languages all web developers must learn", correct: true }
        ]
    },
    {question: "What is jQuery?",
        answers: [
            { text: "It simplifies JavaScript", correct: true },
            { text: "Same thing as HTML", correct: false },
            { text: "Not important", correct: false },
            { text: "Something you can eat", correct: false }
        ]
    } 
]