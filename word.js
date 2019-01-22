// **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   *  An array of `new` Letter objects representing the letters of the underlying word

//   *  A function that returns a string representing the word. 
//      This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   *  A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

// import the Letter constructor
var Letter = require('./letter.js');

function Word(word) {

    this.word = word;

    this.objArray = [];

    for (var i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i]);
        this.objArray.push(newLetter);
    }

    this.returnString = function() {

        var wordString = '';

        for (var j = 0; j < this.objArray.length; j++) {
            wordString += this.objArray[j].returnCharacter() + " ";
        }

        console.log('\n' + wordString + '\n');
        
    }

    this.checkGuess = function(userGuess) {

        for (var k = 0; k < this.objArray.length; k++) {
            this.objArray[k].checkCharacter(userGuess);
        }

    }

}

module.exports = Word;