// Main logic
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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

// Plays a round and gives points and a little message based on whoever won
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Rock and rock is a tie!");
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Paper and paper is a tie!");
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Scissors and scissors is a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Point for me! Paper covers rock.");
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Oh man, point for you. Rock smashes scissors!");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Point for you! Paper covers rock.");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("My point, scissors cut paper!");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("That's a point for me! Rock smashes scissors.");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Thats a point for you! Scissors cut paper.");
        humanScore += 1;
    }
    else {
        console.log("I think something went wrong, let's just try again.");
    }
    return;
}


