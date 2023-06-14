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
var initials = document.getElementById("initials");
var startTime = 60;


startQuiz.addEventListener("click", function () {
  mainBox.classList.remove("hide");
  var startQuizButton = document.getElementById("startQuiz");
  startQuizButton.style.display = "none";
  var timerInterval = setInterval(function () {
    startTime--;
    startTimer.textContent = "Timer: " + startTime;
    if (startTime <= 0 || questionIndex === lastQuestion) {
      clearInterval(timerInterval);
      quizEnd();
    }
  }, 1000);
  renderQuestion();
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

const lastQuestion = questionPromp.length;

var questionIndex = 0;

console.log(question);

function renderQuestion() {
  if (questionIndex < lastQuestion) {
    var q = questionPromp[questionIndex];
    question.textContent = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  }
}

var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  console.log(buttonClickID);
  checkAnswer(buttonClickID);
});

function checkAnswer(buttonClickID) {
  if (questionPromp[questionIndex].correct === buttonClickID) {
    correctAlert.textContent = "Correct!";
  } else {
    startTime = startTime - 5;
    correctAlert.textContent = "Nope!";
  }

  if (questionIndex === lastQuestion) {
    quizEnd();
  } else {
    questionIndex++;
    renderQuestion();
  }
}

function quizEnd() {
  mainBox.classList.add("hide");
  initials.classList.remove("hide");
  initials.textContent = "";
  var section = document.createElement("section");
  section.id = "initials";
  section.classList.add("hide");
    section.innerHTML = `
        <h2>Congrats on finishing the Potter Quiz!</h2>
        <h3>Enter your initials below to save your score :)</h3>
        <label for="msg"> </label>
        <textarea id="msg" name="comments">
        </textarea>
      <button id="save">Save Data</button>
  `;
  
  // Append the section to the document body
  document.body.appendChild(section);  
  // Add event listener to the save button
  var saveButton = section.querySelector("#save");
  saveButton.addEventListener("click", saveData);
  section.classList.remove("hide");
  var initialsInput = section.querySelector("#msg");
  initialsInput.focus();
}

function saveData() {
  var initialsInput = document.querySelector("#msg").value;
  if (initialsInput.trim() !== "") {
    // Save the data or perform any other action here
    correctAlert.textContent = "Score saved successfully!";
    
    // Create a new element for displaying initials and score
    var scoreElement = document.createElement("p");
    scoreElement.textContent = initialsInput + " | Score: " + startTime;

    var scoreElement = document.createElement("p");
    scoreElement.textContent = initialsInput + " | Score: " + startTime;
    
    // Append the score element to the document body
    var initialsSection = document.getElementById("initials");
    initialsSection.appendChild(scoreElement);
    
    // Clear the initials input field
    document.querySelector("#msg").value = "";
    document.querySelector("#msg").blur();
  } else {
    correctAlert.textContent = "Please enter your initials.";
  }
  startTimer.style.display = "none";
}


