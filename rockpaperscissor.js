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




humanScore = 0;

computerScore = 0;

//let win = "rock" > "scissor" && "paper" > "rock" && "scissor" > "paper";
//let isWin = "rock" > "scissor" && "paper" < "rock";



function getComputerChoice(computerSelection){
     let choices = ["rock", "paper", "scissors"]
     return computerSelection = choices[Math.floor(Math.random() * choices.length)];
     // return "rock";
}



// function getHumanChoice(){
//     return prompt("rock, paper, scissors").toLocaleLowerCase(); 
     
// }




for (let i = 0; i < 5; i++){
function playRound(){
    
     let result;

    if (computerSelection === humanSelection){
          result =  "draw"
     }    else if (computerSelection === "rock" && humanSelection === "scissors"){
          result = "Computer wins"
         
     }    else if (computerSelection === "scissors" && humanSelection === "paper"){
          result = "Computer wins"
          
     }    else if (computerSelection === "paper" && humanSelection === "rock"){
          result = "Computer wins"
          
     }    else if (humanSelection === "rock" && computerSelection === "scissors"){
          result = "Human wins"
          
     }    else if (humanSelection === "scissors" && computerSelection === "paper"){
          result = "Human wins"
          
     }    else if (humanSelection === "paper" && computerSelection === "rock"){
          result = "Human wins"
     }    
    
   return result;
     
}

let humanSelection = prompt("rock, paper, scissors").toLocaleLowerCase();
const computerSelection = getComputerChoice();


playRound(computerSelection, humanSelection)



console.log("computer = ", computerSelection, "human = ", humanSelection);
console.log ("result", playRound());
}




// playRound(humanSelection, computerSelection);



//for(let i = 0; i < 5; i++){
//     humaCh;
//}


     //let result;

    
//      if (computerChoose() === player){
//           result = "draw"
//      }    else if (computerChoose() === "rock" && player === "scissors"){
//           result = "Computer wins"
         
//      }    else if (computerChoose() === "scissors" && player === "paper"){
//           result = "Computer wins"
          
//      }    else if (computerChoose() === "paper" && player === "rock"){
//           result = "Computer wins"
          
//      }    else if (player === "rock" && computerChoose() === "scissors"){
//           result = "Human wins"
          
//      }    else if (player === "scissors" && computerChoose() === "paper"){
//           result = "Human wins"
          
//      }    else if (player === "paper" && computerChoose() === "rock"){
//           result = "Human wins"
          
//      }    

//     console.log ("computer =", computerChoose(), "human =", player);
   
    //return result;

//function playRound(){

 

//}



//console.log(playRound())



 




