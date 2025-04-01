
let dragging = false;
let offset;
let origin, vecA, vecB;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("vector-sim");
  origin = createVector(width / 2, height / 2);
  vecA = createVector(100, -50);
  vecB = createVector(50, 100);
}

function draw() {
  background(255);
  drawAxes();
  strokeWeight(2);

  // Draw vectors
  drawArrow(origin, vecA, 'blue', 'A');
  drawArrow(p5.Vector.add(origin, vecA), vecB, 'green', 'B');
  drawArrow(origin, p5.Vector.add(vecA, vecB), 'red', 'A + B');
}

function drawArrow(base, vec, color, label) {
  push();
  stroke(color);
  fill(color);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  resetMatrix();
  noStroke();
  fill(color);
  text(label, base.x + vec.x + 5, base.y + vec.y - 5);
  pop();
}

function drawAxes() {
  stroke(220);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
}
