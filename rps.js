playGame(5);

function playGame(nGames) {
    if (nGames < 0) {
        alert("Invalid number of games");
        return;
    }
    let player_score = 0;
    let ai_score = 0;
    let round_result = 0;

    for (let i = 0; i < nGames; i++) {
        let player_choice =  getPlayerChoice();
        let computer_choice = getComputerChoice();
        round_result = playRound(player_choice,computer_choice);
        if (round_result == 1) {
            ++player_score;
        } else if (round_result == -1) {
            ++ai_score;
        } else{
            continue;
        }
        alert("Round: " + (i+1) + " out of " + nGames + "\nPlayer: " + player_score + " AI: " + ai_score)
    }
    
    if (player_score > ai_score) {
        alert("Player wins the game!");
    } else if (player_score < ai_score) {
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

        let userChoice = prompt("1) Rock 2) Paper 3) Scissors\n Please enter your choice (1-3)");
        userChoice = userChoice.toLowerCase();
        wordCheck = ["r","p","s"].indexOf(userChoice[0]);
        numCheck = ["1","2","3"].indexOf(userChoice[0]);


        if ( wordCheck >= 0 || numCheck >= 0 ) {
            validInput = true;
            input = Number(userChoice[0]);
        } 
        else {
            alert("Please provide a valid input.\n");
        }
        
        // Convert userChoice word to number
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
        alert("\nThis round is a tie!\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return 0
    } else if ([-2,1].includes(round_result)) {
        alert("\nYou win the round!\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return 1;
    } else {
        alert("\nYou lose the round!\n"+ "Player: " + choices[player_choice - 1] + "\nAI: " + choices[computer_choice-1]);
        return -1;
    } 
}
