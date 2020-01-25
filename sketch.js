//version 4 of the code

//defining our variables
let r; //radius
let factor = 0; //times table ex2 times table makes the carioid shape 3 times table makes hetroid or something
let total;

function Heart(startx, starty, position) {
  this.startx = startx;
  this.starty = starty;
  this.position = position;
}

Heart.prototype.output = function() {
  translate(width / 2, height / 2); //translating our shape
  stroke(mouseX, mouseY, 30); //making the colour change depending on where the mouse is
  strokeWeight(1); //making the stroke weight 2
  noFill(); // we wanna see the lines so no colour in the ellipse
  ellipse(startx, starty, r * 2); //outputting a circle
}

Heart.prototype.lines = function() {
  const total = 50; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.004; //controls the speed (multiply by 2, then 2.004, then 2.008 etc)
  
  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total); // calculate first point (fixed positions)
    const b = getVector(i * factor, total); //calculate second point (moving positions due to the *factor)
    //line(a.x, a.y , b.x , b.y );
    line(a.x + startx, a.y + starty, b.x + startx, b.y + starty); //draws the line

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 4; //radius of the circle
  startx = 0; //start x position
  starty = 0; //start y position
}

//get vector function used to make the line in the draw function
function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI); //calculated the angle that the line will be at
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r); //holds that angle after multiplying it by the radius
  return v;
}


var heart1 = new Heart(10, 10, 1);
var heart2 = new Heart(10, 10, 3);
var heart3 = new Heart(10, 10, 2);

function draw() {
  background(0);

  heart1.output();
  heart1.lines();

  //heart2.output();
  //heart2.lines();

  heart3.output();
  heart3.lines();
}
