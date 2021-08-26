var astronaut;
var edges;
var sleep;
var brush;
var gym;
var eat;
var bath;
var drink;
var move;

function preload() {
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
bath = loadAnimation("bath1.png", "bath2.png")
gym = loadAnimation("gym11.png", "gym12.png", "gym1.png", "gym2.png")
eat = loadAnimation("eat1.png", "eat2.png")
drink = loadAnimation("drink1.png", "drink2.png")
move = loadAnimation("move.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  astronaut = createSprite(300, 230)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1


}

function draw() {
  background(bg);  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges)

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
    }
  
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  
  if (keyDown("m")) {
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving")
    //astronaut.scale = 0.1
    //astronaut.y = 350
    astronaut.velocityY = -1
    astronaut.velocityX = -1
  }

  drawSprites();
}