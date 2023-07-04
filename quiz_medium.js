const questions = [
    {
        question: "What is the name of the phenomenon where a massive star collapses under its own gravity and explodes?",
        answers: [
            {text: "Nebula", correct: false},
            {text: "Supernova", correct: true},
            {text: "Red giant", correct: false},
            {text: "Black hole", correct: false},
        ]
    },
    {
        question: "What role does gravity play in nuclear fusion in stars?",
        answers: [
            {text: "Gravity provides the necessary pressure and temperature for fusion to occur.", correct: true},
            {text: "Gravity prevents fusion from occurring by compressing the star.", correct: false},
            {text: "Gravity accelerates the fusion process.", correct: false},
            {text: "Gravity has no direct impact on nuclear fusion in stars.", correct: false},
        ]
    },
    {
        question: "What is the hottest planet in the Solar System?",
        answers: [
            {text: "Mars", correct: false},
            {text: "Earth", correct: false},
            {text: "Mercury", correct: false},
            {text: "Venus", correct: true},
        ]
    },
    {
        question: "What is the biggest Natural Satellite of the Solar System?",
        answers: [
            {text: "Europe", correct: false},
            {text: "Titan", correct: false},
            {text: "Ganymede", correct: true},
            {text: "Miranda", correct: false},
        ]
    },
    {
        question: "Suppose the Sun was substituted by a Black Hole with the same mass as the Sun, what would happen to the orbits of the planets?",
        answers: [
            {text: "Nothing would happen to their orbits, however, they wouldn’t receive the same energy as before", correct: true},
            {text: "The planets would wander aimlessly, likely being destroyed along the way.", correct: false},
            {text: "The planets would be swallowed by the black hole.", correct: false},
            {text: "The black hole and the planets would engage in a 'Tug of War', attempting to escape the gravitational pull of the black hole.", correct: false},
        ]
    },
    {
        question: "What is the temperature of the Sun’s core?",
        answers: [
            {text: "13 million degrees Celsius", correct: false},
            {text: "15 million degrees Celsius", correct: true},
            {text: "22 million degrees Celsius", correct: false},
            {text: "24 million degrees Celsius", correct: false},
        ]
    },
    {
        question: "What is the brightest star in the night sky?",
        answers: [
            {text: "Aldebaran", correct: false},
            {text: "Sirius", correct: true},
            {text: "Vega", correct: false},
            {text: "Betelguese", correct: false},
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
        scoreText = "Your performance was awful... But don't worry, there's always room for improvement. Keep studying and dedicating yourself, and over time you will enhance your knowledge.";
    } else if (score >= 1 && score <= 2) {
        scoreText = "Your performance was mediocre at best...<br>But there's room for improvement. Keep trying and learning more about the subject. With dedication, you will reach a higher level of understanding.";
    } else if (score >= 3 && score <= 4) {
        scoreText = "Average performance. You are starting to delve into this wonderful world. Keep studying and exploring, and you will certainly become better.";
    } else if (score >= 5 && score <= 6) {
        scoreText = "Your performance was pretty good! You have a great amount of knowledge about astronomy.<br>Keep learning to get even better!";
    } else if (score === 7) {
        scoreText = "Congratulations! Your performance was astounding!<br>You are way above average, and if you keep it up you are surely bound to achieve great things!";
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