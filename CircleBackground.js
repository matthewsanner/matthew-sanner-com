class CircleBackground {
  constructor() {
    this.x = random(document.body.offsetWidth);
    this.y = random(document.body.offsetHeight + 80);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  };

  render() {
    frameRate(30);
    noStroke();
    fill(this.r, this.g, this.b, 100);
    circle(this.x, this.y, 100);
  };

};
