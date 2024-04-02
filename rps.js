// To do: add error handling (i.e, player_choice)

const input_nGames = document.querySelector('input');
const modal_startGame = document.querySelector('#modal_start');
const modal_endGame = document.querySelector('#modal_end');
const modal_endText = document.querySelector('#end-game')
const playButton = document.querySelector('#play-game');
const playAgain = document.querySelector('#play-again');

const round_element = document.querySelector("#round-element");
const player_element = document.querySelector("#player-element");
const computer_element = document.querySelector("#computer-element");
const game_state = document.querySelector("#game-state");

let nGames = 1;
let nRounds = 0;
let player_score = 0;
let computer_score = 0;
let round_result = 0;
let player_choice = 0;

toggleModal(modal_endGame);

playButton.addEventListener('click', () => {
    nGames = Number(input_nGames.value);
    round_element.textContent = `Round: ${nRounds+1} out of ${nGames}`;
    toggleModal(modal_startGame);
});

playAgain.addEventListener('click', () => {
    toggleModal(modal_endGame);
    toggleModal(modal_startGame);
    player_score = 0;
    computer_score = 0;
    round_result = 0;
    player_choice = 0;
    nGames = 1;
    nRounds = 0;
    round_element.textContent = `Round: ${nRounds+1} out of ${nGames}`;
    player_element.textContent = `Player: 0`;
    computer_element.textContent = `AI: 0`;
    game_state.textContent = "START GAME";

});

function toggleModal(modalDiv) {
    const backdrop = document.querySelector('#backdrop');
    if (modalDiv.style.display === 'none') {
        modalDiv.style.display = "block";
        backdrop.style.display = "block";
    } else {
        modalDiv.style.display = "none";
        backdrop.style.display = "none";
    }
}

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
        if (nRounds < nGames-1) {
            let computer_choice = getComputerChoice();
            round_result = playRound(player_choice,computer_choice);
            if (round_result == 1) {
                ++player_score;
            } else if (round_result == -1) {
                ++computer_score;
            }
            ++nRounds;
        } else {
            announceGameover();
        }

        round_element.textContent = `Round: ${nRounds+1} out of ${nGames}`;
        player_element.textContent = `Player: ${player_score}`;
        computer_element.textContent = `AI: ${computer_score}`;

    });
});

function announceGameover() {
    if (player_score > computer_score) {
        modal_endText.textContent = "You win the game!";
        toggleModal(modal_endGame)
    } else if (player_score < computer_score) {
        modal_endText.textContent = "You lose the game!";
        toggleModal(modal_endGame)
    } else {
        modal_endText.textContent = "The game is a tie!";
        toggleModal(modal_endGame)
    }
}

function getComputerChoice() {
    return  Math.floor(Math.random() * 3) + 1 ;
}

function playRound(player_choice, computer_choice) {
    let choices = ["Rock","Paper","Scissors"]
    let round_result =   player_choice - computer_choice; 
    // Win if round_result = -2 or 1 because RPS choices are integers 1,2,3 such that Paper vs. Rock is 2-1 = 1
    if ( round_result  == 0 ) {
        game_state.textContent = `This round is a tie!\nPlayer:  ${choices[player_choice - 1]}\nAI: ${choices[computer_choice-1]}`;
        return 0
    } else if ([-2,1].includes(round_result)) {
        game_state.textContent = `You win this round!\nPlayer:  ${choices[player_choice - 1]}\nAI: ${choices[computer_choice-1]}`;
        return 1;
    } else {
        game_state.textContent = `You lose this round!\nPlayer:  ${choices[player_choice - 1]}\nAI: ${choices[computer_choice-1]}`;
        return -1;
    } 
}
