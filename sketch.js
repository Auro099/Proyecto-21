
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
 
//var ball;
var ground;
var leftSide,rightSide;
var top_wall;
var left_wall,right_wall;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
/*
	var ball_options = {
		isStatic:false, 
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	*/
	var ball_options = { 
		restitution:0.95
	}
	pushButton = createImg("push.png");
	pushButton.position(750,30);
	pushButton.size(80,80);
	pushButton.mouseClicked(hForce);
	ground = new Ground(width/2,670,width,20);
	top_wall = new Ground(width/2,20,width,20);
	left_wall = new Ground(1480,height/2,20,height);
	right_wall = new Ground(10,height/2,20,height);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1280,600,20,120);

    //crear los cuerpos aquí.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	var ground_options ={
		isStatic: true
	};

    Engine.run(engine);
}


function draw() {
  background(0);
  //ground.show();
  ground.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);

  //drawSprites();
  
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}



