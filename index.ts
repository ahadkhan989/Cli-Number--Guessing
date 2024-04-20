#! /usr/bin/env node
import inquirer from "inquirer";
//01 Computer will generate a random number - done
//02 user input for guessing number - done
//03 compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number.");    
}else {
    console.log("You guessed wrong number");
    
}
// console.log(randomNumber);