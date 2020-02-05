// Cool Stuff
// Kyle Doerksen
// February 5th


let x = 555;
let y = 500;
let value = 0;


function man(){
  fill(value);
  rect(x,y,50,50);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  man(x,y);
  if(keyCode === RIGHT_ARROW){
    x = x + 1;
  }
  if(keyCode === LEFT_ARROW){
    x = x - 1;
  }
}



