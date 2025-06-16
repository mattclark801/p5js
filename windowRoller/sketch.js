let pos = createVector(0, 0);
let cr = 0;
let cb = 0;
let cg = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  pos.x = mouseX;
  pos.y = mouseY;
  cr = map(mouseX,0,400,0,255);
  cg = calculatecg();
  cb = map(mouseY,0,400,0,255);
  c = color(cr,cg,cb);
  fill(c);
  ellipse(mouseX,mouseY,20,20);
}
