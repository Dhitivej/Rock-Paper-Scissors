let userScore = 0;
let comScore = 0;

const userScore_span = document.querySelector("#user-score");
const comScore_span = document.querySelector("#com-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result p");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {

     const choices = ["r", "p", "s"];

     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}

function convertToWord(letter) {
     if (letter === "r") return "Rock";
     if (letter === "p") return "Paper";
     if (letter === "s") return "Scissors";
}

function lose(userChoice , comChoice) {
     comScore++;
     userScore_span.innerHTML = userScore;
     comScore_span.innerHTML = comScore;

     const userChoice_div = document.getElementById(userChoice)
     const smallUserWord = "user".fontsize(3).sub()
     const smallComWord = "com".fontsize(3).sub()
     result.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(comChoice)} ${smallComWord} . You lost 😢`
     userChoice_div.classList.add('red-glow');
     setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function wins(userChoice , comChoice) {
     userScore++;
     userScore_span.innerHTML = userScore;
     comScore_span.innerHTML = comScore;
     const userChoice_div = document.getElementById(userChoice)
     const smallUserWord = "user".fontsize(3).sub()
     const smallComWord = "com".fontsize(3).sub()
     
     result.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(comChoice)} ${smallComWord} . You win !!🔥`
     userChoice_div.classList.add('green-glow');
     setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}
function draw(userChoice , comChoice) {

     userScore_span.innerHTML = userScore;
     comScore_span.innerHTML = comScore;
     const userChoice_div = document.getElementById(userChoice)
     const smallUserWord = "user".fontsize(3).sub()
     const smallComWord = "com".fontsize(3).sub()
     result.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals to ${convertToWord(comChoice)} ${smallComWord} . It's a draw !!😑`

     userChoice_div.classList.add('grey-glow');
     setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}


function game(userChoice) {
     const computerChoice = getComputerChoice();
     console.log(computerChoice);
     console.log("user choice =  " + userChoice)

     switch(userChoice + computerChoice) {
          case "rs" : 
          case "pr" :
          case "sp" :
               wins(userChoice, computerChoice);
               break;

          case "rp":
          case "ps":
          case "rs": 
               lose(userChoice, computerChoice);
               break;

          case "rr" :
          case "pp" :
          case "ss" :
               draw(userChoice, computerChoice);
               break;
     }
}

function main () {
     rock_div.addEventListener('click', () => game("r"));
     
     paper_div.addEventListener ('click', () => game("p"));
     scissors_div.addEventListener('click', () => game("s"));
}

main();
