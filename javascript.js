function getComputerChoice(){

    let choice = "computer's choice"
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        choice = "Rock";
        return choice;
    }
    else if (randomNumber === 2) {
        choice = "Paper";
        return choice;
    }
    else
        choice = "Scissors";
        return choice;
}

getComputerChoice();
console.log(getComputerChoice())