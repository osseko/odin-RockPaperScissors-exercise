console.log("Hello World!")
console.log("rock, paper, scissor")

const buttons = document.querySelectorAll("button");

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");



let humanScore = 1;

let computerScore = 1;


function playRound(comPick, playerPick){
    
     //const isWin = "rock" > "scissors" && "scissors" > "paper" && "paper" > "rock";

     if (comPick === playerPick){
                    return console.log("player", playerPick,"com", comPick, "draw"),
                         "draw" 

          }    else if (comPick === "rock" && playerPick === "scissors"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "computerScore"),
                         "com point", computerScore++;
                                   
          }    else if (comPick === "scissors" && playerPick === "paper"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "computerScore"), 
                         "com point", computerScore++;
                                       
          }    else if (comPick === "paper" && playerPick === "rock"){
                    return console.log("com", comPick, 
                                        "player", playerPick, "computerScore"), 
                         "com point", computerScore++;
                                        
          }    else if (playerPick === "rock" && comPick === "scissors"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"),
                         "player point", humanScore++;
                                                           
          }    else if (playerPick === "scissors" && comPick === "paper"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"),
                         "player point", humanScore++;
                                        

          }    else if (playerPick === "paper" && comPick === "rock"){
                    return console.log("player", playerPick,
                                        "com", comPick, "humanScore"), 
                         "player point", humanScore++;
                                  
          }    
     
          
}

function getComputerChoice(computer){
     let choices = ["rock", "paper", "scissors"]
     return computer = choices[Math.floor(Math.random() * choices.length)];
}



function playGame(){   
          
          let final;
          
          if (humanScore === 5){
               console.log("You are winner");
          } else if (computerScore === 5){
               console.log("try again");
          }

          return final;

     }




const clicker = buttons.forEach((button) => {

     button.addEventListener("click", () => {
          const clickedOn = button.value;
          
          const comChoice = getComputerChoice();
         
          const gameRound = playRound(comChoice, clickedOn);

          console.log("play", gameRound);
          const finalResult = playGame();
          console.log(finalResult);

     });
});

    





