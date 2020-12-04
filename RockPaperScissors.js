/*
* The RockPaperScissors program implements an application that
* plays rock paper scissors with the user.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-4 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.
const prompt = require('prompt-sync')({sigint: true});
const options = 3;

///////////////////////////////////////////////////////////////////////////////

function resultCalculations(playerChoice) {
  const cpuChoice = Math.floor(Math.random() * options + 1);
  var stringCpuChoice;
  var result;

  // Converting the cpu's choice from int to string for text.
  if (cpuChoice == 1) {
    stringCpuChoice = "ROCK";
  } else if (cpuChoice == 2) {
    stringCpuChoice = "PAPER";
  } else {
    stringCpuChoice = "SCISSORS";
  }
  
  console.log("CPU chose: ", stringCpuChoice);

  // Determining who won.
  if (stringCpuChoice == "ROCK" && playerChoice == "PAPER") {
    result = "WON";
  } else if (stringCpuChoice == "PAPER" && playerChoice == "SCISSORS") {
    result = "WON";
  } else if (stringCpuChoice == "SCISSORS" && playerChoice == "ROCK") {
    result = "WON";
  } else if (stringCpuChoice == playerChoice) {
    result = "TIED";
  } else {
    result = "LOST";
  }

  return(result);
}

///////////////////////////////////////////////////////////////////////////////

try {
  // Gets user input.
  var playerChoice = prompt("Pick one of the following [ROCK] [PAPER] "
                            + "[SCISSORS]: ");
  console.log();
  console.log("You chose: ", playerChoice)

  // Catching if the user inputs bob.
  if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice
      != "SCISSORS") {
    console.log();
    console.log("ERROR: Invalid Input");
  } else {
    // Getting the result.
    var result = resultCalculations(playerChoice);

    // Outputs the result.
    console.log();
    console.log("YOU ", result);
  }

} catch (err) {
  console.log();
  console.log("ERROR: Invalid Input");
}
