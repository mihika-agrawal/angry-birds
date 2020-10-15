const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var ground,backgroundImage;
function preload(){
backgroundImage=loadImage("sprites/bg.png")

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   
   box1=new Box(700,320,70,70);
   box2=new Box(900,320,70,70);
   pig1=new Pig(800,320);
   ground=new Ground(1200,20);
 log1=new Log(800,260,300,PI/2);
 box3=new Box(700,240,70,70);
   box4=new Box(900,240,70,70);
   pig2=new Pig(800,240);
   log2=new Log(800,220,300,PI/2);
   box5=new Box(800,160,60,60);
   log3=new Log(750,150,150,PI/4);
   log4=new Log(850,150,150,-PI/4);
   bird=new Bird(100,100);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
    bird.display();
}