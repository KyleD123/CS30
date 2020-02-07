// Cool Stuff
// Kyle Doerksen
// February 5th


let x = 555;
let y = 500;
let value = 0;

function keyPressed(){
 if(keyCode === RIGHT_ARROW){
    x = x + 10;
    fill(200,0,0);1
  }
  if(keyCode === LEFT_ARROW){
    x = x - 10;
    fill(0,200,0);
  } 
  if(keyCode === UP_ARROW){
    y = y - 10;
    fill(0,0,200);
  }
  if(keyCode === DOWN_ARROW){
    y = y + 10;
    fill(200,0,200);
  }
}
function bad(){
  triangle(100,100,120,120,80,120)

}

function coord(){
  if(mouseIsPressed){
    print("That's not going to work");
  }
}

function man(){
  rect(x,y,50,50);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  man();
  bad();
  
  
}



