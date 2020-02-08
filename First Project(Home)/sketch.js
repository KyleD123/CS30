// Cool Stuff
// Kyle Doerksen
// February 5th


let x = 555;
let y = 500;
let value = 0;
let m = 0;



function sky(){
  fill(0,250,200);
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
    x = x + 10;
    
  }
  if(keyCode === LEFT_ARROW){
    x = x - 10;
    
  } 
  if(keyCode === UP_ARROW){
    y = y - 10;
    
  }
  if(keyCode === DOWN_ARROW){
    y = y + 10;
    
  } 
}
 

function man(){
  keyPressed();
  fill(200);
  strokeWeight(5);
  rect(x,y,75,50);
  if(mouseIsPressed === true){
    rect(x,y,100,100);
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



