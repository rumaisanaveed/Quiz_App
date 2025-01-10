const quizData = [
  {
    question: "Which language runs in a web browser?",
    variants: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    variants: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    variants: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    variants: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];

let submitBtn = document.querySelector(".submit-btn");
let questionStep = 0;
// It is best to name variables in a way that is 100% clear,
// even if it is already clear, but index can simply
// be confused with for map, and so on.
let score = 0;
let currentQuiz = quizData[questionStep];
submitBtn.addEventListener("click", (event) => {
  // the value could be obtained by event
  const selectedValue = document.querySelector('input[type="radio"]:checked');

  if (selectedValue.value === quizData[questionStep].correct) {
    score++;
  }
  questionStep++;
  if (questionStep < quizData.length) {
    showNextQuestion();
  } else {
    showFinalScore();
  }
});

function showNextQuestion() {
  let quizHeader = document.querySelector(".quiz-header");
  quizHeader.innerHTML = `<h2>${quizData[questionStep].question}</h2>`;

  // We have thrown all the possible answers into an array,
  // which we iterate through and immediately add to our element.
  // Before adding, we outline it with the assignment
  // = in which the question is written.

  quizData[questionStep].map((variant) => {
    quizHeader.innerHTML += `
    <input type="radio" name="quiz-option" value="${variant}" />
    <label for="a_text">${variant}</label><br />`;
  });
}

function showFinalScore() {
  let quizHeader = document.querySelector(".quiz-header");
  quizHeader.innerHTML = `<h2>You answered ${score} questions correctly.</h2>`;
  let playAgainBtn = submitBtn;
  playAgainBtn.innerText = "Play Again";
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });
}

showNextQuestion();


// You have a very cool project, 
// I hope with these examples I have expanded your horizons 
// a little on the options for an approach to work, 
// with the help of such methods, you can add any number of questions! 
// Good luck with your studies, 
// you'll be able to take on a bigger task and you'll be strong!
