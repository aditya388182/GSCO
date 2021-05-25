var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 car =  createSprite(50, 200, 50, 50);
 car.velocityX = speed;
 car.velocityX = 5;
 wall =  createSprite(1500, 200, 50, 50);
  speed = random(5,65);
  weight = random(45,85);
}

function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x<(wall.width + car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
     }
     if(deformation>100 && deformation<180){
       car.shapeColor = color(230,230,0);
     }
        
  }
//
  drawSprites();
}