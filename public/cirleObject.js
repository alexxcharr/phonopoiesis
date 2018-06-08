class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }

  show() {
    var c = random(0, 100);
    stroke(c);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 34, 34);
  }
}
