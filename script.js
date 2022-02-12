function computerPlay(){
    const picks = ["Rock", "Paper", "Scissors"];
     let ans = Math.floor(Math.random() * 3);
     return picks[ans];
}

function caps(str) {
    let cap = str.slice(0,1).toUpperCase();
    let word = str.slice(1);
    return (cap + word);
}

function playRound(playerSelection, computerSelection){
    const player = caps(playerSelection.toLowerCase());
    if (player === computerSelection) {
        console.log("It is a tie");
        return (playRound(prompt("Enter your pick again!"), computerPlay()));
    }
    else if ((player === "Rock" && computerSelection === "Scissors") || (player === "Paper" && computerSelection === "Rock") || (player === "Scissors" && computerSelection === "Paper")) {
        console.log(`You Win! ${player} beats ${computerSelection}`);
        return 1;
        }
    else {
        console.log(`You Lose! ${computerSelection} beats ${player}`);
        return -1;
    }
}

function game(){
    let input;
    let playerCount = 0;
    let computerCount = 0;
    for (i = 0; i < 5; i++){
        input = prompt("Enter your pick: ");
        if (playRound(input, computerPlay()) > 0) {
            playerCount += 1;
        }
        else {
            computerCount += 1;
        }
        }
    if (playerCount > computerCount) {
        console.log("You are the winner!");
    }
    else{
        console.log("Computer is the winner!");
    }
}