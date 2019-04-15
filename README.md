# Shakespearean Hangman: A Command Line Node App

        ,    /_  __,   /,  _   ,   ,_    _  __,   ,_   _  __,   ,__,      /_  __,   ,__,   __   ,____,  __,   ,__, 
      _/_)__/ (_(_/(__/(__(/__/_)__/_)__(/_(_/(__/ (__(/_(_/(__/ / (_   _/ (_(_/(__/ / (__(_/__/ / / (_(_/(__/ / (_
                                  /                                                       _/_                      
                                 /                                                       (/                           
Guess the word that Shakespeare created! :page_with_curl::black_nib:

## What this project does ##

This project requires [`npm`](https://www.npmjs.com) to install third party libraries by using the command line. [`Inquirer`](https://www.npmjs.com/package/inquirer) is used to collect user input and data logged in the terminal is styled with [`Chalk`](https://www.npmjs.com/package/chalk). The game objects are built by `constructor functions`.

## How users can get started with this project ## 

1. **Setup the game.**
    - Clone or download the [shakespeare-cli-constructor repository](https://github.com/fkakatie/shakespeare-cli-constructor). 
    - Create a `node_modules` directory by entering `npm i` in the command line.
	
2. **Start the game.**
    - Enter `node index` in the command line to start the game.
	
3. **Enter any key to guess the Shakespearean word.**
    - Users are allowed 7 incorrect guesses. 
      - Correct guesses will replace underscores with the entered letter.
      - Wrong guesses will reduce the number of "guesses left" each user is allowed and display incorrect letters entered.
    - Only unique letters will be registered as valid guesses.

4. **Win or lose.**
    - If the user correctly spells the Shakespearean word, they will earn a win.
    - In the event of 7 incorrect guesses in a round, the console will update with information about the loss.

5. **Replay!**
    - After either a win or a loss, the user can choose whether or not to play again.
      - If the user chooses to play again, a new Shakespearean word will be chosen, allowing users to continue to play again! 

## Where users can get help with this project ## 

A [**video tutorial**](https://drive.google.com/file/d/17p8qUTmzhw1bADTmKjce4b7yaRGh3TW2/view) is available, but if you have any further questions about this project, visit my portfolio and [send me a message](https://fkakatie.github.io/contact).

## Who maintains this project ##

This project is lovingly (and casually) maintained by me, @[fkakatie](https://github.com/fkakatie). Thanks for checking it out. 
