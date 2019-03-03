function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var i = 10; i <= 390; i = i + 10) {
    
    var startX = 200;
    var startY = -00;
    var endX = i;
    var endY = 400;
    line(startX, startY, endX, endY);
  }
}
