const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig2;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/images.png";
var score = 0;
var button;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700+200,320,80,80);
    box2 = new Box(920+200,320,80,80);
    box3 = new Box(700+200,240,80,80);
    box4 = new Box(920+200,240,80,80);
    
    log1 = new Log(810+200,280,300, PI/2);
    log3 =  new Log(810+200,182,300, PI/2);
       
    pig1 = new Pig(810+200, 350);
    pig2 = new Pig(810+200, 180);
    pig3 = new Pig(810+200, 210);

    pig1.image = loadImage("sprites/Picture1.png");
    pig2.image = loadImage("sprites/aaryan.png");
    pig3.image = loadImage("sprites/Picture3.png");



    box5 = new Box(700+200,180,80,80);
    box6 = new Box(920+200,180,80,80);

    log4 = new Log(810+200,84,300, PI/2);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:220});


    box7 = new Box(700,320,80,80);
    box8 = new Box(620,320,80,80);
    box9 = new Box(700,260,80,80);
    box10 = new Box(620,260,80,80);
    box11 = new Box(700,180,80,80);
    box12 = new Box(620,180,80,80);
    box13 = new Box2(700,100,80,80);
    box14 = new Box2(620,100,80,80);

    //box15 = new Box(30,350,50,50);
    //box15.image = loadImage("sprites/Picture3.png");
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, width-300, 50)

        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    //box15.display();
    ground.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig3.display();
    pig3.score();
    log1.display();
    log3.display();
    box5.display();
    box6.display();
    log4.display();
    //log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory = [];
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/images.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}