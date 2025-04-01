
let velocitySlider, accelSlider;
let pos = 0;
let startTime;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("kinematics-sim");

  createP("Initial Velocity (m/s)").parent("kinematics-sim");
  velocitySlider = createSlider(0, 10, 2, 0.1).parent("kinematics-sim");

  createP("Acceleration (m/s²)").parent("kinematics-sim");
  accelSlider = createSlider(0, 5, 0.5, 0.1).parent("kinematics-sim");

  startTime = millis();
}

function draw() {
  background(255);
  let t = (millis() - startTime) / 1000;
  let velocity = velocitySlider.value();
  let acceleration = accelSlider.value();
  pos = 50 + velocity * t * 50 + 0.5 * acceleration * t * t * 50;

  fill(0);
  ellipse(pos % width, height / 2, 30, 30);

  fill(50);
  textSize(14);
  textAlign(LEFT);
  text("t = " + t.toFixed(2) + " s", 10, 20);
  text("x = " + (pos / 50).toFixed(2) + " m", 10, 40);
}
