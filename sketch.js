var ToyotaPrius, deformation
var WagonR, deformation2
var Volkswagon, deformation3
var BMW, deformation4
var wall
var divider
var divider2
var divider3
var divider4 
var speed, speed1, speed2, speed3 

function setup() {
  createCanvas(600,400);
  ToyotaPrius = createSprite(30, 50, 15, 15);
  ToyotaPrius.shapeColour = "crimson";

  Volkswagon = createSprite(30, 150, 15, 15);
  Volkswagon.shapeColour = "white";

  WagonR = createSprite(30, 250, 15, 15);
  WagonR.shapeColour = "white";

  BMW = createSprite(30, 350, 15, 15);
  BMW.shapeColour = "white";

  wall = createSprite(500, 100, 5, 600);
  
  speed = Math.round(random(45, 130));
  speed1 = Math.round(random(45, 90));
  speed2 = Math.round(random(40, 50));
  speed3 = Math.round(random(80, 90));
  
  weight = Math.round(random(500, 1500));
  weight2 = Math.round(random(1400, 1500));
  weight3 = Math.round(random(500, 1500));
  weight4 = Math.round(random(1000, 1200));

}

function draw() {
  background("black");
  
  ToyotaPrius.collide(wall);
  Volkswagon.collide(wall);
  WagonR.collide(wall);
  BMW.collide(wall);

  if(keyDown("space")){
  ToyotaPrius.velocityX = speed/10;
  Volkswagon.velocityX = speed1/10;
  WagonR.velocityX = speed2/10;
  BMW.velocityX = speed3/10;
  }

   deformation = 0.5 * weight * speed * speed/22500;
   deformation2 = 0.5 * weight2 * speed1 * speed1/22500;
   deformation3 = 0.5 * weight3 * speed2 * speed2/22500;
   deformation4 = 0.5 * weight4 * speed3 * speed3/22500;

  if (ToyotaPrius.x > 480) { 
  if (deformation > 180) {
    ToyotaPrius.shapeColor = color(255, 0, 0);
  }
 
  if (deformation > 180 && deformation < 100){
    ToyotaPrius.shapeColor = color(230, 230, 0);
  }

  if (deformation < 100){
    ToyotaPrius.shapeColor = color(0, 255, 0);
  }
  }

  if (Volkswagon.x > 480) {
    if (deformation2 > 180) {
      Volkswagon.shapeColor = color(255, 0, 0);
    }
   
    if (deformation2 > 180 && deformation2 < 100){
      Volkswagon.shapeColor = color(230, 230, 0);
    }
  
    if (deformation2 < 100){
      Volkswagon.shapeColor = color(0, 255, 0);
    }
    }  

    if (WagonR.x > 480) {
      if (deformation3 > 180) {
        WagonR.shapeColor = color(255, 0, 0);
      }
     
      if (deformation3 > 180 && deformation3 < 100){
        WagonR.shapeColor = color(230, 230, 0);
      }
    
      if (deformation3 < 100){
        WagonR.shapeColor = color(0, 255, 0);
      }
      }  
  
      if (BMW.x > 480) {
        if (deformation4 > 180) {
         BMW.shapeColor = color(255, 0, 0);
        } 
       
        if (deformation4 > 180 && deformation4 < 100){
          BMW.shapeColor = color(230, 230, 0);
        }
      
        if (deformation4 < 100){
          BMW.shapeColor = color(0, 255, 0);
        }  
}
      text("Green is safe, you don't need to worry.", 220, 100);
      text("Grey is average, its a very casual car", 220, 200);
      text("Red is dangerous, and can kill you.", 220, 300);

  drawSprites();
} 