// Create a variable for each players (Player 1 => 0; Player 2 => 1)
var activePlayer = 0;

// Create a variable for saving scores
var score = [0, 0];

// Create a variable for saving scores for each round
var roundScore = 0;

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-0").innerHTML = "<em>Yes!</em>";

// Preparing to start the program
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
