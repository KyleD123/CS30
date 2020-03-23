// Rollover
// kyle doerksen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quad = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  

}

function boxes(){
  if (quad === 1){
    fill(0);
    rect(0,0,width/2,height/2);
  }
}

function quadUpdate(){
  if(mouseX < width/2 && mouseY < height/2){
    quad = 1;
  }
  else if(mouseX > width/2 && mouseY < height/2){
    quad = 2;
  }
  else if(mouseX < width/2 && mouseY > height/2){
    quad = 3;
  }
  else if(mouseX > width/2 && mouseY > height/2){
    quad = 4;
  }
}

function draw() {
  background(220);
  quadUpdate();
  boxes();
  print(quad);
}
