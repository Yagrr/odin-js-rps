let games = prompt("Welcome to Rock Paper Scissors\nPlease enter the number of games you would like to play.");
while (true) {
    playGame(games);
    games = prompt("Welcome back to Rock Paper Scissors\nPlease enter the number of games you would like to play.");
}

function playGame(nGames) {
    if (nGames < 0) {
        alert("Invalid number of games");
        return;
    }
    let player_score = 0;
    let computer_score = 0;
    let round_result = 0;

    for (let i = 0; i < nGames; i++) {
        let player_choice =  getPlayerChoice();
        let computer_choice = getComputerChoice();
        round_result = playRound(player_choice,computer_choice);
        if (round_result == 1) {
            ++player_score;
        } else if (round_result == -1) {
            ++computer_score;
        } else {
            ++nGames;
        }
        alert("Round: " + (i+1) + " out of " + nGames + "\nPlayer: " + player_score + " AI: " + computer_score)
    }
    
    if (player_score > computer_score) {
        alert("Player wins the game!");
    } else if (player_score < computer_score) {
        alert("Player loses the game!");
    } else {
        alert("The game is a tie!");
    }
}


function getPlayerChoice() {
    let validInput = false;
    let wordCheck = numCheck = -1;
    let input = null;

    while (validInput === false) {

        let playerChoice = prompt("1) Rock 2) Paper 3) Scissors\n Please enter your choice (1-3)");
        playerChoice = userChoice.toLowerCase();
        wordCheck = ["r","p","s"].indexOf(playerChoice[0]);
        numCheck = ["1","2","3"].indexOf(playerChoice[0]);


        if ( wordCheck >= 0 || numCheck >= 0 ) {
            validInput = true;
            input = Number(playerChoice[0]);
        } 
        else {
            alert("Please provide a valid input.\n");
        }
        
        // Convert playerChoice word to number for easy interpretation
        if ( wordCheck >= 0 ) {
            input = wordCheck + 1 ; 
        }
    }
    return input;
}


function getComputerChoice() {
    return  Math.floor(Math.random() * 3) + 1 ;
}

function playRound(player_choice, computer_choice) {
    let choices = ["Rock","Paper","Scissors"]
    let round_result =   player_choice - computer_choice; 
    // Win if round_result = -2 or 1 because RPS choices are integers 1,2,3. Make 3x3 table to see results
    if ( round_result  == 0 ) {
        alert("\nThis round is a tie! (Adding one more round!)\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return 0
    } else if ([-2,1].includes(round_result)) {
        alert("\nYou win the round!\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return 1;
    } else {
        alert("\nYou lose the round!\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return -1;
    } 
}
