let cr = 0;
let cb = 0;
let cg = 0;
let c;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  c = color(map(mouseX,0,400,0,255),0,map(mouseY,0,400,0,255));
  fill(c);
  ellipse(mouseX,mouseY,20,20);
}
