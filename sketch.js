var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3,rectA,rectB,rectC;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(400,630,300,20);
	rect1.shapeColor="red";

	rect2=createSprite(540,560,20,200);
	rect2.shapeColor="red";

	rect3=createSprite(240,560,20,200);
	rect3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	rectA=Bodies.rectangle(400,650,300,10,{isStatic:true});
	World.add(world,rectA);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	rectB=Bodies.rectangle(560,560,20,200,{isStatic:true});
	World.add(world,rectB);

	rectC=Bodies.rectangle(240,560,20,200,{isStatic:true});
	World.add(world,rectC);

		Engine.run(engine);	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rect1.x= rectA.position.x 
  rect1.y= rectA.position.y 

  rect2.x= rectB.position.x 
  rect2.y= rectB.position.y 

  rect3.x= rectC.position.x 
  rect3.y= rectC.position.y 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody,false)
		
	}
}