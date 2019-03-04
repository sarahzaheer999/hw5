function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 1; i < 200, i += 10) {
    var startX = 200 - i;
    var endX = 200 + i;
    var startY = i;
    var endY = i;
    line(startX, startY, endX, endY);

}


