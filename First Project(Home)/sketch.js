// Cool Stuff
// Kyle Doerksen
// February 5th


let x = 555;
let y = 500;
let value = 0;
let m = 0;

let q = 0;


function sky(){
  fill(200,0,200);
  rect(0,0,2000,1500);
}
function bord(){
  fill(0);
  rect(0,0,10,1000);
  rect(0,0,2000,10)
  rect(1270,0,10,1000);
  rect(0,600,2000,10);
}

function count(){
  if(keyIsPressed === true){
    m = m +1;
    print(m);
  }
}

function keyPressed(){
 if(keyCode === RIGHT_ARROW){
    x = x + 5;
    
  }
  if(keyCode === LEFT_ARROW){
    x = x - 5;
    
  } 
  if(keyCode === UP_ARROW){
    y = y - 5;
    
  }
  if(keyCode === DOWN_ARROW){
    y = y + 5;
    
  } 
}


function man(){
  keyPressed();
  fill(200);
  strokeWeight(5);
  rect(x,y,75,50);
  if(mouseIsPressed === true){
    fill(0);
    rect(x,y,75,50);
  }
  if (x >= width-85){
    x = x-5;
  }
  if (x <= 10){
    x = x+5;
  }
  if (y <= 10){
    y = y+5;
  }
  if (y >= height-63){
    y = y-5;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  sky();
  bord();
  man();
  count();
  
}



