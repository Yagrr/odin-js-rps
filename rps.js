const input_nGames = document.querySelector('input');
const modal_startGame = document.querySelector('#modal-start');
const modal_endGame = document.querySelector('#modal-end');
modal_startGame.style.display = "flex";
modal_endGame.style.display = "none";

const modal_endText = document.querySelector('#end-game')
const playButton = document.querySelector('#play-game');
const playAgain = document.querySelector('#play-again');
const btn_choices = document.querySelectorAll(".choice");

const round_element = document.querySelector("#round-element");
const player_element = document.querySelector("#player-element");
const computer_element = document.querySelector("#computer-element");
const game_state = document.querySelector("#game-state");
const game_choices = document.querySelector("#game-choices");

let nGames = 1;
let nRounds = 0;
let player_score = 0;
let computer_score = 0;
let round_result = 0;
let player_choice = 0;

playButton.addEventListener('click', () => {
    nGames = Number(input_nGames.value);
    toggleModal(modal_startGame);
    updateElements();
    game_state.textContent = "START GAME";
    game_choices.textContent = "_______";
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
});

function toggleModal(modalDiv) {
    const backdrop = document.querySelector('#backdrop');
    if (modalDiv.style.display === "none") {
        modalDiv.style.display = "flex";
        backdrop.style.display = "block";
    } else {
        modalDiv.style.display = "none";
        backdrop.style.display = "none";
    }
}

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
            updateElements();
            ++nRounds;
        } else {
            let computer_choice = getComputerChoice();
            round_result = playRound(player_choice,computer_choice);
            updateElements();
            announceGameover();
        }


    });
});

function updateElements() {
        round_element.textContent = `Round: ${nRounds+1} out of ${nGames}`;
        player_element.textContent = `Player: ${player_score}`;
        computer_element.textContent = `AI: ${computer_score}`;
}

function announceGameover() {
    if (player_score > computer_score) {
        modal_endText.textContent = "You win the game!";
    } else if (player_score < computer_score) {
        modal_endText.textContent = "You lose the game!";
    } else {
        modal_endText.textContent = "The game is a tie!";
    }
    toggleModal(modal_endGame);
}

function getComputerChoice() {
    return  Math.floor(Math.random() * 3) + 1 ;
}

function playRound(player_choice, computer_choice) {
    let choices = ["rock","paper","scissors"]
    let round_result =   player_choice - computer_choice; 
    // Win if round_result = -2 or 1 because RPS choices are integers 1,2,3 such that Paper vs. Rock is 2-1 = 1
    game_choices.textContent = `Player:  ${choices[player_choice - 1]} AI: ${choices[computer_choice-1]}`;
    if ( round_result  == 0 ) {
        game_state.textContent = `This round is a tie!`;
        return 0
    } else if ([-2,1].includes(round_result)) {
        ++player_score;
        game_state.textContent = `You win this round!`;
        return 1;
    } else {
        ++computer_score;
        game_state.textContent = `You lose this round!`;
        return -1;
    } 
}
