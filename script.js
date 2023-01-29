
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


let compWin = false;
let playerWin = false;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == paper) {

        console.log("You Lose! Paper beats Rock");

        computerScore++;
        compWin = true;
        return playerLostRock;
        
    } else if (playerSelection == "rock" && computerSelection == rock){

        console.log("It is a Draw");
        return draw;

    } else if (playerSelection == "rock" && computerSelection == scissors){

        console.log("You Win! Rock always beats Scissors");

        playerScore++;
        playerWin = true;

        return playerWonRock;

    }  else if (playerSelection == "paper" && computerSelection == scissors){

        console.log("You Lose! Scissors always slice paper");

        computerScore++;
        compWin = true;
        return playerLostPaper;

    } else if (playerSelection == "paper" && computerSelection == rock){

        console.log("You Win! Paper always beats rock");

        playerScore++;
        playerWin = true;
        return playerWonPaper;

    } else if (playerSelection == "paper" && computerSelection == paper){

        console.log("It's a Draw");
        
        return draw;

    } else if (playerSelection == "scissors" && computerSelection == rock){

        console.log("You Lost! You broke scissors on against rock");

        computerScore++;
        compWin = true;
        return playerLostScissors;
        
    } else if (playerSelection == "scissors" && computerSelection == scissors){

        console.log("What a Draw");
        
        return draw;

    } else if (playerSelection == "scissors" && computerSelection == paper){

        console.log("You Won! What a slice againt paper!");

        playerScore++;
        playerWin = true;
        return playerWonScissors;
        

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
let n = 5;

function game(){
    for (let i = 0; i< n; i++){

        getComputerChoice();
        playerSelection = prompt("What you choose?");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection,computerSelection);
        if(playerWin){
            console.log("Player score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (compWin){
            console.log("Player score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } 
    }
}
game();


