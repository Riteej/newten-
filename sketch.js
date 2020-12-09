var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope5,rope6,roof; 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(400,150,300,20)
	bob1=new bob(100,480,25);
	bob2=new bob(150,480,25);
	bob3=new bob(200,480,25);
	bob4=new bob(250,480,25)
    bob5=new bob(300,480,25);
rope1=new Rope(bob3,roof,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 rope1.display();
}



