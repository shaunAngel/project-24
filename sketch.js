const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
//var plane;
var stone;

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	hammer= new Hammer(810,260,300,PI/2);
	//plane = new plane(600,height,1200,20);
	stone = new Stone(700,320,70,70);
    rubber = new Rubber(200,100,20,0 );
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(56, 46, 55, 55);

  hammer.display();
  //plane.display();
  stone.display();
  rubber.display();

  //drawSprites();
}









