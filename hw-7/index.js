const questions = [
    {
        question: 'Сколько хромосом у здорового человека?',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'Путин - хуйло',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Сколько хромосом у Путина?',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Сколько тупых овец в московии (в млн)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Снесли ли памятник Екатерине-2 в Одессе?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Сколько черных пакетов выделяются на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Со скольких позиций готовилось нападение на Беларусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Нужно ли сжигать сосийский флаг?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Считаете ли вы сосию своим домом?',
        answer: 'false',
        type: 'confirm',
    },
];

    
let score = 0;

function askQuestion(question) {
    let userAnswer;

    if (question.type === 'prompt') {
        userAnswer = askPromptQuestion(question.question);
    } else if (question.type === 'confirm') {
        userAnswer = askConfirmQuestion(question.question);
    }

    if (userAnswer === question.answer) {
        score += 10;
    }
}

function runCheck() {

    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i]);
    }

     if (score >= 70 && score <= 100) {
        alert(`Результат: ${score} очков. Поздравляю!`);
    } else if (score >= 40 && score < 70) {
        alert(`Результат: ${score} очков. Ты можешь лучше. Попробуй еще раз!`);
    } else if(score < 40) {
        alert(`Результат: ${score} очков. Геть з України!`);
    }
}
 runCheck();

function askPromptQuestion(questionText) {
    return prompt(questionText);  
}

function askConfirmQuestion(questionText) {
    return confirm(questionText);
}