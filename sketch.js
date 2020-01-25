//version 3 of the code

//defining our variables

let r; //radius
let factor = 0; //times table ex2 times table makes the carioid shape 3 times table makes hetroid or something
let total;
//let startx;
//let starty;

function Heart(startx, starty)
{
  this.startx= startx;
  this.starty= starty;
}

/*
//get vector function used to make the line in the draw function
function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}
*/

Heart.prototype.output = function()
{
  translate(width / 2, height / 2); //translating our shape
  stroke(mouseX,mouseY, 30); //making the colour change depending on where the mouse is
  strokeWeight(2); //making the stroke weight 2
  noFill(); // we wanna see the lines so no colour in the ellipse
  ellipse(startx, starty, r * 2); //outputting a circle
}

Heart.prototype.lines = function()
{
  const total = 50; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;
  
  strokeWeight(1);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total); // calculate first point (fixed positions)
    const b = getVector(i * factor, total); //calculate second point (moving positions due to the *factor)
    //line(a.x, a.y , b.x , b.y );
    line(a.x + startx, a.y + starty, b.x + startx, b.y + starty); //draws the line
  }
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 2 - 16;
  startx = 0;
  starty = 0;
}
  
function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

var heart1 = new Heart(10, 10);
var heart2 = new Heart(10, 10);
var heart3 = new Heart(10, 10);

function draw() {
  background(0);

  heart1.output();
  heart1.lines();
  
  //heart2.output();
  //heart2.lines();
  
  heart3.output();
  heart3.lines();
}
