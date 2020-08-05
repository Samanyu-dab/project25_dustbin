
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var rec1,rec2,rec3,groundSprite,paperball;
var tmp=0;
function preload()
{
imajai=loadImage("most-famous-streets-abbey-road.jpg")
	
}

function setup() {
	var canvas = createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	


	

	rec1=createSprite(930,730,20,100)
	rec1.shapeColor="red"

	rec2=createSprite(1040,770,200,20)
	rec2.shapeColor="red"

	rec3=createSprite(1150,730,20,100)
	rec3.shapeColor="red"

	paperball=new paper(10,680,20)
  

	ground = Bodies.rectangle(width/2, 790, width, 20 , {isStatic:true} );
	World.add(world, ground);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(imajai);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,20);
  
  paperball.display();
 
  drawSprites();
 
}

function keyPressed() {
    
    if (keyCode === UP_ARROW && tmp===0 ){
		//Matter.Body.setVelocity( paperball.body, {x: 2, y: -2});
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
tmp=1
    }
}



