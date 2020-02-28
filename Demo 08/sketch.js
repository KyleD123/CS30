// Loop Grid
// Kyle D
// February 27th, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 30;



function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  circleGrid();
}

function mouseClicked(){
  circleGrid();
}

function circleGrid(){
  for(let y = gridSpacing/2; y < height; y+= gridSpacing){
    for(let x = gridSpacing/2; x < width; x += gridSpacing){
      let size = random(gridSpacing*0.8, gridSpacing*1.3);
      ellipse(x,y,size,size);

    }
  }
}





function draw() {


}
