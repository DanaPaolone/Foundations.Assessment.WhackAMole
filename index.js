//ACCESS #score, .hole
let scoreBoard = document.querySelector("span");
const restartBtn = document.querySelector("#restart");
const field = document.querySelector(".field");
const holes = [...document.querySelectorAll(".hole")];
const result = document.querySelector("p");
//use spread operator to turn holes into an array
//querySelectorAll - ALL was necessary to select multiple holes!

let clickCount = 10;
let score = 0;
const sound = new Audio("images/boing.mp3");

//FUNCTIONS TO:
//random mole in hole generator, timer, sound?
function runGame() {
  //generate mole in random hole
  let randomHole = Math.ceil(Math.random() * holes.length);
  let hole = holes[randomHole];

  let timer = "null";

  const mole = document.createElement("img");
  mole.className = "mole";
  mole.src = "images/mole.png";
  field.replaceChild(mole, hole);

  //click even function includes reset hole, decrement timer, sound
  mole.addEventListener("click", function () {
    sound.play();

    score += 1;
    scoreBoard.textContent = score;

    clickCount--;
    if (clickCount === 1) {
      result = `You finished with a score of ${score}`;
    }
    clearTimeout;
    newTimer(timer);
    field.replaceChild(hole, mole);
    runGame();
    500;
  });

  //set timer to start
  timer = setTimeout(() => {
    field.replaceChild(hole, mole);
    runGame();
  }, 1500);
}

runGame();

//end game - Ha!  It's ending at 5 clicks!  WHY???
//restart game
restartBtn.addEventListener("click", function () {
  score = 0;
  runGame();
});
