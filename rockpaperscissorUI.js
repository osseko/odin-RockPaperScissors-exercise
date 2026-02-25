console.log("Hello World!")
console.log("rock, paper, scissor")

const container = document.querySelector("#container")

// rock paper scissor, 
// 
     const rock = document.querySelector("#rock");
     rock.addEventListener("click", () => {
          alert("rock");
     });

     const paper = document.querySelector("#paper");
     paper.addEventListener("click", () =>  {
          alert("paper");
     });

     const scissors = document.querySelector("#scissors");
     scissors.addEventListener("click", () => {
          alert("scissors");
     });



let computerScore;
let humanScore;

function getComputerChoice(computerSelection){
     let choices = ["rock", "paper", "scissors"]
     return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

let mainScore = 0;

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





