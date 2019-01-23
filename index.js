// require npm packages
var inquirer = require('inquirer');
var chalk = require('chalk');

// require other javascript files
var Word = require('./word.js');
var wordList = require('./shakespeare.js');

var guessThis; // word to be randomly generated

var score = 0; 
var guessesLeft = 7;

var incorrectGuesses = [];
var correctGuesses = [];
var allGuesses = [];

var sum = 0; // used to total true characters in word to guess
var targetSum; // length of word to guess

function loadGame() {

                                                                   
    console.log(chalk.bold("\n    ,    /_  __,   /,  _   ,   ,_    _  __,   ,_   _  __,   ,__,   "));
      console.log(chalk.bold("  _/_)__/ (_(_/(__/(__(/__/_)__/_)__(/_(_/(__/ (__(/_(_/(__/ / (_  "));
      console.log(chalk.bold("                              /                                    "));
      console.log(chalk.bold("                             /                                     "));
      console.log(chalk.bold("         /_  __,   ,__,   __   ,____,  __,   ,__,                  "));
      console.log(chalk.bold("       _/ (_(_/(__/ / (__(_/__/ / / (_(_/(__/ / (_                 "));
      console.log(chalk.bold("                         _/_                                       "));
      console.log(chalk.bold.gray("         Guess the word") + chalk.bold(" (/ ") + chalk.bold.gray("yond Shakespeare did create!"));
  
    startGame();

}

function startGame() {

    // generate random word
    randomWord(); 
    
    // print word string to console
    guessThis.returnString(); 

    // display remaining guesses
    console.log('Guesses Left: ' + chalk.bold(guessesLeft) + '\n');

    // collect user inuput
    userInput();

}

function randomWord() {

    // generate random number based on wordList length
    var randomNum = Math.floor(Math.random() * wordList.length);

    // replace guessThis with random word
    guessThis = wordList[randomNum].toUpperCase();

    // create new object from random word
    guessThis = new Word(guessThis);

}

function userInput() {

    // collect user input
    inquirer.prompt([
        {
            name: 'guess',
            type: 'input',
            message: 'Guess a letter:',
            validate: function(value) {
        
                // input cannot be blank and must be a letter
                if (value.trim().length == 0 || !value.match(/^[A-Za-z]+$/)) {
                    return false;
                }
                return true;
                
            }
        }
    ]).then(function(input) {
    
        // convert userGuess to a single, uppercase letter
        var userGuess = input.guess.toUpperCase().split('', 1).join('');

        // check user guess
        validateGuess(userGuess);
    
    });
    
}

function validateGuess(userGuess) {

    // check user guess against previous guesses
    if (allGuesses.includes(userGuess)) {
        console.log(chalk.inverse('\nThou hast already guessed ' + userGuess + '!'));
    } 
    // if user guess is in the random word
    else if (guessThis.word.indexOf(userGuess) !== -1) {
        correctGuesses.push(userGuess);
        combineGuesses();
        guessThis.checkGuess(userGuess);
    } 
    // if user guess is NOT in the random word
    else {
        guessesLeft--; // decrement guesses left

        incorrectGuesses.push(userGuess);
        combineGuesses();
        guessThis.checkGuess(userGuess);
    }

    // check if all letters have been guessed
    checkWin();

    // if user runs out of guesses, user loses
    if (guessesLeft < 1) {
        
        console.log(chalk.bold.red('\nAlas, thou hast failed!'));
        // print random word to screen
        console.log('The word wast ' + chalk.bold.yellow(guessThis.word) + '.');
        // print score to console
        console.log(chalk.red('>') + ' SCORE: ' + chalk.bold.red(score) + '\n');
        
        // give the option to play again
        playAgain();

    }
    // if all letters are guessed, user wins
    else if (sum == targetSum) {

        score++; // increment score

        console.log(chalk.bold.green('\nHey-ho, thou art correct!'));
        // print random word to screen
        console.log('The word wast ' + chalk.bold.yellow(guessThis.word) + '.');
        // print score to console
        console.log(chalk.green('>') + ' SCORE: ' + chalk.bold.green(score) + '\n');

        // give the option to play again
        playAgain();
        
    }
    // otherwise continue the game!
    else {
        
        // return string with new user guess
        guessThis.returnString();
        // print game stats
        console.log('False Guesses: ' + chalk.bold(incorrectGuesses));
        console.log(' Guesses Left: ' + chalk.bold(guessesLeft) + '\n');
        // collect next user guesss
        userInput();

    }

}

function checkWin() {

    // set target to random worth length
    targetSum = guessThis.objArray.length;
    sum = 0; // reset sum at 0

    for (var l = 0; l < guessThis.objArray.length; l++) {
        // total "value" of guesses (true = 1)
        sum += guessThis.objArray[l].guessed;
    }

}

function combineGuesses() {

    // combine correct and incorrect guesses into one array
    allGuesses = correctGuesses.concat(incorrectGuesses);

}

function playAgain() {

    // reset game stats
    guessesLeft = 7;
    incorrectGuesses = [];
    correctGuesses = [];
    allGuesses = [];
    sum = 0;

    // collect user input
    inquirer.prompt([
        {
            name: 'replay',
            type: 'confirm',
            message: 'Would thee like to playeth once more?',
            default: true
        }
    ]).then(function(input) {
    
        input.replay ? 
            // restart game
            startGame() : 
            // end game with instructions how to restart
            console.log(
                chalk.inverse('\nIf \'t be true thee changeth thy mind, playeth again by entering') + 
                chalk.inverse.bold(' node index ') + 
                chalk.inverse('in the command line.'));
    
    });

}

// start the game!
loadGame();
