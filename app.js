const answers = document.querySelectorAll("answers");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startQuiz = document.getElementById("startQuiz");
var startTimer = document.getElementById("startTimer");
var startTime = 30;

// if (questionPrompt[questionIndex].correct) {
// }
// event.target.id
startQuiz.addEventListener("click", function () {
  // mainBox.style.display = "block"
  mainBox.classList.remove("hide");
  renderQuestion();

  setInterval(function () {
    startTime--;
    startTimer.textContent = "Timer:" + startTime;
    if(startTime === 0) {
      clearInterval(startQuiz);
    }
  }, 1000);
});

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
    correct: "choiceC",
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

// index
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
  } else {
    startTime = startTime - 5;
    questionPromp[questionIndex];
  }

  questionIndex++;
  renderQuestion();
}

// var firstChildUl = document.getElementById("first-child-ul");
// console.log(firstChildUl);

// use nagivate function from example 18 to sort through all questions, do not use for-loop for this.
// function navigate(direction) {
//     index = index + direction;
//     if (index < 0) {
//       index = images.length - 1;
//     } else if (index > images.length - 1) {
//       index = 0;
//     }
//     currentImage = images[index];
//     carousel.style.backgroundImage = "url('" + currentImage + "')";
// }

// need to add these question to the html by targeting elements and get by id fucntions
// putting an event listern as a target, will be captured var imageContainer = document.querySelector(".img-container");
// Listen for any clicks within the img-container div imageContainer.addEventListener("click", function(event) {var element = event.target;
// var imageContainer = document.querySelector(".img-container");

// Check if the clicked element was an image
// if (element.matches("1")) {
//   // Get the current value of the image's data-state attribute
//   var state = element.getAttribute("data-state");

//   if (state === "2") {
//     // Change the data-state attribute's value
//     // There are two different ways this attribute can be set
//     element.dataset.state = "3";
//     element.setAttribute("data-state", "animate");
//     // Update the image's source to the string being stored in the data-animate attribute
//   } else {
//     // Change the attributes back to their non-animated values
//     element.dataset.state = "4";
//     element.setAttribute("src", element.dataset.still);
//   }
// }

// var answers = document.querySelector("section");

// answers.addEventListener("click", function (event) {
//   var element = event.target;
//   console.log("hello");
// });

// function log() {
//     var element = console.log("hello");
// }
