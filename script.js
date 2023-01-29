
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum <= 0.33){
        console.log(rock);
        return rock;
    } else if (randomNum <= 0.66 && randomNum > 0.33) {
        console.log(paper);
        return paper;
    } else {
        console.log(scissors);
        return scissors;
    }

}


let playerWin;
let computerWin;



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == paper) {
        console.log("You Lose! Paper beats Rock");
        return playerLostRock;
        playerWin = false;
        computerWin = true;
        return computerWin;
    } else if (playerSelection == "rock" && computerSelection == rock){
        console.log("It is a Draw");
        playerWin = false;
        computerWin = false;
        return draw;
    } else if (playerSelection == "rock" && computerSelection == scissors){
        console.log("You Win! Rock always beats Scissors");
        return playerWonRock;
        playerWin = true;
        computerWin = false;
        return playerWin;
    }  else if (playerSelection == "paper" && computerSelection == scissors){
        console.log("You Lose! Scissors always slice paper");
        return playerLostPaper;
        playerWin = false;
        computerWin = true;
        return computerWin;
    } else if (playerSelection == "paper" && computerSelection == rock){
        console.log("You Win! Paper always beats rock");
        
        return playerWonPaper;
        playerWin = true;
        computerWin = false;
        return playerWin;
    } else if (playerSelection == "paper" && computerSelection == paper){
        console.log("It's a Draw");
        playerWin = false;
        computerWin = false;
        return draw;
    } else if (playerSelection == "scissors" && computerSelection == rock){
        console.log("You Lost! You broke scissors on against rock");
        return playerLostScissors;
        computerWin = true;
        playerWin = false;
        return computerWin;
    } else if (playerSelection == "scissors" && computerSelection == scissors){
        console.log("What a Draw");
        playerWin = false;
        computerWin = false;
        return draw;
    } else if (playerSelection == "scissors" && computerSelection == paper){
        console.log("You Won! What a slice againt paper!");
        return playerWonScissors;
        return playerWin;

    } 
}

let draw = "It is a Draw";
let playerLostRock = "You Lose! Paper beats Rock";
let playerWonRock = "You Win! Rock always beats Scissors";
let playerLostPaper = "You lost with paper";
let playerWonPaper = "You won with paper";
let playerLostScissors = "You lost with scissors";
let playerWonScissors = "You won with scissors";
let computerSelection = getComputerChoice();
let playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i<5; i++){

        getComputerChoice();
        playerSelection = prompt("What you choose?");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection,computerSelection);
        if(playerWonPaper || playerWonRock || playerWonScissors){
            playerScore++;
            console.log("Player score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (computerWin){
            computerScore++;
            console.log("Player score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        }
    }
}
game();


