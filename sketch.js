//version 2 of the code

//defining our variables
let r;
let factor = 0;
let startx;
let starty;

function setup() {
  createCanvas(windowWidth, windowHeight); //making a new window
  r = height / 2; //settoing the radius
  startx = 0; //starting x position
  starty = 0; //starting y position
}

//object for heart
function heart (startx, starty)
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

//drawing the circle and lines
heart.prototype.display()
{
   translate(width / 2, height / 2); //translating our shape
  stroke(mouseX,mouseY, 30); //making the colour change depending on where the mouse is
  strokeWeight(2); //making the stroke weight 2
  noFill(); // we wanna see the lines so no colour in the ellipse
  ellipse(startx, starty, r * 2); //outputting a circle

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total); // calculate first point (fixed positions)
    const b = getVector(i * factor, total); //calculate second point (moving positions due to the *factor)
    line(a.x + startx, a.y + starty, b.x + startx, b.y + starty); //draws the line
  }
}

var heart1= new heart(height / 2 - 16);

draw = function()
{
  background(0);
  
  heart1.display();
};
