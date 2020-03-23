// Tic-Tac-Toe Game
// Kyle D
// March 23rd 2020
// A game cause I'm bored

let quad = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  fill(250)
  border();
  gameBored();
  checkQuad();
}

function gameBored() {
  strokeWeight(15);
  line(500, 0, 500, height);
  line(1000, 0, 1000, height);
  line(0, 250, width, 250);
  line(0, 500, width, 500);
}

function border() {
  strokeWeight(25);
  rect(width / 2, height / 2, width, height);
  strokeWeight(2);
}

function checkQuad() {
  if (mouseX < 500 && mouseY < 250) {
    quad = 1;
    fill(100);
    rect(250, 125, 500, 250);
    print(quad);
  }
  else if (mouseX > 500 && mouseX < 1000 && mouseY < 250) {
    quad = 2;
    fill(100);
    rect(750, 125, 500, 250);
    print(quad);
  }
  else if (mouseX > 1000 && mouseY < 250) {
    quad = 3;
    fill(100);
    rect(1270, 125, 550, 250);
    print(quad);
  }
  else if (mouseX < 500 && mouseY > 250 && mouseY < 500){
    quad = 4;
    fill(100);
    rect(250,375,500,250);
    print(quad);
  }
  else if (mouseX > 500 && mouseX < 1000 && mouseY > 250 && mouseY < 500){
    quad = 5;
    fill(100);
    rect(750,375,500,250);
    print(quad);
  }
  else if (mouseX > 1000 && mouseY > 250 && mouseY < 500){
    quad = 6;
    fill(100);
    rect(1270,375,550,250);
    print(quad);
  }
  else if (mouseX < 500 && mouseY > 500){
    quad = 7;
    fill(100);
    rect(250,height - 135,500,250);
    print(quad);
  }
  else if (mouseX > 500 && mouseX < 1000 && mouseY > 500){
    quad = 8;
    fill(100);
    rect(750,height-135,500,250);
    print(quad);
  }
  else if (mouseX > 1000 && mouseY > 500){
    quad = 9;
    fill(100);
    rect(1270,height-135,550,250);
    print(quad);
  }
}