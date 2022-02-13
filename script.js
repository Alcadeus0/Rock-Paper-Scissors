function computerPlay(){
    const picks = ["Rock", "Paper", "Scissors"];
     let ans = Math.floor(Math.random() * 3);
     return picks[ans];
}
const player = document.querySelector('#player')
const bot = document.querySelector('#bot')

let playerScore = 0;
let botScore = 0;

function playRound(playerSelection){
    computerSelection = computerPlay();
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore += 1;
        player.textContent = playerScore;
        }
    else {
        botScore += 1;
        bot.textContent = botScore;
    }
    if (playerScore === 5 || botScore === 5){
        result();
    }
}

function result() {
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    const div = document.createElement('div');
    if (playerScore === 5){
        div.textContent = "You Win!";
    }
    else {
        div.textContent = "You Lose!";
    }
    div.setAttribute('style','color: coral','fontSize: 25px');
    const result = document.querySelector('.result');
    result.appendChild(div);
    refresh()
}

function refresh(){
    const btn = document.createElement('button');
    btn.classList.add('buttons');
    btn.textContent = "Try Again?"
    btn.addEventListener('click', () =>{
        playerScore = 0;
        botScore = 0;
        player.textContent = 0;
        bot.textContent = 0;
        div.remove();
        btn.remove();
        document.getElementById("myBtn").disabled = false;
        document.getElementById("myBtn").disabled = false;
        document.getElementById("myBtn").disabled = false;
    });
    const result = document.querySelector('.result');
    result.append(btn);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        playRound(button.id);
    });
});