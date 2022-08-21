//creates the hero, aliens and background
var hero;
var alien1, alien2;
var BG_Img;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var chances = 3;
var restart, restartImg, powerUp1,powerUp2;
var powerUpsGroup;

//creates the physics engine's needed constanrs
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

function preload() {
	//loads the world
    BG_Img = loadImage("pac-maze.png");
    restartImg = loadImage("Restart.png");
    powerUp1 = loadImage("swordPowerUp.png");
    powerUp2 = loadImage("speedPowerUp.png");
    powerUp3 = loadImage("extraLife.png");
}

function setup() {
	//creates canvas, engine, and world
    createCanvas(600, 600);
	engine = Engine.create();
    world = engine.world;

    powerUpsGroup = new Group();

    restart = createSprite(300,300);
    restart.addImage(restartImg);
    restart.scale = 0.5;
    restart.visible = false;

    //creates hero and civilian as sprites
	hero = createSprite(50, 280, 20, 20);
	civilian1 = createSprite(300, 300, 20, 20);

    //creates all the boundaries that the hero and aliens can't pass through
	ground = new Ground(300,height,600,20);
    //ground.visible = false;
    wall = new Ground(20,300,7,600);
    wall1 = new Ground(10,300,7,600);
    wall2 = new Ground(300,580,600,7);
    wall3 = new Ground(583,300,10,600);
    wall4 = new Ground(300,20,600,7);
    wall5 = new Ground(55, 70, 8, 35);
    wall6 = new Ground(80, 55, 55, 8 );
    wall7 = new Ground(110,70,8,35);
    wall8 = new Ground(83, 93, 55, 8)
    wall9 = new Ground(170, 70, 8, 35);
    wall10 = new Ground(200, 55, 55, 8);
    wall11 = new Ground(230,70,8,35);
    wall12 = new Ground(203, 93, 55, 8);
    wall13 = new Ground(370,70, 8, 35);
    wall14 = new Ground(400, 55, 55, 8);
    wall15 = new Ground(430,70,8,35);
    wall16 = new Ground(400, 93, 55, 8);
    wall17 = new Ground(487,70, 8, 35);
    wall18 = new Ground(517, 55, 55, 8);
    wall19 = new Ground(545,70,8,35);
    wall20 = new Ground(514, 93, 55, 8);
    wall21 = new Ground(55, 140, 8, 27);
    wall22 = new Ground(83, 128, 55, 8);
    wall23 = new Ground(112, 140, 8, 27);
    wall24 = new Ground(80, 154, 55, 8);
    wall25 = new Ground(490, 140, 8, 27);
    wall26 = new Ground(520, 128, 55, 8);
    wall27 = new Ground(542, 140, 8, 27);
    wall28 = new Ground(514, 154, 55, 8);
    wall29 = new Ground(282, 53, 10, 85)
    wall30 = new Ground(318, 53, 10, 85)
    wall31 = new Ground(300, 93, 40, 5)
    wall32 = new Ground(300,115,120,8);
    wall33 = new Ground(362,125,8,22);
    wall34 = new Ground(340,139,50,8);
    wall35 = new Ground(262,139,50,8);
    wall36 = new Ground(236,125,8,22);
    wall37 = new Ground(285,161,8,85);
    wall38 = new Ground(315,161,8,85);
    wall39 = new Ground(300,205,22,7);
    wall40 = new Ground(161,205,8,120);
    wall41 = new Ground(181,205,8,120);
    wall42 = new Ground(170,140,20,8);
    wall43 = new Ground(170,265,20,8);
    wall44 = new Ground(217,190,60,8);
    wall45 = new Ground(219,219,63,8);
    wall46 = new Ground(250,205,8,23);
    wall47 = new Ground(350,205,8,23);
    wall48 = new Ground(390,190,70,8);
    wall49 = new Ground(390,220,70,8);
    wall50 = new Ground(440,200,8,130);
    wall51 = new Ground(415,200,8,130);
    wall52 = new Ground(427,140,19,8);
    wall53 = new Ground(430,265,22,8);
    wall56 = new Ground(105,210,15,80);
    wall57 = new Ground(495,210,17,78);
    wall58 = new Ground(50,240,100,20);
    wall59 = new Ground(545,243,119,17);
    wall60 = new Ground(60,380,100,17);
    wall61 = new Ground(105,345,20,78);
    wall62 = new Ground(535,380,100,17);
    wall63 = new Ground(495,345,17,85);
    wall64 = new Ground(60,177,85,17);
    wall65 = new Ground(530,177,85,17);
    wall66 = new Ground(550,315,130,17);
    wall67 = new Ground(60,315,110,17);
    wall68 = new Ground(171,351,28,70);
    wall69 = new Ground(429,347,28,70);
    wall70 = new Ground(373,296,7,79);
    wall71 = new Ground(223,296,7,79);
    wall72 = new Ground(251,260,45,7);
    wall73 = new Ground(344,259,45,7);
    wall74 = new Ground(297,331,150,7);
    wall75 = new Ground(297,355,125,7);
    wall76 = new Ground(297,382,125,7);
    wall77 = new Ground(236,366,7,28);
    wall78 = new Ground(363,366,7,28);
    wall79 = new Ground(285,414,7,55);
    wall80 = new Ground(314,414,7,56);
    wall81 = new Ground(297,445,28,7);
    wall82 = new Ground(195,423,62,7);
    wall83 = new Ground(195,446,62,7);
    wall84 = new Ground(160,434,7,26);
    wall85 = new Ground(231,434,7,26);
    wall86 = new Ground(403,417,67,7);
    wall87 = new Ground(403,440,67,7);
    wall88 = new Ground(368,430,7,20);
    wall89 = new Ground(440,428,7,20);
    wall90 = new Ground(86,428,50,7);
    wall91 = new Ground(86,445,50,7);
    wall92 = new Ground(56,435,7,15);
    wall93 = new Ground(116,460,7,74);
    wall94 = new Ground(92,472,7,50);
    wall95 = new Ground(103,500,20,7);
    wall96 = new Ground(300,470,130,7);
    wall97 = new Ground(300,493,130,7);
    wall98 = new Ground(362,480,7,14);
    wall99 = new Ground(236,482,7,14);
    wall100 = new Ground(283,526,7,61);
    wall101 = new Ground(314,526,7,61);
    wall102 = new Ground(299,559,22,7);
    wall103 = new Ground(34,488,25,28);
    wall104 = new Ground(565,482,25,28);
    wall105 = new Ground(143,560,180,7);
    wall106 = new Ground(454,560,180,7);
    wall107 = new Ground(143,535,180,7);
    wall108 = new Ground(455,535,180,7);
    wall109 = new Ground(56,548,7,15);
    wall110 = new Ground(235,548,7,15);
    wall111 = new Ground(363,548,7,15);
    wall112 = new Ground(542,548,7,15);
    wall113 = new Ground(173,503,35,55);
    wall114 = new Ground(425,503,35,55);
    wall115 = new Ground(173,470,23,7);
    wall116 = new Ground(425,470,23,7);
    wall117 = new Ground(487,454,7,72);
    wall118 = new Ground(512,454,7,72);
    wall119 = new Ground(519,422,52,7);
    wall120 = new Ground(519,440,52,7);
    wall121 = new Ground(547,430,7,13);
    wall122 = new Ground(500,493,20,7);
	
    // AFTER THIS, I make all the walls invisible
    // AFTER THIS, the hero and aliens should bounce off the boundaries
    // AFTER THIS, I need to make gamestates and write the code to say if the hero is touching civilian, then the hero wins.
    // But, the hero is only able to get through the white square after he beats the first and second waves of aliens
    // AFTER THIS, I make the second wave of aliens(6 of them) come in with a random velocity
}


