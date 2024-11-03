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
const body = document.querySelector('body');
const human_score = document.querySelector('span.human_score');
const computer_score = document.querySelector('span.computer_score');

let current_human_score = 0;
let current_computer_score = 0;

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector('div.result');
    humanChoice = String(humanChoice).toLowerCase();
    computerChoice = String(computerChoice)
    
    
    if (humanChoice==="rock" && computerChoice==="scissors") {
        result.textContent = "You won! Rock beats Scissors";
        current_human_score++;
        human_score.textContent = String(current_human_score);
    }
    
    else if(humanChoice==="paper" && computerChoice==="rock") {
        result.textContent = "You won! Paper beats Rock";
        current_human_score++;
        human_score.textContent = String(current_human_score);
    }

    else if(humanChoice==="scissors" && computerChoice==="paper") {
        result.textContent = "You won! Scissors beats Paper";
        current_human_score++;
        human_score.textContent = String(current_human_score);
    }
    else if(computerChoice==="rock" && humanChoice==="scissors") {
        result.textContent = "You lost! Rock beats Scissors";
        current_computer_score++;
        computer_score.textContent = String(current_computer_score);
    }
    
    else if(computerChoice==="paper" && humanChoice==="rock") {
        result.textContent = "You lost! Paper beats Rock";
        current_computer_score++;
        computer_score.textContent = String(current_computer_score);
    }

    else if(computerChoice==="scissors" && humanChoice==="paper") {
        result.textContent = "You lost! Scissors beats Paper";
        current_computer_score++;
        computer_score.textContent = String(current_computer_score);
    }
    else {
        result.textContent = "It's a draw!";
    }

    // this section of function will declare final winner
    if(current_human_score === 5) {
        const winner = document.createElement('div');
        winner.classList.add("winner")
        winner.textContent = "You are the winner!";
        document.body.appendChild(winner);
    }

    if(current_computer_score === 5) {
        const winner = document.createElement('div');
        winner.classList.add("winner")
        winner.textContent = "Better luck next time";
        document.body.appendChild(winner);
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

playGame();

