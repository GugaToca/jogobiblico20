const questions = [
    {
        question: "Qual é o primeiro livro da Bíblia?",
        answers: [
            { text: "Gênesis", correct: true },
            { text: "Êxodo", correct: false },
            { text: "Levítico", correct: false },
            { text: "Números", correct: false }
        ]
    },
    {
        question: "Quem construiu a arca?",
        answers: [
            { text: "Moisés", correct: false },
            { text: "Noé", correct: true },
            { text: "Abraão", correct: false },
            { text: "Davi", correct: false }
        ]
    },
    {
        question: "Quantos discípulos Jesus tinha?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "14", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "Qual é o menor versículo da Bíblia?",
        answers: [
            { text: "Jesus chorou.", correct: true },
            { text: "Façam tudo com amor.", correct: false },
            { text: "O Senhor é meu pastor, nada me faltará.", correct: false },
            { text: "O Senhor te abençoe e te guarde.", correct: false }
        ]
    },
    {
        question: "Quem foi lançado na cova dos leões?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "José", correct: false },
            { text: "Jonas", correct: false },
            { text: "Elias", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro rei de Israel?",
        answers: [
            { text: "Oséias", correct: false },
            { text: "Davi", correct: false },
            { text: "Salomão", correct: false },
            { text: "Saul", correct: true }
        ]
    },
    {
        question: "Qual é o último livro da Bíblia?",
        answers: [
            { text: "Tiago", correct: false },
            { text: "Judas", correct: false },
            { text: "Apocalipse", correct: true },
            { text: "Romanos", correct: false }
        ]
    },
    {
        question: "Quem foi engolido por um grande peixe?",
        answers: [
            { text: "Pedro", correct: false },
            { text: "Jonas", correct: true },
            { text: "Paulo", correct: false },
            { text: "Elias", correct: false }
        ]
    },
    {
        question: "Quem recebeu os Dez Mandamentos?",
        answers: [
            { text: "Josué", correct: false },
            { text: "Abraão", correct: false },
            { text: "Isaac", correct: false },
            { text: "Moisés", correct: true }
        ]
    },
    {
        question: "Qual era o nome do gigante derrotado por Davi?",
        answers: [
            { text: "Golias", correct: true },
            { text: "Sansão", correct: false },
            { text: "Nabucodonosor", correct: false },
            { text: "Herodes", correct: false }
        ]
    },
    {
        question: "Quem foi o traidor de Jesus?",
        answers: [
            { text: "Paulo", correct: false },
            { text: "Judas Iscariotes", correct: true },
            { text: "João", correct: false },
            { text: "Tomé", correct: false }
        ]
    },
    {
        question: "Quem foi jogado na fornalha ardente?",
        answers: [
            { text: "Sadraque, Mesaque e Abednego", correct: true },
            { text: "Daniel", correct: false },
            { text: "José", correct: false },
            { text: "Ananias e Safira", correct: false }
        ]
    },
    {
        question: "Quem foi o pai de Jacó?",
        answers: [
            { text: "Noé", correct: false },
            { text: "Abraão", correct: false },
            { text: "Isaac", correct: true },
            { text: "Moisés", correct: false }
        ]
    },
    {
        question: "Quem foi a mãe de Jesus?",
        answers: [
            { text: "Rebeca", correct: false },
            { text: "Marta", correct: false },
            { text: "Sara", correct: false },
            { text: "Maria", correct: true }
        ]
    },
    {
        question: "Quem foi o irmão de Moisés?",
        answers: [
            { text: "Josué", correct: false },
            { text: "Arão", correct: true },
            { text: "Calebe", correct: false },
            { text: "Davi", correct: false }
        ]
    },
    {
        question: "Quem foi o homem mais forte da Bíblia?",
        answers: [
            { text: "Davi", correct: false },
            { text: "Golias", correct: false },
            { text: "Sansão", correct: true },
            { text: "Saul", correct: false }
        ]
    },
    {
    question: "Quem escreveu a maioria das cartas do Novo Testamento?",
    answers: [
        { text: "Paulo", correct: true },
        { text: "Pedro", correct: false },
        { text: "João", correct: false },
        { text: "Lucas", correct: false }
    ]
},
{
    question: "Qual profeta foi levado ao céu em um carro de fogo?",
    answers: [
        { text: "Elias", correct: true },
        { text: "Eliseu", correct: false },
        { text: "Isaías", correct: false },
        { text: "Jeremias", correct: false }
    ]
},
{
    question: "Quem interpretou o sonho de Faraó no Egito?",
    answers: [
        { text: "José", correct: true },
        { text: "Moisés", correct: false },
        { text: "Daniel", correct: false },
        { text: "Salomão", correct: false }
    ]
},
{
    question: "Qual discípulo andou sobre as águas em direção a Jesus?",
    answers: [
        { text: "Pedro", correct: true },
        { text: "João", correct: false },
        { text: "André", correct: false },
        { text: "Tiago", correct: false }
    ]
},
{
    question: "Quem era conhecido como o 'amigo de Deus'?",
    answers: [
        { text: "Abraão", correct: true },
        { text: "Davi", correct: false },
        { text: "Moisés", correct: false },
        { text: "Noé", correct: false }
    ]
},
{
    question: "Qual foi o primeiro milagre de Jesus?",
    answers: [
        { text: "Transformar água em vinho", correct: true },
        { text: "Multiplicar os pães", correct: false },
        { text: "Curar o cego de nascença", correct: false },
        { text: "Ressuscitar Lázaro", correct: false }
    ]
},
{
    question: "Quem foi lançado no ventre de um grande peixe por três dias?",
    answers: [
        { text: "Jonas", correct: true },
        { text: "Pedro", correct: false },
        { text: "Paulo", correct: false },
        { text: "Elias", correct: false }
    ]
},
{
    question: "Quem foi o filho da promessa de Abraão e Sara?",
    answers: [
        { text: "Isaac", correct: true },
        { text: "Ismael", correct: false },
        { text: "Jacó", correct: false },
        { text: "José", correct: false }
    ]
},
{
    question: "Quem derrubou os muros de Jericó com trombetas?",
    answers: [
        { text: "Josué", correct: true },
        { text: "Moisés", correct: false },
        { text: "Calebe", correct: false },
        { text: "Elias", correct: false }
    ]
},
{
    question: "Quem traiu Jesus por 30 moedas de prata?",
    answers: [
        { text: "Judas Iscariotes", correct: true },
        { text: "Pedro", correct: false },
        { text: "Tomé", correct: false },
        { text: "André", correct: false }
    ]
},
{
    question: "Quem viu uma escada que ia da terra ao céu em um sonho?",
    answers: [
        { text: "Jacó", correct: true },
        { text: "José", correct: false },
        { text: "Daniel", correct: false },
        { text: "Salomão", correct: false }
    ]
},
{
    question: "Quem liderou o povo de Israel após a morte de Moisés?",
    answers: [
        { text: "Josué", correct: true },
        { text: "Calebe", correct: false },
        { text: "Gideão", correct: false },
        { text: "Sansão", correct: false }
    ]
},
{
    question: "Quem foi o profeta que ungiu Davi como rei?",
    answers: [
        { text: "Samuel", correct: true },
        { text: "Natã", correct: false },
        { text: "Elias", correct: false },
        { text: "Eliseu", correct: false }
    ]
},
{
    question: "Quantos dias e noites choveu no dilúvio de Noé?",
    answers: [
        { text: "40 dias e 40 noites", correct: true },
        { text: "7 dias e 7 noites", correct: false },
        { text: "100 dias", correct: false },
        { text: "3 dias e 3 noites", correct: false }
    ]
},
{
    question: "Qual era o nome da esposa de Adão?",
    answers: [
        { text: "Eva", correct: true },
        { text: "Sara", correct: false },
        { text: "Rebeca", correct: false },
        { text: "Raquel", correct: false }
    ]
},
{
    question: "Quem escreveu o livro de Apocalipse?",
    answers: [
        { text: "João", correct: true },
        { text: "Pedro", correct: false },
        { text: "Paulo", correct: false },
        { text: "Tiago", correct: false }
    ]
},
{
    question: "Qual era a profissão de Pedro antes de seguir Jesus?",
    answers: [
        { text: "Pescador", correct: true },
        { text: "Carpinteiro", correct: false },
        { text: "Pastor de ovelhas", correct: false },
        { text: "Coletor de impostos", correct: false }
    ]
},
{
    question: "Quem derrubou o gigante Golias?",
    answers: [
        { text: "Davi", correct: true },
        { text: "Saul", correct: false },
        { text: "Samuel", correct: false },
        { text: "Jonas", correct: false }
    ]
},
{
    question: "Quem foi conhecido como 'o homem segundo o coração de Deus'?",
    answers: [
        { text: "Davi", correct: true },
        { text: "Salomão", correct: false },
        { text: "Abraão", correct: false },
        { text: "Moisés", correct: false }
    ]
},
{
    question: "Quem foi o profeta que enfrentou os profetas de Baal no Monte Carmelo?",
    answers: [
        { text: "Elias", correct: true },
        { text: "Eliseu", correct: false },
        { text: "Isaías", correct: false },
        { text: "Jeremias", correct: false }
    ]
}
];

const somAcerto = new Audio('acerto.mp3.mp3');
const somErro = new Audio('erro.mp3.mp3');

const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const nameInput = document.getElementById('player-name');
const body = document.body;

// Novo: elementos do box de mensagem
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message-text');
const messageBtn = document.getElementById('message-btn');

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let faseAtual = 1;
let acertosFase = 0;
let perguntasFase = [];

function showMessage(text, callback) {
    messageText.innerText = text;
    messageBox.classList.remove('hide');
    messageBtn.onclick = () => {
        messageBox.classList.add('hide');
        if (callback) callback();
    };
}

startButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === "") {
        showMessage("Por favor, digite seu nome.");
        return;
    }
    playerName = name;
    startContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    startGame();
});

