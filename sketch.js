var bar,thickness;
var bullet,speed,weight;
var bulletRightEdge,barLeftEdge;


function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="yellow";
  bullet.velocityX=50;

  bar=createSprite(1200, 200, thickness, height/2);
  bar.shapeColor="white";

  speed=random(55,90);
  weight=random(400,150)
}

function draw() {
  background(0);  
  drawSprites();


  if(collided(bullet,bar)){
    bullet.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness * thickness * thickness);
  }
  
    if(damage>10)
    {
    bar.shapeColor="red";
    }
  
  
    if(damage<10)
    {
    bar.shapeColor=color="green";
    }
  



}


function collided(){

bulletRightEdge=bullet.x +bullet.width;
barLeftEdge=bar.x;
if(bulletRightEdge>=barLeftEdge)
{
return true
}  else{
return false;
}







}
