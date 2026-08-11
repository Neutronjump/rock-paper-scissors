// Randomly chooses rock, paper or scissors string
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice;
    if (randomNum === 0) computerChoice = "rock";
    else if (randomNum === 1) computerChoice = "paper";
    else computerChoice = "scissors";
    return computerChoice;
}

// Assigns humanChoice to user input
function getHumanChoice() {
    let humanChoice = prompt("Please enter either rock, paper, or scissors:");
    return humanChoice;
}


