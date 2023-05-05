//ACCESS #score, .hole
const score = document.querySelector(".score");
const field = document.querySelector(".field");
const holes = [...document.querySelectorAll(".hole")];
//use spread operator to turn holes into an array
//querySelectorAll - ALL was necessary to select multiple holes!

//FUNCTIONS TO:
//random mole in hole generator, timer
function runGame() {
  //generate mole in random hole
  //Math.random for 1-9
  let randomHole = Math.ceil(Math.random() * holes.length);
  console.log(randomHole);
  let hole = holes[randomHole];

  //create mole image from images file
  const mole = document.createElement("img");
  mole.className = "mole";
  mole.src = "images/mole.png";
  //How do I append to a single hole???
  // hole = holes[randomHole]
  //field.removeChild(hole);
  //hole.appendChild(mole);
  field.replaceChild(mole, hole);
}

runGame();

//end game
//restart game

//EVENTLISTENER
//click - run mole appears function, update score (and make sound?)