function draw() {
	//adds bg image to the background
    background(BG_Img);
	Engine.update(engine);
    //shows the coordinates for the mouse(I used this to hel me place the maze)
    fill("yellow");
    text(mouseX+","+mouseY, 50, 50);
    textSize(20);
    //display's the user's scores and lives
    text("Score:"+score, 490, 50);
    text("Lives:"+chances, 465,520);
	
    if(gameState === PLAY){
        //calls power-ups function
        spawnPowerUps();
        //gives aliens velocity and shapecolor
	    hero.shapeColor = "white";
        //same concept for the powerups function
        alien1 = createSprite(230, 240, 20, 20);
        alien2 = createSprite(370, 240, 20, 20);
        alien1.velocityX = -3;
	    alien1.shapeColor = "green";
	    alien2.velocityX = 3;
	    alien2.shapeColor = "green";
        
        if(hero.isTouching(powerUpsGroup)){
            //adds the random power-up effect which is...
            //depending on this variable, the hero's power-ups will change
            //it can either let the hero eat aliens, more speed to hero, or add 1 more life if collided with powerUp
            var select_PowerUp = Math.round(random(1,2));
            if(select_PowerUp === 1 && hero.collide(powerUpsGroup)){
                hero.shapeColor = "red";
                //this power-up/function lets hero eat aliens
                canEat();
            }
            if(select_PowerUp === 2 && hero.collide(powerUpsGroup)){
                //this powerUp adds one more life
                extraLife();
            }
        }
        if(alien1.collide(hero)||alien2.collide(hero)){
            chances = chances - 1;
        }
        if(chances === 0 || chances < 0){
            gameState = END;
        }
    }
    else if(gameState === END){
        background("black");
        powerUpsGroup.destroyEach();
        aliensGroup.destroyEach();
        restart.visible = false;
        text("Game Over! Press the restart button to play the game again!");

        if(gameState === END && mousePressed(restart)){
            gameState = PLAY;
        }
    }
    
    //displays all the walls and boundaries
	ground.display();
    wall.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    wall31.display();
    wall32.display();
    wall33.display();
    wall34.display();
    wall35.display();
    wall36.display();
    wall37.display();
    wall38.display();
    wall39.display();
    wall40.display();
    wall41.display();
    wall42.display();
    wall43.display();
    wall44.display();
    wall45.display();
    wall46.display();
    wall47.display();
    wall48.display();
    wall49.display();
    wall50.display();
    wall51.display();
    wall52.display();
    wall53.display();
    wall56.display();
    wall57.display();
    wall58.display();
    wall59.display();
    wall60.display();
    wall61.display();
    wall62.display();
    wall63.display();
    wall64.display();
    wall65.display();
    wall66.display();
    wall67.display();
    wall68.display();
    wall69.display();
    wall70.display();
    wall71.display();
    wall72.display();
    wall73.display();
    wall74.display();
    wall75.display();
    wall76.display();
    wall77.display();
    wall78.display();
    wall79.display();
    wall80.display();
    wall81.display();
    wall82.display();
    wall83.display();
    wall84.display();
    wall85.display();
    wall86.display();
    wall87.display();
    wall88.display();
    wall89.display();
    wall90.display();
    wall91.display();
    wall92.display();
    wall93.display();
    wall94.display();
    wall95.display();
    wall96.display();
    wall97.display();
    wall98.display();
    wall99.display();
    wall100.display();
    wall101.display();
    wall102.display();
    wall103.display();
    wall104.display();
    wall105.display();
    wall106.display();
    wall107.display();
    wall108.display();
    wall109.display();
    wall110.display();
    wall111.display();
    wall112.display();
    wall113.display();
    wall114.display();
    wall115.display();
    wall116.display();
    wall117.display();
    wall118.display();
    wall119.display();
    wall120.display();
    wall121.display();
    wall122.display();
	
    hero.bounceOff(wall);
    hero.bounceOff(wall1);
    hero.bounceOff(wall2);
    hero.bounceOff(wall3);
    hero.bounceOff(wall4);
    hero.bounceOff(wall5);
    hero.bounceOff(wall6);
    hero.bounceOff(wall7);
    hero.bounceOff(wall8);
    hero.bounceOff(wall9);
    hero.bounceOff(wall10);
    hero.bounceOff(wall11);
    hero.bounceOff(wall12);
    hero.bounceOff(wall13);
    hero.bounceOff(wall14);
    hero.bounceOff(wall15);
    hero.bounceOff(wall16);
    hero.bounceOff(wall17);
    hero.bounceOff(wall18);
    hero.bounceOff(wall19);
    hero.bounceOff(wall20);
    hero.bounceOff(wall21);
    hero.bounceOff(wall22);
    hero.bounceOff(wall23);
    hero.bounceOff(wall24);
    hero.bounceOff(wall25);
    hero.bounceOff(wall26);
    hero.bounceOff(wall27);
    hero.bounceOff(wall28);
    hero.bounceOff(wall29);
    hero.bounceOff(wall30);
    hero.bounceOff(wall31);
    hero.bounceOff(wall32);
    hero.bounceOff(wall33);
    hero.bounceOff(wall34);
    hero.bounceOff(wall35);
    hero.bounceOff(wall36);
    hero.bounceOff(wall37);
    hero.bounceOff(wall38);
    hero.bounceOff(wall39);
    hero.bounceOff(wall40);
    hero.bounceOff(wall41);
    hero.bounceOff(wall42);
    hero.bounceOff(wall43);
    hero.bounceOff(wall44);
    hero.bounceOff(wall45);
    hero.bounceOff(wall46);
    hero.bounceOff(wall47);
    hero.bounceOff(wall48);
    hero.bounceOff(wall49);
    hero.bounceOff(wall50);
    hero.bounceOff(wall51);
    hero.bounceOff(wall52);
    hero.bounceOff(wall53);
    hero.bounceOff(wall54);
    hero.bounceOff(wall55);
    hero.bounceOff(wall56);
    hero.bounceOff(wall57);
    hero.bounceOff(wall58);
    hero.bounceOff(wall59);
    hero.bounceOff(wall60);
    hero.bounceOff(wall61);
    hero.bounceOff(wall62);
    hero.bounceOff(wall63);
    hero.bounceOff(wall64);
    hero.bounceOff(wall65);
    hero.bounceOff(wall66);
    hero.bounceOff(wall67);
    hero.bounceOff(wall68);
    hero.bounceOff(wall69);
    hero.bounceOff(wall70);
    hero.bounceOff(wall71);
    hero.bounceOff(wall72);
    hero.bounceOff(wall73);
    hero.bounceOff(wall74);
    hero.bounceOff(wall75);
    hero.bounceOff(wall76);
    hero.bounceOff(wall77);
    hero.bounceOff(wall78);
    hero.bounceOff(wall79);
    hero.bounceOff(wall80);
    hero.bounceOff(wall81);
    hero.bounceOff(wall82);
    hero.bounceOff(wall83);
    hero.bounceOff(wall84);
    hero.bounceOff(wall85);
    hero.bounceOff(wall86);
    hero.bounceOff(wall87);
    hero.bounceOff(wall88);
    hero.bounceOff(wall89);
    hero.bounceOff(wall90);
    hero.bounceOff(wall91);
    hero.bounceOff(wall92);
    hero.bounceOff(wall93);
    hero.bounceOff(wall94);
    hero.bounceOff(wall95);
    hero.bounceOff(wall96);
    hero.bounceOff(wall97);
    hero.bounceOff(wall98);
    hero.bounceOff(wall99);
    hero.bounceOff(wall100);
    hero.bounceOff(wall101);
    hero.bounceOff(wall102);
    hero.bounceOff(wall103);
    hero.bounceOff(wall104);
    hero.bounceOff(wall105);
    hero.bounceOff(wall106);
    hero.bounceOff(wall107);
    hero.bounceOff(wall108);
    hero.bounceOff(wall110);
    hero.bounceOff(wall111);
    hero.bounceOff(wall112);
    hero.bounceOff(wall113);
    hero.bounceOff(wall114);
    hero.bounceOff(wall115);
    hero.bounceOff(wall116);
    hero.bounceOff(wall117);
    hero.bounceOff(wall118);
    hero.bounceOff(wall119);
    hero.bounceOff(wall120);
    hero.bounceOff(wall121);
    hero.bounceOff(wall122);
	drawSprites();
}

//the function that lets the hero move.
function keyPressed() {
	//write code here
	if (keyCode === LEFT_ARROW) {
		hero.velocityX = hero.velocityX - 5;	
	}

	if (keyCode === RIGHT_ARROW) {
	hero.velocityX = hero.velocityX + 5;	
	}

	if (keyCode === DOWN_ARROW) {
		hero.velocityY = hero.velocityY + 5;
	}
	if(keyCode === UP_ARROW){
        hero.velocityY = hero.velocityY - 5;

    }
}

function spawnPowerUps(){
    var powerUp = createSprite(140,108,10,40);
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: powerUp.addImage(powerUp1);
              break;
      case 2: powerUp.addImage(powerUp2);
              break;
      default: break;
    }
    powerUp.scale = 0.2;
    powerUp.lifeTime = -1;
    powerUpsGroup.add(powerUp);
}

function canEat(){
    if(hero.collide(aliensGroup)){
        aliensGroup.destroyEach();
    }
}

function extraLife(){
    chances = chances + 1;
}
