let score = 0;

// random choice for coomputer //
function getComputerChoice(){

    let computerChoice = "computer's choice"
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

// choice of the player //
function getPlayerChoice(){
    let playerChoice = prompt("rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock"){
        return playerChoice;
    }
    else if (playerChoice === "paper"){
        return playerChoice;
    }
    else if (playerChoice === "scissors"){
        return playerChoice;
    }
    else
        return alert("UNACCEPTABLE!");

}

// winning message and updateing score //
function win(winner, loser){
    console.log(`${winner} beats ${loser}. You win!`)
    score++;
}

// losing message and updating score //
function lose(loser, winner){
    console.log(`${loser} is beaten by ${winner}. You lose!`)
    score--;
}

// play a single round //
function playRound(player, computer){
    if (player == "rock" && computer == "scissors"){
        win(player, computer);
    }
    else if (player == "paper" && computer == "rock"){
        win(player, computer);
    }
    else if (player == "scissors" && computer == "rock"){
        win(player, computer);
    }

    else if (player == "rock" && computer == "paper"){
        lose(player, computer);
    }
    else if (player == "paper" && computer == "scissors"){
        lose(player, computer);
    }
    else if (player == "scissors" && computer == "rock"){
        lose(player, computer);
    }

    else if (player == computer){
        return alert("TIE!");
    }

    else
        return;
}

// play the game for 5 rounds in total //
function playGame(){
    
    for (let i = 0; i < 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(score);
    }
}

playGame();