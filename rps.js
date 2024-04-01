let player_choice = 0;
const btn_choices = document.querySelectorAll(".choice");

btn_choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        switch(choice.textContent) {
            case "Rock":
                player_choice = 1;
                break;
            case "Paper":
                player_choice = 2;
                break;
            case "Scissors":
                player_choice = 3;
                break;
        }
    });
});


function playGame(player_choice) {
    let player_score = 0;
    let computer_score = 0;
    let round_result = 0;

    for (let i = 0; i < nGames; i++) {
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
