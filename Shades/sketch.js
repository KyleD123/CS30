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



function draw() {
  background(220);
  stateUpdate();
  print(state);
  
  if(state === 1){
    shade = 0;
    colour = shade;
    fill(colour);
    rect(0,0,width/2,height/2);  
  }
  else{
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(0,0,width/2,height/2)
  
  }
  if(state === 2){
    shade = 0;
    colour = shade;
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
  
  else{
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
  if(state === 3){
    
    colour = shade;
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
  
  else{
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
  if (state === 4){
    
    colour = shade;
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
  
  else{
    colour = shade;
    if(shade < 255){
      shade = shade + 1;
    }
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
  
  
  
}
