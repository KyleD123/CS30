// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ang = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function button(){
  fill(200,0,0);
  ellipse(width/2,height/2,150,150);
  if(mouseIsPressed){
    fill(0);
    ellipse(width/2,height/2,150,150);
  }
}

function draw() {
  background(0,50,150);
  if(mouseIsPressed){
    ang += ang;
  }

  button();
  return ang;
}
