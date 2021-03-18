let gameOptions = ['Rock', 'Paper', 'Scissors'];  

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

game();

//a single round of Rock Paper Scissors
//two parameters - the playerSelection and computerSelection
//return a string that declares the winner of the round 
//like so: "You Lose! Paper beats Rock"
//case insensitive 
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                console.log("That's a Tie!\nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "It's a Tie! \nComputer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "paper"){
                computerScore++;
                console.log("You Lose! Paper beats Rock \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "scissors"){
                playerScore++;
                console.log("You Win! Rock beats Scissors \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else{
                console.log("Wrong Choice! Are you sure we are playing the same game?");
                return "Wrong Choice!";
            }

            break;

        case "paper":
            if(computerSelection == "rock"){
                playerScore++;
                console.log("You Win! Paper beats Rock \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "paper"){
                console.log("It's a Tie! \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "It's a Tie! \nComputer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "scissors"){
                computerScore++;
                console.log("You Lose! Scissors beats Paper \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else{
                console.log("Wrong Choice! Are you sure we are playing the same game?");
                return "Wrong Choice!";
            }

            break;

        case "scissors":
            if(computerSelection == "rock"){
                computerScore++;
                console.log("You Lose! Rock beats Scissors \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "paper"){
                playerScore++;
                console.log("You Win! Scissors beats Paper \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
            }

            else if(computerSelection == "scissors"){
                console.log("It's a Tie \nComputer Score: " + computerScore + "\nYour Score: " + playerScore);
                return "It's a Tie \nComputer Score: " + computerScore + "\nYour Score: " + playerScore;
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

//5 rounds
//keeps score and reports a winner or loser at the end.
function game(){
    //let player;
    //let computer;
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        userInput();
    }
    console.log(WhoIsWinner());

    function WhoIsWinner(){
        if(playerScore === computerScore){
            console.log("Your Score: " + playerScore + "\nComputer Score: " + computerScore + "\nThat's a Tie Game!");
        }
        else if(playerScore > computerScore){
            console.log("Your Score: " + playerScore + "\nComputer Score: " + computerScore + "\nYou Win!");
        }
        else{
            console.log("Your Score: " + playerScore + "\nComputer Score: " + computerScore + "\nYou Lose!");
        }
    }
}

function userInput(){
    playerSelection = prompt('Rock, Paper or Scissors?', 'Rock');
    if((playerSelection.toLowerCase() == 'rock') || (playerSelection.toLowerCase() == 'paper') || (playerSelection.toLowerCase() == 'scissors')){
        console.log(playRound(playerSelection, computerSelection));
    }
    else{
        console.log('Wrong Choice! Are you sure we play the same game!');
        userInput();
    }
}
