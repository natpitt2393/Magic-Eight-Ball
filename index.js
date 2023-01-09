// First crack at code unti line 50
// let question = '';
// // question = prompt("What is your question?");
// // console.log(question);
// let eightBall = '';
// let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);

// //DOM variables

// let answerEl = document.querySelector('.answer');


// function displayEightBallAnswer() {

//     switch (randomNumber) {
//         case 0:
//             eightBall = "It is certain"
//             break;
//         case 1:
//             eightBall = "It is decidedly so"
//             break;
//         case 2:
//             eightBall = "Reply hazy, try again"
//             break;
//         case 3:
//             eightBall = "Cannot predict now"
//             break;
//         case 4:
//             eightBall = "Hell no"
//             break;
//         case 5:
//             eightBall = "Maybe"
//             break;
//         case 6:
//             eightBall = "Outlook not so good"
//             break;
//         case 7:
//             eightBall = "It doesn't seem so"
//             break;


//     }
//     console.log(`The Magic 8 Ball says ${eightBall}`);
//    let eightBallAnswer = answerEl;
//    eightBallAnswer.textContent = eightBall;

// }

let question = "";


const eightBallAnswers = [
    "Seems unlikely",
    "Not a chance",
    "In your dreams",
    "Get real, kid",
    "Don't count on it",
    "Nope",
    "No",
    "Maybe",
    "Ask again later",
    "I don't know, I'm just a stupid piece of plastic",
    "Perhaps",
    "Signs point to yes",
    "Absolutely",
    "It is certain",
    "Is the pope Catholic?",
    "Yes",
    "Does a one legged duck swim in a circle?",
    "Of course, dummy"
];


let index = Math.floor(Math.random() * eightBallAnswers.length);
const answerEl = document.querySelector(".answer");
const questionButtonEl = document.querySelector('.questionButton');
// console.log(index);
// console.log(eightBallAnswers);

function displayEightBallAnswer() {
    let displayedEightBallResponse = answerEl;
    // console.log(eightBallAnswers[index]);
    displayedEightBallResponse.textContent = `The Magic Eight Ball says, ${eightBallAnswers[index]}`;
    if (index <= 6) {
        showImage("ohno")
    } else if (index <= 10) {
        showImage('maybe')
    } else {
        showImage('hooray')
    };
};

function showImage(name) {
    let funnyImage = new Image();
    funnyImage.src = 'images/' + name + '.jpg';
    document.body.appendChild(funnyImage);
}

questionButtonEl.addEventListener('click', function () {
    displayEightBallAnswer();
})