
let massSlider;
let gravity = 9.8;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("forces-sim");

  createP("Mass (kg)").parent("forces-sim");
  massSlider = createSlider(1, 10, 5, 0.1).parent("forces-sim");
}

function draw() {
  background(255);
  let mass = massSlider.value();
  let weight = mass * gravity;
  let normalForce = weight;

  fill(200);
  rect(width/2 - 25, height/2, 50, 50);

  strokeWeight(2);
  stroke("red");
  line(width/2, height/2, width/2, height/2 + 60);

  stroke("blue");
  line(width/2, height/2, width/2, height/2 - 60);

  fill(0);
  noStroke();
  textAlign(CENTER);
  text("Weight", width/2, height/2 + 75);
  text("Normal", width/2, height/2 - 65);

  textAlign(LEFT);
  text("Mass = " + mass + " kg", 10, 20);
  text("Weight = " + weight.toFixed(1) + " N", 10, 40);
}
