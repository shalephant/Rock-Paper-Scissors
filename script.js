
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum <= 0.33){
        return rock;
    } else if (randomNum <= 0.66 && randomNum > 0.33) {
        return paper;
    } else {
        return scissors;
    }

}


let playerScore = 0;
let computerScore = 0;
let compWin = false;
let playerWin = false;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == paper) {

        console.log("You Lose! Paper beats Rock");
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        compWin = true;
        return playerLostRock;
        
    } else if (playerSelection == "rock" && computerSelection == rock){

        console.log("It is a Draw");
        result.textContent = "It is a Draw";
        return draw;

    } else if (playerSelection == "rock" && computerSelection == scissors){

        console.log("You Win! Rock always beats Scissors");
        result.textContent = "You Win! Rock always beats Scissors";
        playerScore++;
        playerWin = true;

        return playerWonRock;

    }  else if (playerSelection == "paper" && computerSelection == scissors){

        console.log("You Lose! Scissors always slice paper");
        result.textContent = "You Lose! Scissors always slice paper";
        computerScore++;
        compWin = true;
        return playerLostPaper;

    } else if (playerSelection == "paper" && computerSelection == rock){

        console.log("You Win! Paper always beats rock");
        result.textContent = "You Win! Paper always beats rock";
        playerScore++;
        playerWin = true;
        return playerWonPaper;

    } else if (playerSelection == "paper" && computerSelection == paper){

        console.log("It's a Draw");
        result.textContent = "It's a Draw";
        return draw;

    } else if (playerSelection == "scissors" && computerSelection == rock){

        console.log("You Lost! You broke scissors on against rock");
        result.textContent = "You Lost! You broke scissors on against rock";
        computerScore++;
        compWin = true;
        return playerLostScissors;
        
    } else if (playerSelection == "scissors" && computerSelection == scissors){

        console.log("What a Draw");
        result.textContent = "What a Draw";
        return draw;

    } else if (playerSelection == "scissors" && computerSelection == paper){

        console.log("You Won! What a slice againt paper!");
        result.textContent = "You Won! What a slice againt paper!";
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
let playerSelection;

function game(){
    

        
        computerSelection = getComputerChoice();
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
    if(computerScore == playerScore){
        console.log("Game ended draw");
    } else if (computerScore > playerScore){
        console.log("You lost buddy, better luck next time");
    } else {
        console.log("What a win, Congrats");
    }


const container = document.querySelector('div');
const result = document.createElement('p');
const score = document.createElement('p');



const chooseRock = document.querySelector('#chooseRock');
chooseRock.addEventListener('click', function (e) {
    computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    container.appendChild(result);
    score.textContent = "Player score: " + playerScore + "\nComputer Score: " + computerScore;
    container.appendChild(score);
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore>computerScore){
            result.textContent = "Congrats! You won the game";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
        if (playerScore<computerScore){
            result.textContent = "You lost. Good luck next time";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
    }
});

const choosePap = document.querySelector('#choosePap');
choosePap.addEventListener('click', function (e) {
    computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    container.appendChild(result);
    score.textContent = "Player score: " + playerScore + "\nComputer Score: " + computerScore;
    container.appendChild(score);
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore>computerScore){
            result.textContent = "Congrats! You won the game";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
        if (playerScore<computerScore){
            result.textContent = "You lost. Good luck next time";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
    }
});

const chooseScis = document.querySelector('#chooseScis');
chooseScis.addEventListener('click', function (e) {
    computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    container.appendChild(result);
    score.textContent = "Player score: " + playerScore + "\nComputer Score: " + computerScore;
    container.appendChild(score);
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore>computerScore){
            result.textContent = "Congrats! You won the game";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
        if (playerScore<computerScore){
            result.textContent = "You lost. Good luck next time";
            container.appendChild(result);
            playerScore = 0;
            computerScore = 0;
        }
    }
});

if (playerScore == 5 || computerScore == 5) {
    if (playerScore>computerScore){
        result.textContent = "Congrats! You won the game";
        container.appendChild(result);
        playerScore = 0;
        computerScore = 0;
        
    }
    if (playerScore<computerScore){
        result.textContent = "You lost. Good luck next time";
        container.appendChild(result);
        
    }
}