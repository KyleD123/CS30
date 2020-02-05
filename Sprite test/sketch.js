//Sprite Test
//Kyle Doerksen
// A test of sprites
//img = ['assets/Still.png','assets/Down1.png','assets/DOWN2.png'];
let v;
let img;
let x,y;

function preload(){
  loadImage('assets/Stll.png');
  loadImage('assets/Down1.png');
  loadImage('assets/DOWN2.png');
  
}

function animation(){
  for(let img = 0; v = 2; v ++;){
    if(v =< 0){
      img = loadImage('assets/Still.png');
      image(img,400,0);
      v = v ++;
    }
    if(v > 0, v <2){
      img = loadImage('assets/Down1.png');
      image(img,400,0);
      v = v ++;
    }
    if(v => 2){
      img = loadImage('assets/DOWN2.png');
      v = v - 2;
      image(img,400,0);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  animation();
  
}
