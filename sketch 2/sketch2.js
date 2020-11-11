var circles = []; //array to hold all circles

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  background(20);

  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].ellipse();

    console.log(circles.length);


    if (circles[i].lifespan <= 0) {
      circles.splice(i, 1);
    }
  }

  circles.push(new Circle(random(0, width), random(0, height), random(7, 15)));
}

function Circle(x, y, s) {
  
  this.x = x; //x position
  this.y = y; //y position
  this.s = s; //circle size

  this.r = 0;
  this.g = 0;
  this.b = 0;

  this.lifespan = 300;

  this.ellipse = function () {
    
    fill(this.r, this.g, this.b);
    // noStroke();

    ellipse(this.x, this.y, this.s);
  };
  
  this.update = function () {
    this.s = this.s + random(0, 5);
    if (this.r == 0) {
      this.r = this.r + 255;
      this.b = this.b + 255;
      this.g = this.g + 255;
    } else {
      this.r = this.r - 255;
      this.b = this.b - 255;
      this.g = this.g - 255;
    }
    this.lifespan--;
  };
}
