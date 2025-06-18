/*
This p5.js sketch will let a user pick
a color in rgb space while only moving a mouse
cursor in xy space.
game ideas: give the player a target color to match
and a timer, a scoring system and an end condition
etc.. in other words: make it a game
*/

// declare variables
let cr; // red color component
let cg; // green color component
let cb; // blue color component
let vecMid; // rotational axis
let vecMouse; // mouse position


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(width/2, height/2, 10, 10);


}
