const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;

var backgroundImg;
var sBg1 = "sprites/dbg.png";

function preload(){
    getBg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //Bottom Level

    box1 = new Box(330, 225, 30, 40);
    box2 = new Box(360, 225, 30, 40);
    box3 = new Box(390, 225, 30, 40);
    box4 = new Box(420, 225, 30, 40);    
    box5 = new Box(450, 225, 30, 40);

    // Middle Level

    box6 = new Box(365, 215, 30, 40);
    box7 = new Box(395, 215, 30, 40);
    box8 = new Box(425, 215, 30, 40);
    
    // Top Level
    
    box9 = new Box(395, 215, 30, 40);

    // Platfrom For Boxes

    log1 = new Platfrom(415,230,300, 5);

 


    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    log1.display();

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    this.slingshot.fly();
}

async function getBg(){
    var json = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var storeJson = await json.json();
    console.log(storeJson);
    var changeBg = storeJson.datetime;
    console.log(changeBg);
    var sBg = changeBg.slice(11, 13);
    console.log(sBg);
    if(sBg >= 12 && sBg <= 24){
        sBg1 = "sprites/nbg.png";
    }
    else{
        sBg1 = "sprites/dbg.png";
    }
    backgroundImg = loadImage(sBg1);
}