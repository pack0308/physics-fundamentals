
let m1Slider, m2Slider;
let ball1, ball2;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("momentum-sim");

  createP("Mass of Ball 1").parent("momentum-sim");
  m1Slider = createSlider(1, 5, 1, 0.1).parent("momentum-sim");

  createP("Mass of Ball 2").parent("momentum-sim");
  m2Slider = createSlider(1, 5, 1, 0.1).parent("momentum-sim");

  resetBalls();
}

function draw() {
  background(255);

  fill("blue");
  ellipse(ball1.x, height / 2, 30, 30);

  fill("green");
  ellipse(ball2.x, height / 2, 30, 30);

  ball1.x += ball1.v;
  ball2.x += ball2.v;

  if (abs(ball1.x - ball2.x) < 30) {
    let m1 = ball1.m;
    let m2 = ball2.m;
    let v1 = ball1.v;
    let v2 = ball2.v;

    ball1.v = ((m1 - m2) * v1 + 2 * m2 * v2) / (m1 + m2);
    ball2.v = ((m2 - m1) * v2 + 2 * m1 * v1) / (m1 + m2);
  }

  fill(0);
  textSize(14);
  text("p1 = " + (ball1.m * ball1.v).toFixed(2), 10, 20);
  text("p2 = " + (ball2.m * ball2.v).toFixed(2), 10, 40);
}

function resetBalls() {
  ball1 = { x: 100, v: 2, m: m1Slider ? m1Slider.value() : 1 };
  ball2 = { x: 400, v: -1, m: m2Slider ? m2Slider.value() : 1 };
}

function mousePressed() {
  resetBalls();
}
