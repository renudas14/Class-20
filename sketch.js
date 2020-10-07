function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,10,90);

}

function draw() {
  background("Green");  
  text(movingRect.x - fixedRect.x,50,50);
  text(movingRect.width/2+fixedRect.width/2,300,50);
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  if(movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y - fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}