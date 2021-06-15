
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground,right,left,top_w;
var ball;
var rightButton,upButton;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_w = new Ground(200,10,400,20);
 
  rightButton=createImg("right.png")
  rightButton.position(220,30)
 rightButton.size(40,40)
 rightButton.mouseClicked(hForce)

 upButton=createImg("up.png")
 upButton.position(20,30)
upButton.size(40,40)
upButton.mouseClicked(vForce)


  var options={

    restitution:1
  }

  
  ball=Bodies.circle(200,200,30,options);
   World.add(world,ball);
}


function draw() {
background(0);
Engine.update(engine);
top_w.show();
left.show();
right.show();
ground.show();

ellipse(ball.position.x,ball.position.y,30);


}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

