// Terrain
// Kyle D
// March 9th, 2020

let rectTime = 0;
let newWidth = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  
  
}

function keyPressed(){
  if ( keyCode === RIGHT_ARROW) {
    newWidth += 3;
  }
  else if ( keyCode === LEFT_ARROW) {
    newWidth -= 3;
    if (newWidth <= 0)
    newWidth += 1;
  }
}


function generateTerrain() {
  
  for (let i = 0; i < width; i += newWidth) {
    rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(i, height, i + newWidth, rectHeight);
    rectTime += 0.02;
    
  }
}

function draw() {
  rectTime = 10;
  background(220);
  generateTerrain();

}
