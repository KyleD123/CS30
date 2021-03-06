// Cubic disarray

const PADDING = 60;
let gridSpacing = 20;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  border();
  drawGrid();
}

function drawGrid(){
  for (let x = gridSpacing/2 + PADDING; x < width - PADDING; x += gridSpacing){
    for (let y = gridSpacing/2 + PADDING; y < height - PADDING; y += gridSpacing){
      rect(x,y,gridSpacing,gridSpacing);
    }
  }
}

function border() {
  strokeWeight(15);
  rect(width/2, height/2, width, height);
  strokeWeight(2);
}