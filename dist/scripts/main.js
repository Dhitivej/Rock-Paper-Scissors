// "use strict";
// exports.__esModule = true;
var userScore = 0;
var comScore = 0;
var rockDiv = document.querySelector('#r');
var paperDiv = document.querySelector('#p');
var scissorsDiv = document.querySelector('#s');
var userScoreSpan = document.querySelector('#userScore');
var comScoreSpan = document.querySelector('#comScore');
var result = document.querySelector('.result p');
var resetButton = document.querySelector('#resetButton');
var smallUserWord = 'user'.fontsize(3).sub();
var smallComWord = 'com'.fontsize(3).sub();
window.onload = init;
function init() {
	rockDiv.addEventListener('click', function() {
		return game('r');
	});
	paperDiv.addEventListener('click', function() {
		return game('p');
	});
	scissorsDiv.addEventListener('click', function() {
		return game('s');
	});
	resetButton.addEventListener('click', resetScore);
}
function game(userChoice) {
	// console.log(userChoice);
	var comChoice = getComChoice();
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
	var choicesArr = ['r', 'p', 's'];
	var randomChoice = Math.floor(Math.random() * 3);
	return choicesArr[randomChoice];
}
function wins(userChoice, comChoice) {
	userScore++;
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;
	var message =
		letterToWord(userChoice) +
		' ' +
		smallUserWord +
		' beats ' +
		letterToWord(comChoice) +
		' ' +
		smallComWord +
		' .You Win \uD83D\uDD25 ';
	result.innerHTML = message;
	var userChoiceObject = document.querySelector('#' + userChoice);
	userChoiceObject.classList.add('green-glow');
	setTimeout(function() {
		userChoiceObject.classList.remove('green-glow');
	}, 300);
}
function lose(userChoice, comChoice) {
	comScore++;
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;
	var message =
		letterToWord(comChoice) +
		' ' +
		smallComWord +
		' beats ' +
		letterToWord(userChoice) +
		' ' +
		smallUserWord +
		' .You Lose \uD83D\uDE22 ';
	result.innerHTML = message;
	var userChoiceObject = document.querySelector('#' + userChoice);
	userChoiceObject.classList.add('red-glow');
	setTimeout(function() {
		userChoiceObject.classList.remove('red-glow');
	}, 300);
}
function draw(userChoice, comChoice) {
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;
	var message =
		letterToWord(userChoice) +
		' ' +
		smallUserWord +
		' equals to ' +
		letterToWord(comChoice) +
		' ' +
		smallComWord +
		" .It's a draw \uD83D\uDE11 ";
	result.innerHTML = message;
	var userChoiceObject = document.querySelector('#' + userChoice);
	userChoiceObject.classList.add('grey-glow');
	setTimeout(function() {
		userChoiceObject.classList.remove('grey-glow');
	}, 300);
}
function resetScore() {
	userScore = 0;
	comScore = 0;
	userScoreSpan.innerHTML = userScore;
	comScoreSpan.innerHTML = comScore;
	var message = 'Score Reset'.toUpperCase();
	result.innerHTML = message;
}
function letterToWord(letter) {
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
