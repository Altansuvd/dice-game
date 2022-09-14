// Global variable for each players...
// Show whether the game is over
var isNewGame;

// ...active players' turn
var activePlayer;

// ...scores for each players
var score;

// ...current scores that is saved by each active player
var roundScore;

// This variable shows the dice image from DOM
var diceDom = document.querySelector(".dice");

//Start the game
initGame();

// function for restarting the game
function initGame() {
  //Game restarted
  isNewGame = true;

  // Create a variable for each players (Player 1 => 0; Player 2 => 1)
  activePlayer = 0;

  // Create a variable for saving scores
  score = [0, 0];

  // Create a variable for saving scores for each round
  roundScore = 0;

  /* <div class="player-score" id="score-0">43</div> */
  // document.querySelector("#score-0").textContent = dice;
  // document.querySelector("#score-0").innerHTML = "<em>Yes!</em>";

  // Preparing to start the program
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // Show the players' name
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// addEventListener for ROLL DICE button
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // Randomise the dice numbers between 1 - 6
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Show the dice image on the browser
    diceDom.style.display = "block";

    // Show the dice image corresponding to the number of dice it rolled
    diceDom.src = "dice-" + diceNumber + ".png";

    // Add the dice number to the active player's score when they roll the dice (effective until the dice rolls number 1)
    if (diceNumber !== 1) {
      // Add the dice number to the active player's score when the dice shows not 1
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // Rolled dice number 1, switch the player's turn
      switchToNextPlayer();
    }
  }
});

// addEventListener for HOLD button
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Add saved scores to the global number

    // if (activePlayer === 0) {
    //   score[0] = score[0] + roundScore;
    // } else {
    //   score[1] = score[1] + roundScore;
    // }

    score[activePlayer] = score[activePlayer] + roundScore;

    // Change the score number on the browser
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    // Test whether the player won the game (score higher than 100)
    if (score[activePlayer] >= 10) {
      // Game over
      isNewGame = false;

      // Change the Player's name to Winner!!!
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
      // Switch the player's turn
      switchToNextPlayer();
    }
  }
});

// function for switching the players' turn
function switchToNextPlayer() {
  // Make the player's score back to 0
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Switch the players' turn
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // if (activePlayer === 0) {
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0
  // }

  // Switch the red dot to the other player
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Temporary disappear the dice
  diceDom.style.display = "none";
}

// addEventListener for NEW GAME button
document.querySelector(".btn-new").addEventListener("click", initGame);
