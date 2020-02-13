// RollOver
// KyleDoerksen
// Feb 12 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
let colour = 0;
let topLeft = false;
let topRight = false;
let bottomLeft = false;
let bottomRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function stateUpdate(){
  if(mouseX < width/2 && mouseY < height/2){
    state = 1;
    topLeft = true;
  }
  else if(mouseX > width/2 && mouseY < height/2){
    state = 2;
    topRight = true;
  }
  else if(mouseX < width/2 && mouseY > height/2){
    state = 4;
    bottomLeft = true;
  }
  else if(mouseX > width/2 && mouseY > height/2){
    state = 3;
    bottomRight = true;
  }
}

function squares(){
  if (state === 1){
    topLeft = true;
    fill(colour);
    rect(0,0,width/2,height/2);
    if (state < 1){
      colour = colour - 10;
    }
    
  }
  else if(state === 2){
    fill(colour)
    rect(width/2,0,width/2,height/2);
  }
  else if(state === 3){
    fill(colour)
    rect(width/2,height/2,width/2,height/2);
  }
  else if(state === 4){
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
}

function shade(){
  if (topLeft === false && colour === 255);
    colour = 0;
    colour = colour + 10;
}


function draw() {
  background(220);
  colour = 255;
  fill(colour);
  rect(0,0,width/2,height/2);
  rect(width/2,0,width/2,height/2);
  rect(width/2,height/2,width/2,height/2);
  rect(0,height/2,width/2,height/2);
  stateUpdate();
  print(state);
  shade();
  squares();
}