restartButton.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    startContainer.classList.remove('hide');
});

function startGame() {
    faseAtual = 1;
    score = 0;
    acertosFase = 0;

    const perguntasEmbaralhadas = [...questions].sort(() => Math.random() - 0.5);
    perguntasFase = [
        perguntasEmbaralhadas.slice(0, 10),
        perguntasEmbaralhadas.slice(10, 20),
        perguntasEmbaralhadas.slice(20)
    ];

    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(perguntasFase[faseAtual - 1][currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, question, button));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer, question, selectedButton) {
    const buttons = answerButtonsElement.querySelectorAll('.btn');

    buttons.forEach(button => {
        const answerText = button.innerText;
        const isCorrect = question.answers.find(a => a.text === answerText)?.correct;
        button.classList.add(isCorrect ? 'correct' : 'wrong');
        button.disabled = true;
    });

    if (answer.correct) {
        somAcerto.play();
        score++;
        acertosFase++;
        body.style.backgroundColor = 'green';
        setTimeout(() => {
            body.style.backgroundColor = '';
            nextQuestion();
        }, 1000);
    } else {
    somErro.play();
    body.style.backgroundColor = 'red';
    const correct = question.answers.find(a => a.correct).text;
    setTimeout(() => {
        body.style.backgroundColor = '';
        showMessage(`Resposta errada! A correta é: ${correct}`, () => {
            nextQuestion(); // avança direto
        });
    }, 1000);
}


function nextQuestion() {
    currentQuestionIndex++;
    nextButton.classList.add('hide');

    const fasePerguntas = perguntasFase[faseAtual - 1];

    if (currentQuestionIndex < fasePerguntas.length) {
        showQuestion(fasePerguntas[currentQuestionIndex]);
    } else {
        verificarFase();
    }
}

function verificarFase() {
    if (acertosFase >= 7) {
        faseAtual++;
        if (faseAtual <= 3) {
            showMessage(`Parabéns, ${playerName}! Você desbloqueou a fase ${faseAtual}.`, () => {
                currentQuestionIndex = 0;
                acertosFase = 0;
                showQuestion(perguntasFase[faseAtual - 1][currentQuestionIndex]);
            });
        } else {
            showResults();
        }
    } else {
        showMessage("Você não atingiu a pontuação necessária. Tente novamente!", restartGame);
    }
}

function restartGame() {
    quizContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    startContainer.classList.remove('hide');
}

function showResults() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    restartButton.classList.remove('hide');

    const total = questions.length;
    const erros = total - score;

    resultText.innerText = `${playerName}, você acertou ${score} de ${total} perguntas.\nErros: ${erros}`;
}


nextButton.addEventListener('click', nextQuestion);

