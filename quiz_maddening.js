const questions = [
    {
        question: "A satellite follows a circular orbit around Earth at a radial distance of R with an orbital speed X. What orbital speed would the satellite need to have in order to have a circular orbit radius 16R? (Orbital Speed = sqrt(GM/R))",
        answers: [
            {text: "16X", correct: false},
            {text: "X/4", correct: true},
            {text: "X/12", correct: false},
            {text: "4X", correct: false},
        ]
    },
    {
        question: "Lagrange points are positions in space where the gravitational forces of two large bodies balance the centrifugal force experienced by a smaller object. These points arise due to a dynamic interaction between gravitational forces and orbital motion. How many stable Lagrange points exist in a system consisting of a planet and a moon?",
        answers: [
            {text: "5", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "1", correct: false},
        ]
    },
    {
        question: "Which factor determines the lifetime of a star in main-sequence phase?",
        answers: [
            {text: "Its chemical composition", correct: false},
            {text: "Its distance from other stars", correct: false},
            {text: "Its temperature", correct: false},
            {text: "Its mass", correct: true},
        ]
    },
    {
        question: "Which of these alternatives about the life cycle of medium-mass stars is correct?",
        answers: [
            {text: "Stars begin their lives as red giants and evolve into white dwarfs.", correct: true},
            {text: "Stars begin their lives as blue supergiants and evolve into neutron stars.", correct: false},
            {text: "Stars begin their lives as red dwarfs and evolve into neutron stars.", correct: false},
            {text: "Stars begin their lives as neutron stars and evolve into black holes.", correct: false},
        ]
    },
    {
        question: "According to the universal law of gravitation, the gravitational force is proportional to:",
        answers: [
            {text: "The product between the mass of the 2 bodies", correct: true},
            {text: "The cubic root of the gravitational constant", correct: false},
            {text: "The square of the distance between them", correct: false},
            {text: "The mass of the heaviest body", correct: false},
        ]
    },
    {
        question: "What are the brightest stars in the constellation of Orion in order?",
        answers: [
            {text: "Rigel, Betelgeuse, Bellatrix, Saiph", correct: true},
            {text: "Betelgeuse, Rigel, Bellatrix, Saiph", correct: false},
            {text: "Rigel, Betelgeuse, Bellatrix, Mintaka", correct: false},
            {text: "Betelgeuse, Rigel, Saiph, Bellatrix", correct: false},
        ]
    },
    {
        question: "It is well-known that the Sun plays a vital role in the Solar System, providing not only energy but also exerting its gravitational influence on the planets. Now, let's imagine a scenario where the Sun suddenly disappears. What would be the impact on the planets?",
        answers: [
            {text: "Nothing would happen with the planets", correct: false},
            {text: "With no gravity, the planets would spread out and aimlessly, probably colliding with something and exploding", correct: true},
            {text: "The planets would explode, because without the Sun´s gravity, the planet cannot make its core stabilize, thus causing the planet to explode inside out", correct: false},
            {text: "As Jupiter is the largest planet in the Solar System, due its weight, its gravity would begin to influence the planets, thus causing them to begin to revolve around it.", correct: false},
        ]
    },
    {
        question: "The formula for the apparent magnitude(m) of a star is given by M + 5log(d) - 5, where M is the absolute magnitude of the star and d is the distance to the star in parsecs. Now, consider two stars with the same absolute magnitude. Star A has an apparent magnitude of 2.0, while Star B has an apparent magnitude of 4.0. What is the ratio of their distances?",
        answers: [
            {text: "10^5", correct: false},
            {text: "10^(-2/5)", correct: true},
            {text: "2", correct: false},
            {text: "10^(-3/7)", correct: false},
        ]
    },
    {
        question: "Which of the following phenomena is responsible for the formation of heavy elements such as gold, platinum, and uranium in the universe?",
        answers: [
            {text: "Stellar nucleosynthesis in massive stars", correct: false},
            {text: "Stellar winds in red giants", correct: false},
            {text: "Supernova explosions", correct: false},
            {text: "Neutron star mergers", correct: true},
        ]
    },
    {
        question: "What is the final stage in the life cycle of a low-mass star?",
        answers: [
            {text: "White dwarf.", correct: true},
            {text: "Black hole", correct: false},
            {text: "Neutron star.", correct: false},
            {text: "Red giant.", correct: false},
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
        scoreText = "That was outrageous... Even a monkey pressing the buttons randomly could have scored more than you.<br>If you were born for that, well, die.";
    } else if (score >= 1 && score <= 2) {
        scoreText = "If for some reason this ever becomes your job you are surely going to starve, what the hell?";
    } else if (score >= 3 && score <= 4) {
        scoreText = "Absolutely terrible???????";
    } else if (score >= 5 && score <= 7) {
        scoreText = "Even my 1 year old brother could do that, that's not surprising at all, but still nice.";
    } else if (score >= 8 && score <= 9) {
        scoreText = "That was actually pretty decent for someone that looks as dumb as you.";
    } else if (score === 10) {
        scoreText = "Congratulations, you did what you were supposed to. What did you expect? A celebration? Nah.";
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
