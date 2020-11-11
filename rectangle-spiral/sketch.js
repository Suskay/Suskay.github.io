var number = 5000; // number of shapes to draw
var size = 100; // size of each shape
var stepSize = 1; // size of each step
var opacity = 20; // color opacity [0-255]
var animate = true; // control animation [true or false]
var time = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke(); // disables drawing an outline
  frameRate(60)
}

function draw() {
  background(0);
  fill(255, opacity);
  translate(width / 2, height / 2);
  if (animate) number = frameCount;

  var goldenAngle = PI*time * (2.0*time - sqrt(3));
  rotate(time);
  for (var i = 0; i < number; i++) {
    translate(0, i * stepSize);
    rotate(goldenAngle);
    line(size, size, 0, size);
    stroke(255);
  }
  time += 0.001;
}
