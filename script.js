let beginButton = document.getElementById("begin-button");
let questionSection = document.getElementById("question-section");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");

let randomPickOfQuestion, beginQuestioning/* selects randomly one of the array questions */

beginButton.addEventListener("click", beginGame);

function beginGame() {
    console.log("beginButton") /* confirms game begins */
    beginButton.classList.add("hide"); /* removes begin button */
    questionSection.classList.remove("hide"); /* displays questions */
    randomPickOfQuestion = questions.sort(() => Math.random() - .5); 
    beginQuestioning = 0 /* starting questions */
    setNextQuestion()
}

function setNextQuestion() {
    pullQuestion(randomPickOfQuestion[beginQuestioning])
}

function pullQuestion(question) { 
    questionElement.innerText = question.question
} 

function selectAnswer() {

}

const questions = [
    {question: "Who is our main instructor?",
        answers: [
            { text: "Latisha McNeel", correct: true },
            { text: "Brandon Gatlin", correct: false },
            { text: "Peter Winston", correct: false },
            { text: "Michelle Bury", correct: false }
        ]
    } /*,
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
    } */
]