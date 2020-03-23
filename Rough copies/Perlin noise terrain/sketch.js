// Terrain
// Kyle D
// March 9th, 2020

let rectTime = 0;
let newWidth = 10;
let offsetAmount = 0.02;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(random(50,100),random(25,200),random(0,255));
}

function draw() {
  rectTime = 10 + offsetAmount;
  background(220);
  generateTerrain();
  print(newWidth);
  offsetAmount += 0.02;
  // if (frameCount % 2 === 0) {
  //   checkKey();
  // }
  // if (newWidth <= 1) {
  //   newWidth = 4;
  //}
  
}
// function checkKey() {
//   if (keyIsDown(RIGHT_ARROW)) {
//     newWidth += 3;
//   }
//   else if (keyIsDown(LEFT_ARROW)) {
//     newWidth -= 3;
//   }
  
//}
function generateTerrain() {
  let tallest = height;
  let tallestX = 0;

  for (let i = 0; i < width; i += newWidth) {
    rectMode(CORNERS);
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(i, height, i + newWidth, rectHeight);
    rectTime += 0.015;
    if (rectHeight < tallest) {
      tallest = rectHeight;
      tallestX = i;
    }
  }
  line(tallestX,tallest,tallestX,tallest - 25);
  triangle(tallestX ,tallest - 25,tallestX + 15, tallest - 15,tallestX, tallest - 7.5);

}



