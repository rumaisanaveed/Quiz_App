const quizData = [
    {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "JavaScript",
    },
    {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "Cascading Style Sheets",
    },
    {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "Hypertext Markup Language",
    },
    {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "1995",
    },
];

let submitBtn = document.querySelector(".submit-btn");
let index = 0;
let score = 0;
let currentQuiz = quizData[index]
submitBtn.addEventListener("click",()=>{
    // New concept learned 
    const selectedValue = document.querySelector('input[type="radio"]:checked');
    console.log(selectedValue.value);
    if (selectedValue.value === quizData[index].correct) {
        score++;
    }
    index++;
    if (index < quizData.length) {
        showNextQuestion();
    } 
    else {
        showFinalScore();
    }
});

function showNextQuestion() {
      let quizHeader = document.querySelector(".quiz-header");
      let currentQuestion = quizData[index];
      quizHeader.innerHTML = `<h2>${currentQuestion.question}</h2>
      <input type="radio" name="quiz-option" value="${currentQuestion.a}" />
      <label for="a_text">${currentQuestion.a}</label><br />
      <input type="radio" name="quiz-option" value="${currentQuestion.b}" />
      <label for="b_text">${currentQuestion.b}</label><br />
      <input type="radio" name="quiz-option" value="${currentQuestion.c}" />
      <label for="c_text">${currentQuestion.c}</label><br />
      <input type="radio" name="quiz-option" value="${currentQuestion.d}" />
      <label for="d_text">${currentQuestion.d}</label>`;
}

function showFinalScore() {
    let quizHeader = document.querySelector(".quiz-header");
    quizHeader.innerHTML = `<h2>You answered ${score} questions correctly.</h2>`;
    let playAgainBtn = submitBtn;
    playAgainBtn.innerText = "Play Again";
    playAgainBtn.addEventListener("click",()=>{
        location.reload();
    })
}


showNextQuestion();
