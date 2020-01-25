//version 6 of the code

//importing stuff
new p5(); // to make the random function work

//defining our variables
let r; //radius
let factor = 0; //times table ex2 times table makes the carioid shape 3 times table makes hetroid or something
//let total;

function Heart(m, x, y, total) {
  this.mass = m;
  this.total = total;
  this.position = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector(0, 0);
}

Heart.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};

Heart.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Heart.prototype.calculateWallForce = function() {
    var i=0;
    var j=0;
    
    if (this.position.x> width) 
    {
        i = -1;
    } 
    else if (this.position.x < 0) 
    {
        i = 1;
    }

    if (this.position.y > height) 
    {
        j = -1;
    } 
    else if (this.position.y < 0) 
    {
        j = 1;
    }
    return new p5.Vector(i,j);
};

Heart.prototype.output = function() {
  stroke(mouseX, mouseY, 30); //making the colour change depending on where the mouse is
  strokeWeight(1); //making the stroke weight 2
  noFill(); // we wanna see the lines so no colour in the ellipse
  ellipse(this.position.x, this.position.y, r * 2); //outputting a circle
}

Heart.prototype.lines = function() {
  const total = this.total; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.0015;//controls the speed (multiply by 2, then 2.0015, then 2.0030 etc)

  strokeWeight(1);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total); // calculate first point (fixed positions)
    const b = getVector(i * factor, total); //calculate second point (moving positions due to the *factor)
    line(a.x + this.position.x, a.y + this.position.y, b.x + this.position.x, b.y + this.position.y); //draws the line
  }
}

function setup() {
  createCanvas(1600, 800); // makign the canvas
  r = height /8 - 16; //radius of the circle
}

//get vector function used to make the line in the draw function
function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI); //calculated the angle that the line will be at
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r); //holds that angle after multiplying it by the radius
  return v;
}

var hearts = [];

for (var i = 0; i < 20; i++) {
    hearts[i] = new Heart(random(3, 5), random(-100, 700), random(-100, 400), random(5, 50));
}

var xforce = new p5.Vector(0.01, 0);
var yforce = new p5.Vector(0, 0.1);

function draw() {
  background(0);
  
  for (var i = 0; i < hearts.length; i++) {
      hearts[i].applyForce(xforce);
      hearts[i].applyForce(yforce);
      hearts[i].applyForce(hearts[i].calculateWallForce());
      hearts[i].update();
      hearts[i].output();
      hearts[i].lines();
    }
}
