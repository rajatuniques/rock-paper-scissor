const result = document.querySelector('div.result');

function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 100) + 1;

    if(compChoice <= 33 && compChoice >= 1) {
        return "rock";
    }
    else if(compChoice >= 67) {
        return "scissors";
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
           humanChoice === "scissors"
        ){
            return humanChoice;
        } 
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = String(humanChoice).toLowerCase();
    computerChoice = String(computerChoice)
    
    if (humanChoice==="rock" && computerChoice==="scissors") {
        console.log("You won! Rock beats Scissors");
        //return "human";
    }
    
    else if(humanChoice==="paper" && computerChoice==="rock") {
        console.log("You won! Paper beats Rock");
        //return "human";
    }

    else if(humanChoice==="scissors" && computerChoice==="paper") {
        console.log("You won! Scissors beats Paper");
        //return "human";
    }
    else if(computerChoice==="rock" && humanChoice==="scissors") {
        console.log("You lost! Rock beats Scissors");
        //return "computer";
    }
    
    else if(computerChoice==="paper" && humanChoice==="rock") {
        console.log("You lost! Paper beats Rock");
        //return "computer";
    }

    else if(computerChoice==="scissors" && humanChoice==="paper") {
        console.log("You lost! Scissors beats Paper");
        //return "computer";
    }
    else {
        console.log("It's a draw!")
    }
}

function playGame () {
    const rock = document.querySelector('button.rock');
    const paper = document.querySelector('button.paper');
    const scissors = document.querySelector('button.scissors');

    rock.addEventListener('click', (e) => {
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener('click', (e) => {
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener('click', (e) => {
        playRound("scissors", getComputerChoice());
    });

    
}

playGame()

