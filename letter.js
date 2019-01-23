// require npm package
var chalk = require('chalk');

// create letter object
function Letter(character) {

    this.character = character;
    this.guessed = false; // defaults to unguessed letter

    this.returnCharacter = function() {
        // display letter when guessed
        if (this.guessed) {
            return chalk.bold.yellow(this.character);
        }
        // display underscore when unguessed
        else {
            return chalk.bold("_");
        }
    }

    this.checkCharacter = function(userGuess) {

        // change letter from unguessed to guessed based on user input
        if (userGuess == this.character) {
            this.guessed = true;
        }

    }

}

// EXPORT letter.js
module.exports = Letter;