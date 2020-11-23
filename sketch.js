var f , m;



function setup() {
  createCanvas(800,400);
  f=createSprite(400, 200, 50, 50);
  m=createSprite(500, 200, 60, 40);
}

function draw() {
  background(0); 
  m.x=mouseX
  m.y=mouseY 
  if(f.x-m.x<f.width/2+m.width/2 && m.x-f.x<f.width/2+m.width/2 && 
    f.y-m.y<f.height/2+m.height/2 && m.y-f.y<f.height/2+m.height/2){
   f.shapeColor="white"
   m.shapeColor="white"
  }
  else{
    f.shapeColor="blue"
    m.shapeColor="blue"
  }
  drawSprites();
}