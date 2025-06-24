/*
This p5.js sketch will let a user pick
a color in rgb space while only moving a mouse
cursor in xy space.
game ideas: give the player a target color to match
and a timer, a scoring system and an end condition
etc.. in other words: make it a game

idea: we could use as many poles as we want for rotating around
*/

// declare variables
let cr; // red color component
let cg; // green color component
let cb; // blue color component
let vecMid; // rotational axis
let vecMouse; // mouse position
let mouseHeading; // angle from "x axis" to mouse position
let countRevolutions; // number of full revolutions
let lastHeading; // heading in previous frame
let totalHeading; // total accumulated heading
let targetColor; // target color to match
let tolerance; // how close the player needs to get to the target color
let gameState; // current state of the game (e.g., "playing", "won", "lost")
let score; // player's score
let timer; // game timer
let startTime; // time when the game started
let gameDuration; // total duration of the game
let highScore; // highest score achieved


function setup() {
  createCanvas(400, 400);
  vecMid = createVector(width/2, height/2);
  vecMouse = createVector(mouseX, mouseY);
  cr = 0;
  cg = 0;
  cb = 0;
  countRevolutions = 0;
  lastHeading = 0;
  totalHeading = 0;
}

function draw() {
  background(220);
  vecMouse.set(mouseX, mouseY);
  mouseHeading = p5.Vector.sub(vecMouse, vecMid).heading();
  if (mouseHeading < 0) {
    mouseHeading += TWO_PI;
  }
  if (mouseHeading - lastHeading > PI) {
    countRevolutions--;
  }
  if (mouseHeading - lastHeading < -PI) {
    countRevolutions++;
  }
  totalHeading = mouseHeading + countRevolutions * TWO_PI;
  lastHeading = mouseHeading;
  ellipse(vecMid.x, vecMid.y, 10, 10);
  ellipse (vecMouse.x, vecMouse.y, 10, 10);
  text("angle: " + totalHeading, 10, height - 10);
  text("revolutions: " + countRevolutions, 10, height - 25);



}