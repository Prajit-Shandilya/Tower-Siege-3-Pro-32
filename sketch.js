const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, ground, rope;
//var backgroundImg;
var score = 0;
//var bg = "sprites/day.png";
var gameState = "onSling";

/*function preload() {

    getBackgroundImg();
    //imageMode("CENTER");
    //image(this.bg, 768, 350, 1536, 700);

}*/

function setup() {
    var canvas = createCanvas(1536, 700);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(220, 400, 75, 75);
    ground = new Ground(768, 698, 1536, 40);
    sbase1 = new Ground(650, 600, 300, 20);
    sbase2 = new Ground(1150, 350, 170, 20);


    block1 = new Block(550, 558, 40, 60);
    block2 = new Block(590, 558, 40, 60);
    block3 = new Block(630, 558, 40, 60);
    block4 = new Block(670, 558, 40, 60);
    block5 = new Block(710, 558, 40, 60);
    block6 = new Block(750, 558, 40, 60);

    block7 = new Block2(590, 498, 40, 60);
    block8 = new Block2(630, 498, 40, 60);
    block9 = new Block2(670, 498, 40, 60);
    block10 = new Block2(710, 498, 40, 60);


    block11 = new Block3(630, 438, 40, 60);
    block12 = new Block3(670, 438, 40, 60);

    block13 = new Block(650, 378, 40, 60);

    block14 = new Block(1110, 308, 40, 60);
    block15 = new Block(1150, 308, 40, 60);
    block16 = new Block(1190, 308, 40, 60);
    block17 = new Block3(1130, 248, 40, 60);
    block18 = new Block3(1170, 248, 40, 60);

    block19 = new Block2(1150, 188, 40, 60);

    rope = new launcher(ball.body, { x: 220, y: 350 });

}

function draw() {
    background("skyblue");
    Engine.update(engine);
    ball.display();
    ground.display();
    sbase1.display();
    sbase2.display();

    noStroke();
    fill(0, 255, 0);
    textSize(50);
    text("Level 1", 560, 650);
    text("Level 2", 1055, 400);
    fill("yellow");
    text("Score : " + score, 200, 200);
    if (gameState === 'onSling') {
        fill("red");
        textFont("Georgia");

        text("Drag And Release The Hexagon To Hit The Blocks", 75, 70);
    }



    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();

    block10.display();

    block11.display();
    block12.display();
    block13.display();

    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();

    block19.display();

    rope.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();

}


function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    rope.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(ball.body, { x: 220, y: 450 });
        rope.attach(ball.body);
        gameState = "onSling";

    }
}
/*async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if (hour >= 06 && hour <= 18) {
        bg = "sprites/day.png";
    } else {
        bg = "sprites/night.png";
    }

    backgroundImg = loadImage(bg);

    console.log(backgroundImg);
}*/