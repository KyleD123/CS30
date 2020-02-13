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
    colour = 0;
    fill(colour);
    rect(0,0,width/2,height/2);
    
  }
  else if(state > 1){
    if (colour === 255 && shade === 0){
      if(shade < 255){
        shade = shade + 1;
      }
      colour = shade;
      fill(colour)
      rect(0,0,width/2,height/2);
      
    }
  }
  else{
    colour = 255;
    fill(colour);
    rect(0,0,width/2,height/2)
  }
  if(state === 2){
    colour = 0;
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
  //else if(state > 2 || state < 2){
    //if(colour === 255){
      //colour = 0;
      //fill(colour)
      //rect(width/2,0,width/2,height/2);
    //} 
  //}
  else{
    colour === 255;
    fill(colour);
    rect(width/2,0,width/2,height/2);
  }
  if(state === 3){
    colour = 0;
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
  //else if(state > 3 || state < 3){
    //if(colour === 255){
      //colour = 0;
      //fill(colour)
      //rect(width/2,height/2,width/2,height/2);
    //}
  //}
  else{
    colour = 255;
    fill(colour);
    rect(width/2,height/2,width/2,height/2);
  }
  if (state === 4){
    colour = 0;
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
  //else if(state > 4 || state < 4){
    //if(colour === 255){
      //colour = 0;
      //fill(colour)
      //rect(0,height/2,width/2,height/2);
    //}
  //}
  else{
    colour = 255;
    fill(colour);
    rect(0,height/2,width/2,height/2);
  }
  
  
  
}
