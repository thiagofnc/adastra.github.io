const questions = [
    {
        question: "What star is the closest to Earth?",
        answers: [
            {text: "Betelguese", correct: false},
            {text: "Proxima Centauri", correct: true},
            {text: "Sirius", correct: false},
            {text: "Alpha Centauri", correct: false},
        ]
    },
    {
        question: "What are the rocky planets of the Solar System?",
        answers: [
            {text: "Mercury, Venus, Earth, Mars", correct: true},
            {text: "Jupiter, Saturn, Uranus, Neptune", correct: false},
            {text: "Venus, Earth, Saturn, Uranus", correct: false},
            {text: "Mercury, Earth, Mars, Jupiter", correct: false},
        ]
    },
    {
        question: "What was the name of the mission that firs put a man on the moon?",
        answers: [
            {text: "Operating Hubble", correct: false},
            {text: "Apollo 73", correct: false},
            {text: "Space Race", correct: false},
            {text: "Apollo 11", correct: true},
        ]
    },
    {
        question: "What causes the phases of the moon?",
        answers: [
            {text: "Earth´s Shadow", correct: false},
            {text: "The moon´s rotation", correct: false},
            {text: "The Sun’s position relative to the moon ", correct: true},
            {text: "The moon’s elliptical orbit", correct: false},
        ]
    },
    {
        question: "What is the biggest planet in the Solar System?",
        answers: [
            {text: "Uranus", correct: false},
            {text: "Saturn", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Mars", correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    let scoreText = "";


    if (score === 0) {
        scoreText = "Your performance was very poor! But relax!<br>Your knowledge is still being developed! Review the content of the website and try again.<br>We believe in you, young one!";
    } else if (score >= 1 && score <= 2) {
        scoreText = "Your performance was okay!<br>You are still entering the world of astronomy.<br>We recommend reviewing the website's content and trying again. We believe in your potential!";
    } else if (score >= 3 && score <= 4) {
        scoreText = "Your performance was great! You are starting to delve into the splendid world of astronomy. Keep it up!";
    } else if (score === 5) {
        scoreText = "You got EVERYTHING right! Your performance was splendid! Keep it up, and you will continue to acquire more knowledge! Congratulations, young one!<br>Now it's Off to Infinity and Beyond!";
    }


    questionElement.innerHTML = `You scored ${score}.<br>${scoreText}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();



  





