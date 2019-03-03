
var numberRings = 10;
var maxDiameter = 2000;

function setup(){
  

  createCanvas(400, 400);
  

  ellipseMode(CENTER);
  
  for (var i = 0; i < numberRings ; i++) {
    var currentDiameter = maxDiameter * (numberRings-i)/100;
    
  	
    
  	ellipse(width/2, height/2, currentDiameter, currentDiameter); 
  }
}
