let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let playerButtons = document.querySelectorAll('.playerB');
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlert = document.querySelector("#end-alert");
const endCredit = document.querySelector('#end-credit');
const returnBtn = document.querySelector('#retry-btn');
const results = document.querySelector('.result-container');

window.onload = animateLogo();

function animateLogo(){
    let slideIndex = 0;
    slideLogo();

    function slideLogo(){
        let logos = document.getElementsByClassName('logo');
        for(let i = 0; i < logos.length; i++){
            logos[i].classList.remove('visible');
            logos[i].classList.add('hidden');
        }
        slideIndex++;
        if(slideIndex > logos.length){
            slideIndex = logos.length;
            logos[slideIndex -1].classList.remove('hidden');
            logos[slideIndex -1].classList.add('visible');
            return;
        }
        logos[slideIndex - 1].classList.remove('hidden');
        logos[slideIndex - 1].classList.add('visible');
        setTimeout(slideLogo, 1000);
    }
}

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id.toLowerCase();

        playRound(playerSelection, computerSelection);

        if(playerScore === 5 || computerScore === 5){
            declareWinner();
        }
    });
});

let gameOptions = ['Rock', 'Paper', 'Scissors'];

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                displayResults("That's a Tie");
            }

            else if(computerSelection == "paper"){
                computerScore++;
                keepComputerScore();
                displayResults(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
            }

            else if(computerSelection == "scissors"){
                playerScore++;
                keepPlayerScore();
                displayResults(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            }

            else{
                console.log("Wrong Choice! Are you sure we are playing the same game?");
                return "Wrong Choice!";
            }

            break;

        case "paper":
            if(computerSelection == "rock"){
                playerScore++;
                keepPlayerScore();
                displayResults(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            }

            else if(computerSelection == "paper"){
                displayResults("That's a Tie");
            }

            else if(computerSelection == "scissors"){
                computerScore++;
                keepComputerScore();
                displayResults(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
            }

            else{
                console.log("Wrong Choice! Are you sure we are playing the same game?");
                return "Wrong Choice!";
            }

            break;

        case "scissors":
            if(computerSelection == "rock"){
                computerScore++;
                keepComputerScore();
                displayResults(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
            }

            else if(computerSelection == "paper"){
                playerScore++;
                keepPlayerScore();
                displayResults(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            }

            else if(computerSelection == "scissors"){
                displayResults("That's a Tie");
            }

            else{
                console.log("Wrong Choice! Are you sure we are playing the same game?");
                return "Wrong Choice!";
            }

            break;

        default:
            console.log("Wrong Choice!");
            return "Wrong Choice!";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str){
    results.animate([{opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    results.textContent = str;
}

function keepComputerScore(){
    let computerScoreNo = document.querySelector('#computer-score');
    computerScoreNo.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    computerScoreNo.textContent = computerScore;
}

function keepPlayerScore(){
    let playerScoreNo = document.querySelector('#player-score');
    playerScoreNo.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    playerScoreNo.textContent = playerScore;
}

function declareWinner(){
    displayContent();

    if(playerScore > computerScore){
        endCredit.textContent = "You Win!";
        returnBtn.innerText = "Play Again?";
    }
    else{
        endCredit.textContent = "You Lose!";
        returnBtn.innerText = "Try Again?";
    }
}

function displayContent(){
    main.classList.remove('visible');
    main.classList.add('hidden');
    endAlert.classList.remove('hidden');
    endAlert.classList.add('visible');

    returnBtn.addEventListener('click', () => {
        main.classList.remove('hidden');
        main.classList.add('visible');
        endAlert.classList.remove('visible');
        endAlert.classList.add('hidden');
        resetGame();
    });
}

function resetGame(){
    results.textContent = "";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
}