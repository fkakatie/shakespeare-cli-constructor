// import the Letter constructor
var Letter = require('./letter.js');

// create new word object
function Word(word) {

    this.word = word;
    this.objArray = []; // array to store word letter objects

    // push all letter objects to objArray
    for (var i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i]);
        this.objArray.push(newLetter);
    }

    this.returnString = function() {

        var wordString = ''; // variable to hold random word string to print to console

        // create random word string based on letter objects
        for (var j = 0; j < this.objArray.length; j++) {
            wordString += this.objArray[j].returnCharacter() + " ";
        }

        // log random word string to console
        console.log('\n' + wordString + '\n');
        
    }

    this.checkGuess = function(userGuess) {

        // check each user guess against random word string
        for (var k = 0; k < this.objArray.length; k++) {
            this.objArray[k].checkCharacter(userGuess);
        }

    }

}

// EXPORT word.js
module.exports = Word;