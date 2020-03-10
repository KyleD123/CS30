// Terrain
// Kyle D
// March 9th, 2020

let rectTime = 0;
let newWidth = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  fill(random(50,100),random(25,200),random(0,255));
}
function checkKey() {
  if (keyIsDown(RIGHT_ARROW)) {
    newWidth += 3;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    newWidth -= 3;
  }
}


function generateTerrain() {
  let tallest = height;
  let tallestX = 0;

  for (let i = 0; i < width; i += newWidth) {
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(i, height, i + newWidth, rectHeight);
    rectTime += 0.025;
    if (rectHeight < tallest) {
      tallest = rectHeight;
      tallestX = i;
    }
  }
  line(tallestX,tallest,tallestX,tallest - 25);
  triangle(tallestX ,tallest - 25,tallestX + 15, tallest - 15,tallestX, tallest - 7.5);
}


function draw() {
  rectTime = 10;
  background(220);
  generateTerrain();
  print(newWidth);
  if (frameCount % 2 === 0) {
    checkKey();
  }
  if (newWidth <= 1) {
    newWidth = 4;
  }
}
