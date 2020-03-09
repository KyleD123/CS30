//Chess Board

const LENGTH = 50;

function setup() {
  createCanvas(600, 600);
}

function chessBoard(){// Function that builds the chess board
  for (let i = 0; i < 8; i++){
    for(let q = 0; q < 8; q++){
      if (q % 2 === 0 && i % 2 === 0){
        fill(255);
      }
      else if (q % 2 === 0 && i % 2 !== 0){
        fill(0);
      }
      else if (q % 2 !== 0 && i % 2 !== 0){
        fill(255);
      }
      else if (q % 2 !== 0 && i % 2 === 0){
        fill(0);
      }
      rect(LENGTH*q,LENGTH*i,LENGTH,LENGTH);
    }
  }
  
}

function draw() {// function that calls the chessboard function
  chessBoard();
}