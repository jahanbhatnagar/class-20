var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  
   movingRect = createSprite(400,200,80,30);
   fixedRect = createSprite(300,100,50,50);
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}else{
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink";
}
  drawSprites();
  
}