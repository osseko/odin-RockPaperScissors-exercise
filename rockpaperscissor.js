console.log("Hello World!")
console.log("rock, paper, scissor")
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
// function will get called multiple times
// restart - review parameters
// changed getHumanChoice from regular function to arrow function let const var
// for loop (function) or function (for loop)
// simple scoring, only returning humanscore, no calls for computer score, returns winner result
// good enough for now


//let win = "rock" > "scissor" && "paper" > "rock" && "scissor" > "paper";
//let isWin = "rock" > "scissor" && "paper" < "rock";

let computerScore;
let humanScore;



function getComputerChoice(computerSelection){
     let choices = ["rock", "paper", "scissors"]
     return computerSelection = choices[Math.floor(Math.random() * choices.length)];
     // return "rock";
}



// function getHumanChoice(){
//     return prompt("rock, paper, scissors").toLocaleLowerCase(); 
     
// }

//let score = 0;

//const roundResult = [];
let mainScore = 0;
for (let i = 0; i < 5; i++){


     function playRound(){
     
          

          if (computerSelection === humanSelection){
                    console.log ("draw")

               }    else if (computerSelection === "rock" && humanSelection === "scissors"){
                    computerScore++;
                    console.log("com point");
               
               }    else if (computerSelection === "scissors" && humanSelection === "paper"){
                    computerScore++;
                    console.log("com point");
                    
               }    else if (computerSelection === "paper" && humanSelection === "rock"){
                    computerScore++;
                    console.log("com point");
                    
               }    else if (humanSelection === "rock" && computerSelection === "scissors"){
                    mainScore++;
                    console.log("human point");
                   
                    
               }    else if (humanSelection === "scissors" && computerSelection === "paper"){
                    mainScore++;
                    console.log("human point");
                    

               }    else if (humanSelection === "paper" && computerSelection === "rock"){
                    mainScore++;
                    console.log("human point");
                   
               }    
     
          return mainScore;
          

         
          
     }

     let humanSelection = prompt("rock, paper, scissors").toLocaleLowerCase();
     const computerSelection = getComputerChoice();


     playRound(computerSelection, humanSelection);



     console.log("computer = ", computerSelection, "human = ", humanSelection);
     console.log ("total player score = ", mainScore);
    
     // roundResult.push("round", i + 1);
     // console.log (roundResult);

}


function playGame(){   
     
     let final;
     
     if (game >= 3){
         console.log("You are winner");
     } else if (game < 3){
          console.log("try again");
     }

     return final;

}

const game = playRound();
const finalResult = playGame();

//console.log ("playgame",finalResult);





