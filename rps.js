let validInput = false;
while (validInput === false) {

    let userChoice = prompt("1) Rock 2) Paper 3) Scissors\n Please enter your choice (1-3)");
    if (["1","2","3"].includes(userChoice) === false) {
        alert("Please provide a valid input.\n");
    } else {
        validInput = true;
        let aiChoice = getComputerChoice();
        playRound(Number(userChoice),Number(aiChoice));

    }
}


function getComputerChoice() {
    return  Math.floor(Math.random() * 3) + 1 ;
}

function playRound(player_choice,computer_choice) {
    let choices = ["Rock","Paper","Scissors"]
    // Results
    if (player_choice === computer_choice) {
        alert("\nTie!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
    }

    switch(player_choice) {
        // Rock
        case 1:
            if (computer_choice == 3) {
                alert("\nYou win!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            } else {
                alert("\nYou lose!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            }
        // Paper
        case 2: 
            if (computer_choice == 1) {
                alert("\nYou win!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            } else {
                alert("\nYou lose!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            }
        // Scissors
        default:
            if (computer_choice == 2) {
                alert("\nYou win!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            } else {
                alert("\nYou lose!\n"+ "Player: " + choices[player_choice-1] + "\nAI: " + choices[computer_choice-1]);
                break;
            }
    }

}
