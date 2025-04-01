
let massSlider, forceSlider;
let velocity = 0;
let position = 50;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("newtonsim");

  createP("Mass (kg)").parent("newtonsim");
  massSlider = createSlider(1, 10, 2, 0.1).parent("newtonsim");

  createP("Force (N)").parent("newtonsim");
  forceSlider = createSlider(1, 20, 10, 0.5).parent("newtonsim");
}

function draw() {
  background(255);
  let mass = massSlider.value();
  let force = forceSlider.value();
  let acceleration = force / mass;

  velocity += acceleration * 0.1;
  position += velocity;

  fill(0);
  rect(position % width, height / 2 - 20, 40, 40);

  fill(50);
  textSize(14);
  textAlign(LEFT);
  text("F = " + force + " N", 10, 20);
  text("m = " + mass + " kg", 10, 40);
  text("a = " + acceleration.toFixed(2) + " m/s²", 10, 60);
}
