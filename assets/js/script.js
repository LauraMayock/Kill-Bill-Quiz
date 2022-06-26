// connect the HTML elements to javascript using variables
const startButton = document.getElementById("start-btn");
const questionContainer =document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");


const max_questions = 12;


//shuffle element
let shuffle, currentQuestionIndex, score,questionCounter;


//Event listener for startButton
startButton.addEventListener("click",startGame);



//function to start game
function startGame() {
shuffle = myQuestions.sort(() =>Math.random() - .6);
currentQuestionIndex = 0;
startButton.classList.add("hide"); // hide start button
score = 0;
questionCounter = 0;
questionContainer.classList.remove('hide'); //unhide question container
setNextQuestion()
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex.length === 0 || questionCounter > max_questions) {
     localStorage.setItem("mostRecentScore", score)
     return window.location.assign("/end.html")
 }
     currentQuestionIndex++
     questionCounter++
     progressText.innerText = `Question ${questionCounter} of ${max_questions}`
     setNextQuestion() 
 
 })
 
}



function setNextQuestion() {
  reset()
  showQuestion(shuffle[currentQuestionIndex]);
}



// push questions and answer buttons to HTML
function showQuestion(question) {
    questionElement.innerText = question.question // add questions to HTML
    question.answers.forEach(answer => {
        let button = document.createElement('button'); // add buttons with innerText to HTML
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    button.addEventListener('click',selectAnswer); // add event listener to button which looks out for correct answer
    answerBtns.appendChild(button);
})
}



function reset() {
  clearAnswer(document.body)  // clear clicked buttons from last question
  nextBtn.classList.add('hide') // hide the next button
  while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild)
  }
}


function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    checkAnswer(document.body, correct);
    Array.from(answerBtns.children).forEach(button => {
      checkAnswer(button, button.dataset.correct)
      nextBtn.classList.remove("hide");
    })
if (shuffle.lenght > currentQuestionIndex +1) {
  nextBtn.classList.remove("hide")
} else if (correct) {
      selectedButton.style.backgroundColor = "green";
      scoreText.innerText = score;
      score++;
    } else {
      selectedButton.style.backgroundColor = "red"; 
  }
}

incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

function checkAnswer(element, correct) {
    clearAnswer(element)
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
  }
  
  function clearAnswer(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// show results
function showResults() {
  questionContainer.classList.remove('hide');
  resultsElement.classList.remove("hide");
  resultsElement.innerHTML = `Your final score was ${score}%!`;
  resultsButton.classList.add('hide');
  startButton.classList.remove("hide");
  questionElement.classList.add("hide");
  answerBtns.classList.add("hide");
  questionContainer.classList.add("hide");
}


// Quiz quesstions
let myQuestions = [
    {
    question: "By what name is Uma Thurman's character known throughout the film?", 
    answers: [
      {text: "Black Momba",correct: false },
      {text: "Arlene", correct: false },
      {text: "The Bride", correct: true },
      {text: "she has no name or nickname", correct: false }
    ]
    },
  { 
    question: "What color is associated with the Bride?", 
    answers: [
        {text: "black",correct: false},
        {text: "yellow",correct: true},
        {text: "red",correct: false},
        {text: "white",correct: false}
    ]
    },  
  { 
    question: "On what scene does the movie open?", 
    answers: [
        {text: "the massacre at the wedding chapel",correct: true},
        {text: "Vernita Green's house",correct: false},
        {text: "the sheriff's examination of the massacre aftermath",correct: false}, 
        {text: "the aftermath of the House of Blue Leaves Showdown",correct: false}
    ]
    }, 

  { 
    question: "What was the name of the team of assassins?", 
    answers: [
      {text: "the Snake Den",correct: false},
      {text: "Deadly Vipers Assassination Squad",correct: true},
      {text: "Operation Snowblood",correct: false},
      {text: "the Snake Charmers",correct: false}
    ],
  }, 
  { 
    question: "What unusual item does Elle Driver wear?", 
    answers: [
        {text: "a prosthetic foot",correct: false}, 
        {text: "a neck brace",correct: true},
        {text: "an eyepatch",correct: false}, 
        {text: "a Medic-Alert bracelet",correct: false}, 
    ]
    },  
  { 
    question: "What was Elle Driver's codename during her assassin years?", 
  answers: [
    {text: "sidewinder",correct: false},
    {text: "water moccasin",correct: false},
    {text: "ball python",correct: false}, 
    {text: "California mountain snake",correct: true},
  ],
  }, 
  { 
    question: "What is painted on the truck that the Bride drives?", 
    answers: [
        {text: "Blitzmobile",correct: false},
        {text: "Pussy Wagon",correct: true},
        {text: "Suavecito",correct: false}, 
        {text: "Vengeance is Mine",correct: false}
    ]
  }, 
  { 
    question: "What question does the Bride repeatedly ask Buck when she wakes up in the hospital?", 
  answers: [
    {text: "Where am I?",correct: false},
    {text: "Where is my baby?",correct: true},
    {text: "Who am I?",correct: false}, 
    {text: "Where's Bill?",correct: false}
  ] 
  }, 
  { 
    question: "Where is the gun hidden with which Vernita tries to shoot the Bride?", 
    answers: [
        {text: "a cereal box",correct: true},
        {text: "her purse",correct: false},
        {text: "a dishtowel",correct: false}, 
        {text: "a hollowed-out Bible",correct: false} 
    ]
  },
  { 
    question: "Who played Vernita Green?", 
    answers: [
        {text: "Jade Pinkett Smith",correct: false},
        {text: "Hally Berry",correct: false},
        {text: "Vivica A. Fox",correct: true}, 
        {text: "Stacey Dash",correct: false} 
    ] 
    }, 
    
   {
     question: "What does the Bride do that tells the sheriff she's not dead?", 
     answers: [
        {text: "coughs",correct: false},
        {text: "winks at him",correct: false},
        {text: "spits on him",correct: true}, 
        {text: "opens her eyes",correct: false}  
     ]
    },
     {
        question: "Complete the sentence: 'If you encounter God on your travels, __________.'", 
     answers: [
        {text: "'Take care that you step aside.'",correct: false},
        {text: "'god will approve.'",correct: true},
        {text: "'God will step aside.'",correct: false}, 
        {text: "'God will be cut.'",correct: false}  
     ]
    }
  ]
  
