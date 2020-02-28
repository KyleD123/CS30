// Loop Grid
// Kyle D
// February 27th, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 30;
let mouse = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectGrid();
}

function mouseClicked() {
  if (keyCode === SHIFT && keyIsPressed ){
    gridSpacing = 30;
    rectGrid();
  }
  else{
    gridSpacing = gridSpacing - 20;
    rectGrid();
  }
  
}
function keyPressed(){
  
}


function rectGrid() {
  for (let y = 0; y < height; y += gridSpacing) {

    for (let x = 0; x < width; x += gridSpacing) {
      fill(random(150), random(150), random(150));
      rect(x, y, gridSpacing, gridSpacing);

    }
  }
}






function draw() {


}
