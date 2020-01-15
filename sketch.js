var trex,trex_running,trex_collided;
var ground,invisibleGround,ground_image;

function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  ground_image = loadImage("ground2.png");    
}
function setup() {
  createCanvas(400, 400);
  
  trex = createSprite(200,380,20,50);
  trex.addAnimation( "running",trex_running);
//scale and position the trex
  trex.scale = 0.5;
  trex.x = 50;
  
ground = createSprite(200,380,400,20);
ground.addImage("ground",ground_image);
ground.x = ground.width /2;

//invisible Ground to support Trex
 invisibleGround = createSprite(200,385,400,5);
 invisibleGround.visible = false;
  
  
  
}

function draw() {
  background(220);
  
  trex.collide(invisibleGround);
  
  ground.velocityX = -6;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y >= 359){
    trex.velocityY = -10 ;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  
  
  
  drawSprites();
}