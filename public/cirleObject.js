class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    // var spectrum = fft.analyze();

    // push();
    // translate(this.x, this.y);
  fill(255, 0 , 100);
  ellipse(this.x, this.y, 60, 60);
    // scale(0.1);
    // noFill();
    // strokeWeight(2);
    // stroke(255);
    // beginShape();
    // for (var i = 0; i < 360; i++) {
    //   var x = map(i, 0, waveform.length, 0, width);
    //   var y = map(waveform[i], -1, 1, -height/2, height/2);
    //   vertex(x, y + height/2);
    //   vertex(x, y);
    // }
    // endShape();
    // pop();
  }
}
