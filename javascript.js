let playerScore = 0;
let computerScore = 0;

// random choice for computer //
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (randomNumber === 2) {
        computerChoice = "paper";
        return computerChoice;
    }
    else
        computerChoice = "scissors";
        return computerChoice;

    
}

function playRound(player, computer){
    if (player == "rock" && computer == "scissors"){
        return playerScore += 1;
    }
    else if (player == "paper" && computer == "rock"){
        return playerScore += 1;
    }
    else if (player == "scissors" && computer == "rock"){
        return playerScore += 1;
    }
    else if (player == "rock" && computer == "paper"){
        return computerScore += 1;
    }
    else if (player == "paper" && computer == "scissors"){
        return computerScore += 1;
    }
    else if (player == "scissors" && computer == "rock"){
        return computerScore += 1;
    }
    else if (player == computer){
        return console.log("TIE!");
    }
    else
        return;
}

function updateScore(playerSc, computerSc){                     // PROBLEM: Displays a new line every time.
    const scoreBoard = document.querySelector(".scoreBoard");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = `Player: ${playerSc} VS Computer: ${computerSc}`;

    scoreBoard.appendChild(content);

}

document.querySelector("#btn-rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    updateScore(playerScore, computerScore);
});

document.querySelector("#btn-paper").addEventListener("click", function(){
    playRound("paper", getComputerChoice());
    updateScore(playerScore, computerScore);
});

document.querySelector("#btn-scissors").addEventListener("click", function(){
    playRound("paper", getComputerChoice());
    updateScore(playerScore, computerScore);
});