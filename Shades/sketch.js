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
let shade = 0;

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
function upLeft(){
  if(state === 1 && topLeft === true){
    shade = 0;
    colour = shade;
    fill(colour);
    rect(0,0,width/2,height/2);  
  }
  else if(state !== 1){
    
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(0,0,width/2,height/2)
  
  }
}
function upRight(){
  if(state === 2 && topRight === true){
    shade = 0;
    colour = shade;
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
  
  else if(state !== 2){
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
}
function downRight(){
  if(state === 3 && bottomRight === true){
    shade = 0;
    colour = shade;
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
  
  else if(state !== 3){
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
}

function downLeft(){
  if (state === 4 && bottomLeft === true){
    
    colour = shade;
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
  
  else if(state !== 4){
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
}

function draw() {
  background(220);
  stateUpdate();
  print(state);
  upLeft();
  upRight();
  downRight();
  downLeft();  
  
}
