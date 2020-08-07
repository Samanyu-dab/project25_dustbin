
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
	dustbinImage=loadImage("dustbingreen.png")
	himoglobin_ka_bacha=loadImage("paper.png")
}

function setup() {
	var canvas = createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	


	

	rec1=createSprite(980,730,20,100)
	rec1.shapeColor="red"

	rec2=createSprite(1080,770,200,20)
	rec2.shapeColor="red"

	rec3=createSprite(1150,730,20,100)
	rec3.shapeColor="red"

	dusbin_image=createSprite(1080,650,30,100)
	dusbin_image.addImage(dustbinImage)
	

	paperball=new paper(15,680,60)
	
  

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
    
    if (keyCode === UP_ARROW && tmp===0  ){
		//Matter.Body.setVelocity( paperball.body, {x: 2, y: -2});
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:900,y:-900});
tmp=1
    }
}



