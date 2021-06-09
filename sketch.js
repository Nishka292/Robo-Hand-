const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var ground;
var con;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  
  
  ball1 = Bodies.circle(350,10,10,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(350,-20,10,ball_options);
  World.add(world,ball2);

  //ball3 = Bodies.circle(410,10,10,ball_options);
  //World.add(world,ball1);

  //ball4 = Bodies.circle(440,10,10,ball_options);
  //World.add(world,ball1);

  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
    
      con2 = Matter.Constraint.create({
        pointA:{x:0,y:0},
        bodyA:ball,
        pointB:{x:0,y:0},
        bodyB:ball1,
        length:20,
        stiffness:0.1
      });

      World.add(world,con2);

      con3 = Matter.Constraint.create({
        pointA:{x:0,y:0},
        bodyA:ball1,
        pointB:{x:0,y:0},
        bodyB:ball2,
        length:20,
        stiffness:0.1
      });

      World.add(world,con3);

      //con4 = Matter.Constraint.create({
        //pointA:{x:0,y:0},
        //bodyA:ball2,
        //pointB:{x:0,y:0},
        //bodyB:ball3,
        //length:20,
        //stiffness:0.1
      //});

      //World.add(world,con4);

      //con5 = Matter.Constraint.create({
       // pointA:{x:0,y:0},
       // bodyA:ball3,
        //pointB:{x:0,y:0},
        //bodyB:ball4,
        //length:20,
        //stiffness:0.1
     // });

   // World.add(world,con5);
    
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x , ball.position.y , ball1.position.x , ball1.position.y);
  line(ball1.position.x , ball1.position.y , ball2.position.x , ball2.position.y);
  pop();

 
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

