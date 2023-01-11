let circleBackground;
let canvas;

function setup() {
  canvas = createCanvas(document.body.offsetWidth, document.body.offsetHeight - 80);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
  background(0);
}

function draw() {
  circleBackground = new CircleBackground();
  circleBackground.render();
}