function Branch(begin, end, weight) {
  this.begin = begin;
  this.end = end;
  this.weight = weight;
  this.finished = false;

  this.show = function (weight) {
    stroke(255);
    strokeWeight(weight)
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branchA = function () {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / random(2, 6));
    dir.mult(random(0.3, 0.9));
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.weigth);
    return b;
  };
  this.branchB = function () {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(random(0.3, 0.9));
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.weight);
    return b;
  };
}
