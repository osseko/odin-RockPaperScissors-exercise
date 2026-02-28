console.log("Hello World!")
console.log("rock, paper, scissor")

const buttons = document.querySelectorAll("button");

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

const humanChoose = document.getElementById("player");
const computerChoose = document.getElementById("computer");

const humanPoints = document.getElementById("playerScore");
const computerPoints = document.getElementById("computerScore");

const roundResult = document.getElementById("declare");

let humanScore = 0;
let computerScore = 0;



function playRound(comPick, playerPick){
    
     
     if (comPick === playerPick){
                    return console.log("player", playerPick,"com", comPick, "draw"),
                         "draw" 

          }    else if (comPick === "rock" && playerPick === "scissors"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "comScore"),
                         computerScore++;
                                   
          }    else if (comPick === "scissors" && playerPick === "paper"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "comScore"), 
                         computerScore++;
                                       
          }    else if (comPick === "paper" && playerPick === "rock"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "comScore"), 
                         computerScore++;
                                        
          }    else if (playerPick === "rock" && comPick === "scissors"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"),
                         humanScore++;
                                                           
          }    else if (playerPick === "scissors" && comPick === "paper"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"),
                         humanScore++;
                                        

          }    else if (playerPick === "paper" && comPick === "rock"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"), 
                         humanScore++;
                                  
          }    
     
          
}

function getComputerChoice(computer){
     let choices = ["rock", "paper", "scissors"]
     return computer = choices[Math.floor(Math.random() * choices.length)];
}

const clicker = buttons.forEach((button) => {

     button.addEventListener("mousedown", () => {
          const clickedOn = button.value;
          
          const comChoice = getComputerChoice();
         
          const gameRound = playRound(comChoice, clickedOn);

          humanChoose.innerText = "player: " + clickedOn;
          computerChoose.innerText = "computer: " + comChoice;        
     });

     button.addEventListener("mouseup", () => {

          console.log("score", humanScore, computerScore);
          if(humanScore === 5){
               console.log("Player win")
               roundResult.innerText = "results: " + "You Win!"
          } else if (computerScore === 5){
               console.log("try again")
               roundResult.innerText = "results: " + "com wins"
          }
          
          humanPoints.innerText = "score: " + humanScore;
          computerPoints.innerText = "score: " + computerScore;
         


     });
});







