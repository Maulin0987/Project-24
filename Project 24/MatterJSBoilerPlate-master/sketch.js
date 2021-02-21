
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var rubber;
var stone;

function preload()
{
	         
}

function setup() {
	createCanvas(800, 700);   


	engine = Engine.create();  
	world = engine.world;

	//Create the Bodies Here.

	hammer= new Hammer(400,300)
	ground= new Ground(100,690,1400,20);
	rubber= new Rubber(200,600,50)
    stone= new Stone(500,600,70,70);


	Engine. run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0,90,100);

  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}

