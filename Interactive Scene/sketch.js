// Interactive Scene
// Kyle Doerksen
// Feb 6th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let value = 200;
let mine = "Kyle Doerksen";

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function grass(){
  fill(0,200,0);
  rect(0,500,2000,300);
}
function sky(){
  fill(0,100,200);
  rect(0,0,2000,600);
}
function house(){
  fill(200);
  let x = width/2;
  let y = height/2;
  rect(x,y,250,250);
  fill(200,0,0);
  triangle(x,y,x+135,y-200,x+250,y);
  fill(100,100,0);
  ellipse(x+75,y+50,50,50);
  ellipse(x+175,y+50,50,50);
  line(x+50,y+150,x+200,y+150);
  if(mouseIsPressed===true){
    fill(200,0,0);
    ellipse(x+125,y+150,200,200);
  }
}

function tree(){
  fill(175,70,50);
  rect(1500,570,50,200);
  
}

function leaves(){
  fill(0,200,100);
  triangle(1465,570,1525,500,1580,570);
  if(mouseIsPressed){
    fill(200,0,0);
    triangle(1465,570,1525,500,1580,570);
    
  }
}


function guy(x,y){
  fill(150,150,255);
  ellipse(100,700,50,50);
  line(90,710,110,710);
  fill(0);
  ellipse(90,695,10,10);
  fill(0);
  ellipse(110,695,10,10);
  line(90,695,110,695);
  if(mouseIsPressed === true){//opens guys mouth
    fill(200,0,0);
    ellipse(100,710,20,20); 
  }
  fill(0);
  ellipse(90,695,10,10);
  fill(0);
  ellipse(110,695,10,10);
  line(90,695,110,695);
}
function name(){
  textSize(32);
  fill(0);
  text(mine,700,700);
}
function girl(){
  fill(150,0,200);
  rect(130,700,50,50);
  fill(200,0,0);
  ellipse(155,730,10,10);
  line(150,730,160,730);
  if(mouseIsPressed === true){//opens girls mouth
    fill(200,0,0);
    ellipse(155,730,20,20);
    ellipse(155,730,18,18);
  }
  fill(0,50,50);
  ellipse(145,715,10,10);
  ellipse(165,715,10,10);
}


function glasses(){
  fill(0);
  ellipse(90,695,10,10);
  fill(0);
  ellipse(110,695,10,10);
  line(90,695,110,695);
  
}

function draw() {
  background(220);
  grass();
  sky();
  guy();
  house();
  girl();
  tree();
  leaves(1465,570);
  name();
}
