const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  
box1 = new Box (200,150,50,50)
box1.color = "green"
box2 = new Box (230,75,50,100)
box2.color = "yellow"

ground = new Ground (200,height,400,15)


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode (CENTER)
  box1.display()
  box2.display()
 ground.display()
 
}