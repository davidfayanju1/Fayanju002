const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort (() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resestState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
        questionElement.innerText = question.question;
        question.answers.forEach(answer=>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resestState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')    
   }else {
       startButton.innerText = 'Restart'
       startButton.classList.remove('hide')
   }
}
    

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
      element.classList.add('correct')  
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who is the president of America?',
        answers: [
            { text: 'Donald Trump', correct: true},
            {text: 'Donald Washington', correct: false},
            {text: 'Barack Trump', correct:false},
            {text: 'George Clooney', correct:false}    
        ]
    }, 
    {
        question: 'Nigeria was colonized by?',
        answers: [
            { text: 'London', correct: false},
            {text: 'North America', correct: false},
            {text:'Great Britain', correct:true},
            {text: 'India', correct:false}    
        ]
    },
    {
        question: 'Who invented the light bulb?',
        answers: [
            { text: 'Albert Einstein', correct:false},
            {text: 'Alexender Flhemings', correct: false},
            {text: 'Thomas Edison', correct:true},
            {text:'Isaac Newton', correct:false}    
        ]
    },
    {
        question: 'what is the fastest means of transportation?',
        answers: [
            { text: 'Road', correct: false},
            {text: 'Rail', correct: false},
            {text:'Teleportation', correct: false},
            {text: 'Air', correct:true}    
        ]
    },
    {
        question: 'What planet is the hottest planet?',
        answers: [
            { text: 'Pluto', correct: false},
            {text: 'Mercury', correct: true},
            {text: 'Venus', correct:false},
            {text: 'Jupiter', correct:false}    
        ]
    }
]
