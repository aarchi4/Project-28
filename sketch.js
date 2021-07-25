
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject, groundObject
var engine, world;
var L1
function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paperObject = new Paper(200,400,70);
	 groundObject = new Ground(width/2,670,width,20);
     dustbinObj = new Dustbin (1200,height-190)
	 
     L1 = new Launcher(paperObject.body,{x:200,y:200})

//	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);
 groundObject.display();
 dustbinObj.display();
 paperObject.display();
 L1.display();
}
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:130,y:-145})
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
L1.fly()
}

