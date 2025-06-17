let mouseVec;
let midVec;
let anglea;
let vsum;

function setup() {
  createCanvas(400, 400);
  mouseVec = createVector(0,0);
  midVec = createVector(width/2, height/2);
  anglea = 0;
  vsum = 0;
}

function draw() {
  background(220);
  mouseVec.set(mouseX, mouseY);
  vsum = midVec.add(mouseVec);
  anglea = midVec.anglebetween(vsum);
  line(midVec.x, midVec.y, mouseVec.x, mouseVec.y);
  text(anglea.toString() ,300,300);

}
