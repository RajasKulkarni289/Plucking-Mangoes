var tree,treeImg,boy,boyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	treeImg=loadImage("sprites/tree.png");
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,750,1200,5);
	ground1=new Ground(300,530,1200,50);
	stone=new Stone(200,500,20);
	m1=new Mango(500,350,20);
	tree=createSprite(400,350,50);
	tree.addImage(treeImg);
	tree.scale=0.3;
	boy=createSprite(150,470,20,20);
	boy.addImage(boyImg);
	boy.scale=0.1;
	rope = new MD(stone.body,{x:100, y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  stone.display();
  
 ground.display(); 
 ground1.display();
 m1.display();
 
 
 drawSprites();
 }
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
	rope.fly();
  }

