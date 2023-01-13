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


let funnyImage = document.getElementById('funnyImage')
let index = Math.floor(Math.random() * eightBallAnswers.length);
const answerEl = document.querySelector("#circle");
const questionButtonEl = document.querySelector('.shake');
const questionEl = document.getElementById('question');
// console.log(index);
// console.log(eightBallAnswers);


questionEl.addEventListener('focus', () => {
    answerEl.style.display = "none";
    questionEl.value = ''; 
    funnyImage.src = '';
})

function displayEightBallAnswer() {
    console.log(eightBallAnswers[index]);
    console.log(eightBallAnswers[index]);
    answerEl.style.display = 'flex';
    answerEl.innerHTML = eightBallAnswers[index];

    if (index <= 6) {
        showImage("ohno")
    } else if (index <= 10) {
        showImage('maybe')
    } else {
        showImage('hooray')
    };
};

function showImage(name) {
    funnyImage.src = 'images/' + name + '.jpg';
    // document.body.appendChild(funnyImage);
}




questionButtonEl.addEventListener('click', function () {
    console.log(questionEl.value);
    displayEightBallAnswer();
})

// questionEl.addEventListener('change', () => {
//     console.log(questionEl.value);
// })