const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bob1,bob2,bob3,bob4,bob5,bob6,bob7, bobDiameter
var rope1,rope2,rope3,rope4,rope5,rope6,rope7

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 230, 300, 20);

	bob1 = new Bob(440,400,30);
  
	bob2 = new Bob(400,400,30);
	bob3 = new Bob(360,400,30);
	bob4 = new Bob(320,400,30);
	bob5 = new Bob(480,400,30);
	

	rope1 = new Rope(bob1.body, roof.body, 30*2, 0);
	rope2 = new Rope(bob2.body, roof.body,  0*2, 0);
	rope3 = new Rope(bob3.body, roof.body,-30*2, 0);
	rope4 = new Rope(bob4.body, roof.body,-60*2, 0);
	rope5 = new Rope(bob5.body, roof.body, 60*2, 0);
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(100,200,300);
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === 37)
	{
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-200,y:-100})
	}
}