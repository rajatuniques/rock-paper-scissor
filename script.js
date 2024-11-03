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
    const result = document.querySelector('div.result');
    humanChoice = String(humanChoice).toLowerCase();
    computerChoice = String(computerChoice)
    
    if (humanChoice==="rock" && computerChoice==="scissors") {
        result.textContent = "You won! Rock beats Scissors";
    }
    
    else if(humanChoice==="paper" && computerChoice==="rock") {
        result.textContent = "You won! Paper beats Rock";
    }

    else if(humanChoice==="scissors" && computerChoice==="paper") {
        result.textContent = "You won! Scissors beats Paper";
    }
    else if(computerChoice==="rock" && humanChoice==="scissors") {
        result.textContent = "You lost! Rock beats Scissors";
    }
    
    else if(computerChoice==="paper" && humanChoice==="rock") {
        result.textContent = "You lost! Paper beats Rock";
    }

    else if(computerChoice==="scissors" && humanChoice==="paper") {
        result.textContent = "You lost! Scissors beats Paper";
    }
    else {
        result.textContent = "It's a draw!";
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

