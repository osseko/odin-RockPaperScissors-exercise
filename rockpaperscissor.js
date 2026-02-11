console.log("Hello World!")
// get random value from three choices (rock paper scissors)
// allow player to choose from three values (rock paper scissors)
// set winning conditions (rock wins scissors; scissors wins paper; paper wins rock)
// assign value to 'rock, paper, scissor' to use with math.random
// function to return specific preferred integer
// getComputerChoice function to output rock paper scissor
// math.random functions include decimals in result; even if 'whole' integers are displayed
// maybe array----- use array for math.random
// let x = 'comparison operators <><==....' auto assigns as boole
// maybe function inside function playinside(getcomputerchoice --- gethumanchoice)
// rearrange code

const min = 1
const max = 3
let choices = ["rock", "paper", "scissors"]

let humChoose = prompt("Rock, Paper, Scissor")

humanScore = 0;
computerScore = 0;

let win = "rock" > "scissor" && "paper" > "rock" && "scissor" > "paper";


console.log("1 = rock, 2 = paper, 3 = scissor")

//choiceprompts

//function getComputerChoice(){        
//    return compChoose = choices[Math.floor(Math.random() * choices.length)];
//}
//function getHumanChoice(){      
//    return humChoose;
//}
//choiceprompts
//let comp = getComputerChoice();
//let huma = getHumanChoice();
// global variables inherited down to functions, consistent result
//round
function playRound(){

    // let comp = getComputerChoice();
    // let huma = getHumanChoice();
    // variable inside function gives different result;

    let compCh = choices[Math.floor(Math.random() * choices.length)];
    let humaCH = humChoose;


   if (getComputerChoice() === getHumanChoice()){
        result = "draw";
   }
    
    console.log ("computer =",getComputerChoice(), "human =",getHumanChoice());

    return result;


}

// round


console.log("computer", getComputerChoice())
console.log("Human", getHumanChoice())
console.log("playround", playRound())


