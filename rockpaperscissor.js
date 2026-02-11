console.log("Hello World!")
// get random value from three choices (rock paper scissors)
// allow player to choose from three values (rock paper scissors)
// set winning conditions (rock wins scissors; scissors wins paper; paper wins rock)
// assign value to 'rock, paper, scissor' to use with math.random
// function to return specific preferred integer
// getComputerChoice function to output rock paper scissor
// math.random functions include decimals in result; even if 'whole' integers are displayed
// maybe array----- use array for math.random

const min = 1
const max = 3
let choices = ["rock", "paper", "scissors"]


console.log("1 = rock, 2 = paper, 3 = scissor")

//function getComputerChoice(){
    //return Math.floor(Math.random() * (max - min +1) + 1 )
    //return Math.round(Math.random())
//}

function getComputerChoice(){
        
    return choices[Math.floor(Math.random() * choices.length)];
    
}





console.log("getcomputerchoice", getComputerChoice())



//console.log(Math.round(getComputerChoice()))