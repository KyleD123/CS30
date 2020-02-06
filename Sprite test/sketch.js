//Sprite Test
//Kyle Doerksen
// A test of sprites
//img = ['assets/Still.png','assets/Down1.png','assets/DOWN2.png'];
let a,b,c;
let x,y;

function preload(){
  //a = loadImage('assets/Stll.png');
  b = loadImage('assets/Down1.png');
  c = loadImage('assets/DOWN2.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  image(c,150,150);
  let v = 1;
  if(v === 1){
    i = b;
    image(v,400,0);
    v = v ++;
    }
  if(v === 2){
    i = c;
    v = v - 1;
    image(v,400,0);
    }
  
}
