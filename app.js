const answers = document.querySelectorAll("answers");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startQuiz = document.getElementById("startQuiz");
var startTimer = document.getElementById("startTimer");
var correctAlert = document.getElementById("correctAlert");
var initials = document.getElementsByClassName("initials");
var startTime = 5;



startQuiz.addEventListener("click", function () {
  mainBox.classList.remove("hide");
  renderQuestion(); 
  setInterval(function () {
    startTime--;
    startTimer.textContent = "Timer:" + startTime;
    // attempts to make it stop at zero and clear the mainbox upon hitting zero
  }, 1000);
});


    // attempts to make it stop at zero and clear the mainbox upon hitting zero, clear mainbox againa and display form section
  if(startTime === 0) {
  mainBox.classList.remove("hide");
  clearInterval(startQuiz);
  initials.classList.display("block");
 
}

var questionPromp = [
  {
    question: "What was professor snapes first name?",
    choiceA: "Severus",
    choiceB: "Black",
    choiceC: "Sirus",
    choiceD: "James",
    correct: "choiceA",
  },
  {
    question: "What kind of pet did Ron have?",
    choiceA: "Duck",
    choiceB: "Rat",
    choiceC: "Mouse",
    choiceD: "Owl",
    correct: "choiceB",
  },
  {
    question: "Who was the most powerfull wizard?",
    choiceA: "Harry",
    choiceB: "Tom",
    choiceC: "Albus",
    choiceD: "Grinderwald",
    correct: "choiceC",
  },
  {
    question: "What kind of house did the Weasleys live in?",
    choiceA: "Apartment",
    choiceB: "Duplex",
    choiceC: "Mansion",
    choiceD: "Burrow",
    correct: "choiceD",
  },
  {
    question: "What were Hermionies parents occupation?",
    choiceA: "Pyschologists",
    choiceB: "Dentists",
    choiceC: "Mailworkers",
    choiceD: "Engineers",
    correct: "choiceB",
  },

  {
    question: "Which is not a deathly hollow?",
    choiceA: "Elder Wand",
    choiceB: "Cloak of Invisibility",
    choiceC: "Resurection Stone",
    choiceD: "The Room of Requirement",
    correct: "choiceD",
  },
];

const lastQuestion = questionPromp.length - 1;

var questionIndex = 0;

console.log(question);

function renderQuestion() {
  var q = questionPromp[questionIndex];
  question.textContent = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  console.log(buttonClickID);
  checkAnswer(buttonClickID);
});

function checkAnswer(buttonClickID) {
  if (questionPromp[questionIndex].correct === buttonClickID) {
    correctAlert.textContent = ("correct!");
  } else {
    startTime = startTime - 5;
    questionPromp[questionIndex];
    correctAlert.textContent = ("Nope!");
  }

// add a condition that gives a correct answer a point.
// var finalScore = localStorage.getItem("points");

// function correctScore(buttonClickID) {
//     if (questionPromp[questionIndex].correct === buttonClickID) {
      
//     } else {;
//     }

  questionIndex++;
  renderQuestion();
  
};
