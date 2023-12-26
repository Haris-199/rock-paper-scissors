function getComputerChoice() {
    const ran = Math.random();
    if (0 <= ran && ran < 1 / 3) return "Rock";
    if (1 / 3 <= ran && ran < 2 / 3) return "Paper";
    if (2 / 3 <= ran && ran < 1) return "Scissors";
}

function enumerate(choice) {
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return playRound(playerSelection, getComputerChoice());
    }

    const playerChoice = enumerate(playerSelection);
    const computerChoice = enumerate(computerSelection);
    const difference = playerChoice - computerChoice;

    switch (difference) {
        case 1:
            console.log(`You won this round! ${playerSelection} beats ${computerSelection}.`)
            return 1;
        case -1:
            console.log(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
            return 0;
        case 2:
            console.log(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
            return 0;
        case -2:
            console.log(`You won this round! ${playerSelection} beats ${computerSelection}.`);
            return 1;
    }
}

const buttonsDiv = document.querySelector("#playerChoiceBtns");
let playerWins = 0;
let computerWins = 0;

buttonsDiv.addEventListener("click", (event) => {
    let playerSelection;
    let computerSelection = getComputerChoice();

    switch (event.target.id) {
        case "rockBtn":
            playerSelection = "rock";
            console.log("rbtn");
            break;
        case "paperBtn":
            playerSelection = "paper";
            console.log("pbtn");
            break;
        case "scissorsBtn":
            playerSelection = "scissors";
            console.log("sbtn");
            break;
        default:
            console.log("ERROR");
    }

    const playerWon = playRound(playerSelection, computerSelection);

    if (playerWon) playerWins++;
    else computerWins++;

    if (playerWins === 5) {
        console.log("You won the game!")
    }
    if (computerWins === 5) {
        console.log("You lost the game!")
    }
});