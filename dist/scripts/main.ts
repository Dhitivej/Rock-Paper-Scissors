export {};

let userScore: any = 0;
let comScore: any = 0;

const rockDiv = document.querySelector('#r');
const paperDiv = document.querySelector('#p');
const scissorsDiv = document.querySelector('#s');

const userScoreSpan = document.querySelector('#userScore');
const comScoreSpan = document.querySelector('#comScore');
const result = document.querySelector('.result p');
const resetButton = document.querySelector('#resetButton');

let smallUserWord: string = 'user'.fontsize(3).sub();
let smallComWord: string = 'com'.fontsize(3).sub();

window.onload = init;

function init() {
	rockDiv.addEventListener('click', () => game('r'));
	paperDiv.addEventListener('click', () => game('p'));
	scissorsDiv.addEventListener('click', () => game('s'));

	resetButton.addEventListener('click', resetScore);
}

function game(userChoice: any) {
	// console.log(userChoice);
	let comChoice: any = getComChoice();

	switch (userChoice + comChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			wins(userChoice, comChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, comChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, comChoice);
			break;
	}
}

function getComChoice() {
	let choicesArr: String[] = ['r', 'p', 's'];
	let randomChoice: any = Math.floor(Math.random() * 3);
	return choicesArr[randomChoice];
}

function wins(userChoice: any, comChoice: any) {
	userScore++;
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;

	let message = `${letterToWord(userChoice)} ${smallUserWord} beats ${letterToWord(
		comChoice
	)} ${smallComWord} .You Win 🔥 `;

	result.innerHTML = message;

	let userChoiceObject = document.querySelector(`#${userChoice}`);
	userChoiceObject.classList.add('green-glow');
	setTimeout(() => {
		userChoiceObject.classList.remove('green-glow');
	}, 300);
}
function lose(userChoice: any, comChoice: any) {
	comScore++;
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;

	let message: string = `${letterToWord(comChoice)} ${smallComWord} beats ${letterToWord(
		userChoice
	)} ${smallUserWord} .You Lose 😢 `;

	result.innerHTML = message;

	let userChoiceObject = document.querySelector(`#${userChoice}`);
	userChoiceObject.classList.add('red-glow');
	setTimeout(() => {
		userChoiceObject.classList.remove('red-glow');
	}, 300);
}
function draw(userChoice: any, comChoice: any) {
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;

	let message: string = `${letterToWord(userChoice)} ${smallUserWord} equals to ${letterToWord(
		comChoice
	)} ${smallComWord} .It's a draw 😑 `;

	result.innerHTML = message;

	let userChoiceObject = document.querySelector(`#${userChoice}`);
	userChoiceObject.classList.add('grey-glow');
	setTimeout(() => {
		userChoiceObject.classList.remove('grey-glow');
	}, 300);
}

function resetScore() {
	userScore = 0;
	comScore = 0;

	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;

	let message: string = 'Score Reset'.toUpperCase();

	result.innerHTML = message;
}

function letterToWord(letter: String) {
	if (letter === 'r') {
		return 'Rock';
	}
	if (letter === 'p') {
		return 'Paper';
	}
	if ((letter = 's')) {
		return 'Scissors';
	}
}
