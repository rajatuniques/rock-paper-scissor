function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 100) + 1;

    if(compChoice <= 33 && compChoice >= 1) {
        return "rock";
    }
    else if(compChoice >= 67) {
        return "scissor";
    }
    else {
        return "paper";
    }
}

function getHumanChoice () {
    let humanChoice;
    while (true) {
        humanChoice = prompt("What's your choice : ", 'rock');
        if(humanChoice === "rock" ||
           humanChoice === "paper" ||
           humanChoice === "scissor"
        ){
            return humanChoice;
        } 
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = String(humanChoice).toLowerCase();
    computerChoice = String(computerChoice)
    
    if (humanChoice==="rock" && computerChoice==="scissor") {
        console.log("You won! Rock beats Scissor");
        humanScore++;
    }
    
    else if(humanChoice==="paper" && computerChoice==="rock") {
        console.log("You won! Paper beats Rock");
        humanScore++;
    }

    else if(humanChoice==="scissor" && computerChoice==="paper") {
        console.log("You won! Scissor beats Paper");
        humanScore++;
    }
    else if(computerChoice==="rock" && humanChoice==="scissor") {
        console.log("You lost! Rock beats Scissor");
        computerScore++;
    }
    
    else if(computerChoice==="paper" && humanChoice==="rock") {
        console.log("You lost! Paper beats Rock");
        computerScore++;
    }

    else if(computerChoice==="scissor" && humanChoice==="paper") {
        console.log("You lost! Scissor beats Paper");
        computerScore++;
    }
    else {
        console.log("It's a draw!")
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);