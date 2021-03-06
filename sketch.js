const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgImg;

function preload(){
bgImg = loadImage("sprites/bg.png");


}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,920,70,70);
    box2 = new Box(920,920,70,70);
    pig1 = new Pig(810,950);
    log1 = new Log(810,860,300, PI/2);

    box3 = new Box(700,840,70,70);
    box4 = new Box(920,840,70,70);
    pig3 = new Pig(810,820);

    log3 =  new Log(810,780,300, PI/2);

    box5 = new Box(810,760,70,70);
    log4 = new Log(760,720,150, PI/7);
    log5 = new Log(870,720,150, -PI/7);

    bird = new Bird(600,500);

}

function draw(){
    background(bgImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}