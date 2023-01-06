let question = '';
// question = prompt("What is your question?");
// console.log(question);
let eightBall = '';
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

switch (randomNumber){
    case 0: 
        eightBall = "It is certain"
        break;
    case 1: 
        eightBall = "It is decidedly so"
        break;
    case 2:
        eightBall = "Reply hazy, try again"
        break;
    case 3:
        eightBall = "Cannot predict now"
        break;
    case 4: 
        eightBall = "Hell no"
        break;
    case 5:
        eightBall = "Maybe"
        break;
    case 6: 
        eightBall = "Outlook not so good"
        break;
    case 7:
        eightBall = "It doesn't seem so"
        break;   
}

console.log(`The Magic 8 Ball says ${eightBall}`);
