// RollOver
// KyleDoerksen
// Feb 12 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
let colour = 0;
let shade = 0;
let q1 = 255;//q colour
let q2 = 255;//q colour
let q3 = 255;//q colour
let q4 = 255;//q colour
let lightSwitch = false;//for the bottom left light
let lightSwitch2 = false;//for the top left light box
let mC = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}
// This keeps track of the mouse's possition
function stateUpdate() {
  if (mouseX < width / 2 && mouseY < height / 2) {
    state = 1;
    mC = 0;
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {
    state = 2;
    mC = 0;
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    state = 4;
    mC = 0;
  }
  else if (mouseX > width / 2 && mouseY > height / 2) {
    state = 3;
    mC = 0;
  }
}
function mousePressed() {
  if (mouseIsPressed && state === 3) {
    lightSwitch = !lightSwitch;
  }
  if ( mouseIsPressed && state === 1){
    mC += 1;
    lightSwitch2 = !lightSwitch2;
  }
}

function draw() {
  background(220);
  stateUpdate();
  print(state);
  print(lightSwitch2);
  if (state === 1) {
    q1 = 0;
  }
  else {
    q1 += 5;
  }
  if (state === 2) {
    q2 = 0;
  }

  else {
    q2 += 5;
  }
  if (state === 3) {
    q3 = 0;
  }

  else {
    q3 += 5;
  }
  if (state === 4) {
    q4 = 0;
  }

  else {
    q4 += 5;
  }
  
  fill(q1, 0, 100);
  rect(0, 0, width / 2, height / 2);
  fill(q2, 0, 100);
  rect(width / 2, 0, width / 2, height / 2);
  
  if (lightSwitch === false){
    fill(q3, 0, 100);
    rect(width / 2, height / 2, width / 2, height / 2);
  }
  else{
    fill(255);
    rect(width / 2, height / 2, width / 2, height / 2);
  }
  fill(q4, 0, 100);
  rect(0, height / 2, width / 2, height / 2);
  if (lightSwitch2 === true && state === 1){
    fill(255);
    rect(0, 0, width / 2, height / 2);
    fill(255);
    rect(width / 2, 0, width / 2, height / 2);
    fill(255);
    rect(width / 2, height / 2, width / 2, height / 2);
    fill(255);
    rect(0, height / 2, width / 2, height / 2);
  }
  
}
