const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var gameWorld, gameEngine;
var ground;
var ball;
var ch;
var box1, box2, box3, box4, box5;
function setup() {
  createCanvas(1000,400);
  gameEngine= Engine.create();
  gameWorld = gameEngine.world;
  ground= new Ground();
  ball = new Ball();
  ch= new Chain(ball.body,{x:450,y:100});
  box1= new Box(500,300 ,50,50);
  box2= new Box(500,250 ,50,50);
  box3= new Box(500,200 ,50,50);
  box4= new Box(500,150 ,50,50);
  box5= new Box(500,100 ,50,50);
}

function draw() {
  background(255,255,255);
  Engine.update(gameEngine);  
  ground.display();
  ball.display();
  ch.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  

}