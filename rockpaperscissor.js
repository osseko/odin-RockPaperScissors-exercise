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
// if else if each result of rock paper scissor

const min = 1
const max = 3
let choices = ["rock", "paper", "scissors"]
let compCh = choices[Math.floor(Math.random() * choices.length)];



humanScore = 0;

computerScore = 0;

//let win = "rock" > "scissor" && "paper" > "rock" && "scissor" > "paper";
//let isWin = "rock" > "scissor" && "paper" < "rock";


console.log("rock, paper, scissor")





  
  for(let i = 0; i < 5; i++){
function playRound(){

    // let comp = getComputerChoice();
    // let huma = getHumanChoice();
    // variable inside function gives different result;
     let humaCh = prompt("rock, paper, scissors").toLocaleLowerCase();
 
 

     let result;

    
     if (compCh === humaCh){
          result = "draw"
     }    else if (compCh === "rock" && humaCh === "scissors"){
          result = "Computer wins"
     }    else if (compCh === "scissors" && humaCh === "paper"){
          result = "Computer wins"
     }    else if (compCh === "paper" && humaCh === "rock"){
          result = "Computer wins"
     }    else if (humaCh === "rock" && compCh === "scissors"){
          result = "Human wins"
     }    else if (humaCh === "scissors" && compCh === "paper"){
          result = "Human wins"
     }    else if (humaCh === "paper" && compCh === "rock"){
          result = "Human wins"
     }    

    console.log ("computer =", compCh, "human =", humaCh);
   
    return result;
   
}
  }

console.log("playround", playRound())



 




