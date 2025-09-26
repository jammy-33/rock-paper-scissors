let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.random();
    let choice;
    if (random < 1/3){
        choice = "rock";
    }
    else if (random <2/3){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice; 
}

function getHumanChoice(){
    let choice = window.prompt("rock, paper, scissors?").toLowerCase();
    return choice;
}

function playRound(human, computer){
    if(human==computer){
        roundDraw(computer)
    }else if(human=="rock"){
        if(computer=="paper"){
            roundLose(computer)
        } else{roundWin(computer)}
    }else if(human=="paper"){
        if(computer=="rock"){
            roundWin(computer)
        } else{roundLose(computer)}
    }else {
        if(computer=="rock"){
            roundLose(computer)
        } else(roundWin(computer))
    }
}

function roundDraw(computerChoice){
    console.log("The computer also chose " + computerChoice +"! Play again.");
    console.log("The score is " + userScore.toString() + ":" + computerScore.toString());
    playRound(getHumanChoice(),getComputerChoice());
}

function roundWin(computerChoice){
    console.log("The computer chose " + computerChoice + "! You Win!");
    userScore +=1;
    if(userScore < 3){
        console.log("The score is " + userScore.toString() + ":" + computerScore.toString());
        console.log("Keep going!")
        playRound(getHumanChoice(),getComputerChoice());
    }
    else{
        gameWin();
    }
}

function roundLose(computerChoice){
    console.log("The computer chose " + computerChoice + "! You Lost!");
    computerScore +=1;
    if(computerScore < 3){
        console.log("The score is " + userScore.toString() + ":" + computerScore.toString());
        console.log("Try Again!")
        playRound(getHumanChoice(),getComputerChoice());
    }
    else{
        gameLoss();
    }
}

function gameWin(){
    console.log("You Won! The final score was " + userScore.toString() +":" + computerScore.toString());
}

function gameLoss(){
    console.log("You lost! The final score was " + userScore.toString() + ":" + computerScore.toString());
}

playRound(getHumanChoice(),getComputerChoice());