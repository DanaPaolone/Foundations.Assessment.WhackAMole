//ACCESS #score, .hole
let scoreBoard = document.querySelector("span");
const field = document.querySelector(".field");
const holes = [...document.querySelectorAll(".hole")];
//use spread operator to turn holes into an array
//querySelectorAll - ALL was necessary to select multiple holes!
let score = 0;
const sound = new Audio("images/boing.mp3");
//FUNCTIONS TO:
//random mole in hole generator, timer, sound?
function runGame() {
  //generate mole in random hole
  let randomHole = Math.ceil(Math.random() * holes.length);
  //console.log(randomHole);
  let hole = holes[randomHole];
  let timer = "null";
  //create mole image from images file
  const mole = document.createElement("img");
  mole.className = "mole";
  mole.src = "images/mole.png";
  field.replaceChild(mole, hole);

  //click even function includes reset hole, decrement timer, sound
  mole.addEventListener("click", function () {
    score += 10;
    scoreBoard.textContent = score;
    sound.play();
    clearTimeout;
    newTimer(timer);
    field.replaceChild(hole, mole);
    runGame();
    2000 - 10;
  });

  //set timer to start
  timer = setTimeout(() => {
    field.replaceChild(hole, mole);
    runGame();
  }, 2000);
}

runGame();

//end game
//restart game

//EVENTLISTENER
//click - run mole appears function, update score (and make sound?)
