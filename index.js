//ACCESS DOM
let scoreBoard = document.querySelector("span");
const restartBtn = document.querySelector("#restart");
const field = document.querySelector(".field");
const holes = [...document.querySelectorAll(".hole")];
const result = document.querySelector("p");
//use spread operator to turn holes into an array
//querySelectorAll - ALL was necessary to select multiple holes!

let clickCount = 10;
let score = 0;
const sound = new Audio("images/shortBoing.mp3");
//let timer = "null";
//I wanted to set a timer but it seems to be randomly working.  I think, because of a few other issues I've been having, my browser is running too slowly to accomodate the timer.

//FUNCTIONS TO:
function runGame() {
  //generate mole in random hole
  let randomHole = Math.ceil(Math.random() * holes.length);
  let hole = holes[randomHole];

  const mole = document.createElement("img");
  mole.className = "mole";
  mole.src = "images/mole.png";
  field.replaceChild(mole, hole);

  //click even function includes reset hole, decrement timer, sound (should this be outside the runGame()? but I created the mole within this function?)
  mole.addEventListener("click", function () {
    sound.play();

    score += 1;
    scoreBoard.textContent = score;
    console.log("SCORE:" + score);

    clickCount--;
    console.log("CLICKCOUNT:" + clickCount);
    if (clickCount === 0) {
      result.innerText = `You finished with a score of ${score} out of 10!`;
      mole.disabled = true;
      endGame();
      return result;
    }
    //   clearTimeout;
    //   newTimer(timer);

    field.replaceChild(hole, mole);

    runGame();
  });

  //set timer to start
  // timer = setTimeout(() => {
  //   field.replaceChild(hole, mole);
  // runGame();
  // }, 1500);
}

runGame();

//end game
function endGame() {
  mole.stopPropagation();
  // This method should stop an event
}
// restart game
restartBtn.addEventListener("click", function () {
  score = 0;
  clickCount = 10;
  result.innerText = "";
  //I thought runGame() would reset the mole but it doesn't seem to be doing that.
  runGame();
});
