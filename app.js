// Create a variable for each players (Player 1 => 0; Player 2 => 1)
var activePlayer = 0;

// Create a variable for saving scores
var score = [0, 0];

// Create a variable for saving scores for each round
var roundScore = 0;

// Create a variable for dice (randomise between 1 - 6)
var dice = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-0").innerHTML = "<em>Yes!</em>";

// Preparing to start the program
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Dice : " + dice);
