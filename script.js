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
