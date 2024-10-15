function getComputerChoice () {
    let compChoice = Math.random() * 100;
    if(compChoice <= 33 && compChoice >= 0) {
        return "rock";
    }
    else if(compChoice >= 67) {
        return "scissor";
    }
    else {
        return "paper";
    }
}
