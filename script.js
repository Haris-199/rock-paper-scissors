const buttonsDiv = document.getElementById("playerChoiceBtns");

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const playerChoiceText = document.createTextNode("");
const computerChoiceText = document.createTextNode("");

const roundResult = document.getElementById("roundResult");
const gameResult = document.getElementById("gameResult");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerWins = 0;
let computerWins = 0;

const pScore = document.createTextNode(playerWins);
const cScore = document.createTextNode(computerWins);

playerScore.appendChild(pScore);
computerScore.appendChild(cScore);

buttonsDiv.addEventListener("click", (event) => {
    if (playerWins >= 5 || computerWins >= 5) return;

    let playerSelection = getPlayerChoice(event.target.id);
    let computerSelection = getComputerChoice();

    if (playerSelection == undefined) return;
    
    while (computerSelection === playerSelection)
        computerSelection = getComputerChoice();

    playerChoiceText.nodeValue = playerSelection;
    computerChoiceText.nodeValue = computerSelection;

    playerChoice.appendChild(playerChoiceText);
    computerChoice.appendChild(computerChoiceText);
    
    const playerWon = playRound(playerSelection, computerSelection);
    
    if (playerWon) playerWins++;
    else computerWins++;

    pScore.nodeValue = playerWins;
    cScore.nodeValue = computerWins;

    if (playerWins === 5) gameResult.textContent = "You won the game!";
    if (computerWins === 5) gameResult.textContent = "You lost the game.";
});

function getPlayerChoice(id) {
    switch (id) {
        case "rockBtn":
            return "Rock";
        case "paperBtn":
            return "Paper";
        case "scissorsBtn":
            return "Scissors";
        default:
            console.log("ERROR");
    }
}

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

    const playerChoice = enumerate(playerSelection);
    const computerChoice = enumerate(computerSelection);
    const difference = playerChoice - computerChoice;

    switch (difference) {
        case 1:
            roundResult.textContent = `You won this round! ${playerSelection} beats ${computerSelection}.`;
            return 1;
        case -1:
            roundResult.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}.`;
            return 0;
        case 2:
            roundResult.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}.`;
            return 0;
        case -2:
            roundResult.textContent = `You won this round! ${playerSelection} beats ${computerSelection}.`;
            return 1;
    }
}