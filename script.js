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
        return "human";
    }
    
    else if(humanChoice==="paper" && computerChoice==="rock") {
        console.log("You won! Paper beats Rock");
        return "human";
    }

    else if(humanChoice==="scissor" && computerChoice==="paper") {
        console.log("You won! Scissor beats Paper");
        return "human";
    }
    else if(computerChoice==="rock" && humanChoice==="scissor") {
        console.log("You lost! Rock beats Scissor");
        return "computer";
    }
    
    else if(computerChoice==="paper" && humanChoice==="rock") {
        console.log("You lost! Paper beats Rock");
        return "computer";
    }

    else if(computerChoice==="scissor" && humanChoice==="paper") {
        console.log("You lost! Scissor beats Paper");
        return "computer";
    }
    else {
        console.log("It's a draw!")
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    console.log("Rock-paper-scissors\n\n");

    for(let i=1;i<=5;i++) {
        console.log("Round",i,": \n");
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();  

        let winner = playRound(humanSelection, computerSelection);
        if(winner==="human"){
            humanScore++;
        }
        else if(winner==="computer") {
            computerScore++;
        }
    }

    console.log("\n");
    if(humanScore > computerScore) {
        console.log("You are the winner!");
    }
    else if(humanScore < computerScore) {
        console.log("Better luck next time :)");
    }
    else {
        console.log("Entire game ended in a draw.");
    }
    
}

playGame()

