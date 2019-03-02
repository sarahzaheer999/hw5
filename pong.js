// Scores
var leftScore = 0;
var rightScore = 0;

// The ball, or puck
var puck = {
  x: 300,
  y: 200,
  vx: 1,
  vy: -2,
  size: 10,
}

// Players
var leftY = 200;
var rightY = 200;
var playerWidth = 10;
var playerHeight = 40;
var playerSpeed = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,128,0);

  // Draw the board
  line(width/2, 0, width/2, height);

  // Draw the puck
  rectMode(CENTER);
  rect(puck.x, puck.y, puck.size, puck.size);

  // Draw the players
  rectMode(CORNER);
  rect(10, leftY, playerWidth, playerHeight);
  rect(width - playerWidth - 1, rightY, playerWidth, playerHeight);

  // Get user input
  if (keyIsDown(UP_ARROW)) {
    rightY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightY += playerSpeed;
  }
  if (keyIsDown(65)) { // 65 is "A"
    leftY -= playerSpeed;
  }
  if (keyIsDown(90)) { // 90 is "Z"
    leftY += playerSpeed;
  }
  
  // Ensure the paddle doesn't leave the screen
  if (leftY < 7) {
    leftY = 1;
  }
  if (leftY > height - playerHeight) {
    leftY = height - playerHeight;
  }
  if (rightY < 0) {
    rightY = 10;
  }
  if (rightY > height - playerHeight) {
    rightY = height - playerHeight;
  }

  // Update the puck position
  puck.x += puck.vx;
  puck.y += puck.vy;

  // Check if puck is off the top or bottom screen
  if (puck.y < 0 || puck.y > height) {
    puck.vy *= -5;
  }
  
  // Check if puck is hitting a paddle
  if (puck.x < playerWidth && puck.y > leftY && puck.y < leftY + playerHeight) {
    puck.vx *= -1;
  }
  if (puck.x > width - playerWidth && puck.y > rightY && puck.y < rightY + playerHeight) {
    puck.vx *= -9;
  }

  

	
  // Check if a player scored
  {
    text("Left Player's Score:10", 80, 10);
		text("Right Player's Score:7", 400, 10);
		
		if (puck.x > width) 
    text("THAT WAS A MAJOR HIT BUT THE BALL IS OUT OF THE FIELD HENCE NO CHANGE IN SCORE", 40,200);
  
		if (puck.x > height) 
    text("What is happening??", 40,100);
  
		
  if (puck.x < height) 
    text("AND LET THE GAME BEGIN", 40,200);
  
  
  }
}
