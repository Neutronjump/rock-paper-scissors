playGame()

// Randomly chooses rock, paper or scissors string
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice;
    if (randomNum === 0) computerChoice = 'rock';
    else if (randomNum === 1) computerChoice = 'paper';
    else computerChoice = 'scissors';
    return computerChoice;
}

// Starts the game, then resets it on win/loss 
function playGame() {
    const gameMessage = document.querySelector(".result-message");
    const roundScore = document.querySelector(".round-score");
    const buttonDiv = document.querySelector('.button-container');
    let computerScore = 0;
    let humanScore = 0;

    displayStartInfo();

    buttonDiv.addEventListener("click", getHumanChoice);

// Shows starting info
    function displayStartInfo() {
        gameMessage.textContent = "Pick either rock, paper, or scissors, and I'll do the same.  Let's do this.";
        roundScore.textContent = "Your score: " + humanScore + "\nMy score: " + computerScore;
    }

// Gets the user's choice and starts the round
    function getHumanChoice(e) {
        if (e.target.tagName === "BUTTON") {
            const humanChoice = e.target.textContent;

            playRound(humanChoice, getComputerChoice())
        }

    }  

// Determines a winner based on the highest score
    function checkForWinner() {
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                gameMessage.textContent = 'Congrats! You beat me.';
                computerScore === 1? roundScore.textContent = 'You had ' + humanScore + ' points, and I had ' + computerScore + ' point.'
                :
                roundScore.textContent = 'You had ' + humanScore + ' points, and I had ' + computerScore + ' points.';
                resetGame();
            }
            else if (humanScore < computerScore) {
                gameMessage.textContent = 'Ha! I beat you!';
                humanScore === 1? roundScore.textContent = 'You had ' + humanScore + ' point, and I had ' + computerScore + ' points.'
                :
                roundScore.textContent = 'You had ' + humanScore + ' points and I had ' + computerScore + ' points.';
                resetGame();          
            }
    }
}

// Resets the scores
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        gameMessage.textContent = "Let's play again!";
    }

// Plays a round, gives a point to the winner, and displays a message
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === 'rock' && computerChoice === 'rock') {
            gameMessage.textContent = 'Rock and rock is a tie!';
        }
        else if (humanChoice === 'paper' && computerChoice === 'paper') {
            gameMessage.textContent = 'Paper and paper is a tie!';
        }
        else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            gameMessage.textContent = 'Scissors and scissors is a tie!';
        }
        else if (humanChoice === 'rock' && computerChoice === 'paper') {
            gameMessage.textContent = 'Point for me! Paper covers rock.';
            computerScore += 1;
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            gameMessage.textContent = 'Oh man, point for you. Rock smashes scissors!';
            humanScore += 1;
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            gameMessage.textContent = 'Point for you! Paper covers rock.';
            humanScore += 1;
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            gameMessage.textContent = 'My point, scissors cut paper!';
            computerScore += 1;
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            gameMessage.textContent = 'That\'s a point for me! Rock smashes scissors.';
            computerScore += 1;
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            gameMessage.textContent = 'That\'s a point for you! Scissors cut paper.';
            humanScore += 1;
        }
        else {
            gameMessage.textContent = 'I think something went wrong, let\'s just try again.';
        }
        roundScore.textContent = "Your score: " + humanScore + "\nMy score: " + computerScore;
        checkForWinner();
        return;
    }
}
