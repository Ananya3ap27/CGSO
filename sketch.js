var movingRect;
var fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="yellow";
  fixedRect.velocityY=5;
  fixedRect.debug=true;
  movingRect=createSprite(400, 800, 80, 30);
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;
  movingRect.debug=true;
}

function draw() {
  background(0,0,0); 
  bounceOff(fixedRect,movingRect);
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX=(-object1.velocityX);
    object2.velocityX=(-object2.velocityX);
  }
  if(object1.y-object2.y<object2.width/2+object1.width/2&&
    object2.y-object1.y<object2.width/2+object1.width/2){
      object1.velocityY=(-object1.velocityY);
      object2.velocityY=(-object2.velocityY);
  }
}