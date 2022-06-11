console.log("Welcome to Rock, Paper, Scissors!");
   
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let idx = Math.ceil(Math.random() * 101) % 3;
    let selection = options[idx];
    return selection;
};


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Choose your weapon!").toLowerCase();

    computerSelection = computerPlay().toLowerCase();

    switch (playerSelection) {

        case 'rock':
        
        if (computerSelection == "paper") {
            return -1;
        } else if (computerSelection == "rock") {
            return 0;
        } else if (computerSelection == "scissors") {
            return 1;
        }
        
        case 'paper':
            
        if (computerSelection == 'rock') {
            return 1;
        } else if (computerSelection == 'paper') {
            return 0;
        } else if (computerSelection == 'scissors') {
            return -1;
        }

        case 'scissors':

        if (computerSelection == 'rock') {
            return -1;
        } else if (computerSelection == 'paper') {
            return 1;
        } else if (computerSelection == 'scissors') {
            return 0;
        }
    };
};

function game() {

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {

        let thisRound = playRound()
        
        if (thisRound == 1) {
            playerScore++;
            console.log("You won this round!")
        } else if (thisRound == -1) {
            computerScore++;
            console.log("You lost this round!")
        } else if (thisRound == 0) {
            console.log("Draw!")
        }
    }

    if (playerScore == 3) {
        return "You win!"
    } else if (computerScore == 3) {
        return "You lose!"
    }
};