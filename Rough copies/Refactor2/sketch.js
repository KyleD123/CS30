//Black and White Target
const SIZE = 400;
const END = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (let i = SIZE; i >= END; i -= END) {// draws the bullseye
    ellipse(width/2, height/2, i, i);
  }
}