const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var e;

function setup() {
    var canvas = createCanvas(1250, 580);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, 1500, 15);
    ground1 = new Ground((width / 2) + 75, height / 2, 300, 15);
    ground2 = new Ground(width - 200, height - 100, 300, 15);

    //1.
    //base || level1
    box1 = new Box1(700, (height / 2) - 15, 40, 40);
    box2 = new Box1(660, (height / 2) - 15, 40, 40);
    box3 = new Box1(740, (height / 2) - 15, 40, 40);
    box4 = new Box1(620, (height / 2) - 15, 40, 40);
    box5 = new Box1(780, (height / 2) - 15, 40, 40);
    box6 = new Box1(580, (height / 2) - 15, 40, 40);
    box7 = new Box1(820, (height / 2) - 15, 40, 40);

    //level2
    box8 = new Box2(700, (height / 2) - 55, 40, 40);
    box9 = new Box2(660, (height / 2) - 55, 40, 40);
    box10 = new Box2(740, (height / 2) - 55, 40, 40);
    box11 = new Box2(620, (height / 2) - 55, 40, 40);
    box12 = new Box2(780, (height / 2) - 55, 40, 40);

    //level3
    box13 = new Box3(660, (height / 2) - 95, 40, 40);
    box14 = new Box3(700, (height / 2) - 95, 40, 40);
    box15 = new Box3(740, (height / 2) - 95, 40, 40);

    //top || level4
    box16 = new Box4(700, (height / 2) - 135, 40, 40);

    //2.
    //base || level1
    box17 = new Box1(width - 200, height - 115, 40, 40);
    box18 = new Box1((width - 200) - 40, height - 115, 40, 40);
    box19 = new Box1((width - 200) + 40, height - 115, 40, 40);
    box20 = new Box1((width - 200) - 80, height - 115, 40, 40);
    box21 = new Box1((width - 200) + 80, height - 115, 40, 40);
    box22 = new Box1((width - 200) - 120, height - 115, 40, 40);
    box23 = new Box1((width - 200) + 120, height - 115, 40, 40);

    //level2
    box24 = new Box2(width - 200, height - 155, 40, 40);
    box25 = new Box2((width - 200) - 40, height - 155, 40, 40);
    box26 = new Box2((width - 200) + 40, height - 155, 40, 40);
    box27 = new Box2((width - 200) - 80, height - 155, 40, 40);
    box28 = new Box2((width - 200) + 80, height - 155, 40, 40);

    //level3
    box29 = new Box3((width - 200) - 40, height - 195, 40, 40);
    box30 = new Box3(width - 200, height - 195, 40, 40);
    box31 = new Box3((width - 200) + 40, height - 195, 40, 40);

    //top || level4
    box32 = new Box4(width - 200, height - 235, 40, 40);
    //end

    hex = new Hex(200, height - 200, 30, 30);
    slingshot = new SlingShot(hex.body, { x: 200, y: 380 });
}

function draw() {
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    //wrrites the text
    textSize(25);
    text("Press space to get more chances!!", width - 400, 50);
    text("Drag to release", 50, 50);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    ground.display();
    ground1.display();
    ground2.display();
    hex.display();
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(hex.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(hex.body);
    }
}