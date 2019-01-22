// require npm packages
var inquirer = require('inquirer');
var chalk = require('chalk');

// constructor variables
var Word = require('./word.js');
var wordList = require('./shakespeare.js');

var guessThis;
var score = 0;

var guessesLeft = 7;
var incorrectGuesses = [];
var correctGuesses = [];
var allGuesses = [];

var sum = 0;
var targetSum;

function loadGame() {
                                             
    console.log(chalk.bold("\n   ,    /_  __,   /,  _   ,   ,_    _  __,   ,_   _  "));
      console.log(chalk.bold(" _/_)__/ (_(_/(__/(__(/__/_)__/_)__(/_(_/(__/ (__(/_ "));
      console.log(chalk.bold("                             /                       "));
      console.log(chalk.bold("                            /                        "));
      console.log(chalk.bold("        /_  __,   ,__,   __   ,____,  __,   ,__,     "));
      console.log(chalk.bold("      _/ (_(_/(__/ / (__(_/__/ / / (_(_/(__/ / (_    "));
      console.log(chalk.bold("                        _/_                          "));
      console.log(chalk.bold.gray("  Guess the word that") + chalk.bold("  (/    ")); 
      console.log(chalk.bold.gray(" Shakespearen created!"));

    startGame();

}

function startGame() {

    randomWord();

    guessThis.returnString();
    console.log('Guesses Left: ' + chalk.bold(guessesLeft) + '\n');
    userInput();

}

function randomWord() {

    var randomNum = Math.floor(Math.random() * wordList.length);
    guessThis = wordList[randomNum].toUpperCase();

    guessThis = new Word(guessThis);

}

function userInput() {

    inquirer.prompt([
        {
            name: 'guess',
            type: 'input',
            message: 'Guess a letter:',
            validate: function(value) {
        
                if (value.trim().length == 0 || !value.match(/^[A-Za-z]+$/)) {
                    return false;
                }
                return true;
                
            }
        }
    ]).then(function(input) {
    
        var userGuess = input.guess.toUpperCase().split('', 1).join('');
        validateGuess(userGuess);
    
    });
    
}

function validateGuess(userGuess) {

    if (allGuesses.includes(userGuess)) {
        console.log(chalk.inverse('\nYou\'ve already guessed ' + userGuess + '!'));
    } 
    else if (guessThis.word.indexOf(userGuess) !== -1) {
        correctGuesses.push(userGuess);
        combineGuesses();
        guessThis.checkGuess(userGuess);
    } 
    else {
        guessesLeft--;

        incorrectGuesses.push(userGuess);
        combineGuesses();
        guessThis.checkGuess(userGuess);
    }

    checkWin();

    if (guessesLeft < 1) {

        console.log(chalk.bold.red('\nYou lose!'));
        console.log('The word was ' + chalk.bold.yellow(guessThis.word) + '.');
        console.log(chalk.red('>') + ' SCORE: ' + chalk.bold.red(score) + '\n');
        
        playAgain();

    }
    else if (sum == targetSum) {

        score++;

        console.log(chalk.bold.green('\nYou win!'));
        console.log('The word was ' + chalk.bold.yellow(guessThis.word) + '.');
        console.log(chalk.green('>') + ' SCORE: ' + chalk.bold.green(score) + '\n');

        playAgain();
        
    }
    else {
        
        guessThis.returnString();
        console.log('Incorrect Guesses: ' + chalk.bold(incorrectGuesses));
        console.log('     Guesses Left: ' + chalk.bold(guessesLeft) + '\n');
        userInput();

    }

}

function checkWin() {

    targetSum = guessThis.objArray.length;
    sum = 0;

    for (var l = 0; l < guessThis.objArray.length; l++) {
        sum += guessThis.objArray[l].guessed;
    }

}

function combineGuesses() {

    allGuesses = correctGuesses.concat(incorrectGuesses);

}

function playAgain() {

    guessesLeft = 7;
    incorrectGuesses = [];
    correctGuesses = [];
    allGuesses = [];

    sum = 0;

    inquirer.prompt([
        {
            name: 'replay',
            type: 'confirm',
            message: 'Would you like to play again?'
        }
    ]).then(function(input) {
    
        input.replay ? 
            startGame() : 
            console.log(
                chalk.inverse('\nIf you change your mind, you play again by typing ') + 
                chalk.inverse.bold('node index') + 
                chalk.inverse(' in the command line.'));
    
    });

}

loadGame();