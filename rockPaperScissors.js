function getComputerChoice(){
    let number = Math.floor(Math.random() * 100) //generate random number
    if ((number % 2 == 0) && (number % 3 == 0)){ //if divisible by 2 and 3. choose rock
        return 'rock';    
    }
    else if (number % 2 == 0){ //if only divisible by 2, choose scissors
        return 'scissors';
    }
    else { // if only divisible by 3 or 1, choose paper
        return 'paper';
    }
}


function playRound( playerSelection, ComputerSelection ) {
    playerSelection = playerSelection.toLowerCase(); //make user input case insensitive
    ComputerSelection = ComputerSelection.toLowerCase();
 
    if (playerSelection == ComputerSelection ){
        return "It's a Tie";
    }
    
    else if ((playerSelection == 'rock' && ComputerSelection == 'scissors') || //If player wins, (the conditionals are all  3 scenarios in which the player wins)
        (playerSelection == 'paper' && ComputerSelection == 'rock') || 
         (playerSelection == 'scissors' && ComputerSelection == 'paper')
    ){
        return ("You Win! " + playerSelection + " beats " + ComputerSelection); //Return "You Win!"" Message

    }
    else if ((ComputerSelection == 'rock' && playerSelection == 'scissors') || //If computer wins, (the conditionals are all  3 scenarios in which the computer wins)
    (ComputerSelection == 'paper' && playerSelection == 'rock') || 
     (ComputerSelection == 'scissors' && playerSelection == 'paper')) {
        return ("You Lose! " + ComputerSelection + " beats " + playerSelection); //Return "You Lose!" message
    }
}

function playGame(){ //a function to play a 5-round game
    let playerScore = 0;
    let computerScore = 0;

    
    for (let i = 1; i < 6; i++){ //For 5 iterations...
    let playerSelection = (prompt('Round '+ i + '\nWhat do you pick? (rock, paper, scissors) : ')).toLowerCase() //get the user's choice as input and the computer's choice, make case insensitive
    const ComputerSelection = (getComputerChoice()).toLowerCase();

    console.log("Player picked "+playerSelection+"\nComputer Picked "+ComputerSelection); //console.log to Show which pieces were selected
    roundResult = playRound(playerSelection, ComputerSelection) //store the result of the round to a variable

   if (roundResult ==  ("You Win! " + playerSelection + " beats " + ComputerSelection)){ //if player won the round, increment the player's score by 1
    playerScore ++;
   }
   else if (roundResult ==  ("You Lose! " + ComputerSelection + " beats " + playerSelection)){ //if the cpu won the round, increment the computer's score by 1
    computerScore ++;
   }

   console.log(roundResult) //Show the result of the round
   console.log("Player Score: " + playerScore); //Show both scores
   console.log("Computer Score: " + computerScore);
   
}

//use the scores after 5 iterations to determine who won and console log the appropriate message
if (playerScore > computerScore ){
    console.log("You win the game!")
}
else if (playerScore == computerScore){
    console.log("The game is a tie! ")
}
else {
    console.log("Computer wins the game!")
}
}


playGame();

