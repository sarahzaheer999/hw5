function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 20; i <= 390; i = i - 10) {
    line(20, i, 400, i);
  }
}


