var fruit;
var fruit1, fruit2, fruit3, fruit4, fruitGroup;
var sword, swordImage;
var monster, monsterImage, monsterGroup;
var gameoverImage;

var score;

var PLAY = 1;
var END = 0;
var gameState = 1;

var cutSound,gameOverSound,gameSound;

function preload(){

      swordImage = loadImage("sword.png");
  
 monsterImage = loadAnimation("alien1.png", "alien2.png");

      fruit1 = loadImage("fruit1.png");
      fruit2 = loadImage("fruit2.png");
      fruit3 = loadImage("fruit3.png");
      fruit4 = loadImage("fruit4.png");

      gameoverImage = loadImage("gameover.png");
  }

function setup(){
  createCanvas(400, 400);

  sword = createSprite(200, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.75;

  gameover = createSprite(200, 200, 20, 20);
  gameover.addImage(gameoverImage);
  gameover.scale = 1;
  gameover.visible = false;

  fruitGroup = new Group();
  monsterGroup = new Group();
  
  score=0;

  sword.setCollider("circle", 0, 0, 40);

}

function draw(){
background(220);
  
  text("Score:" + score, 330, 20);

  if (gameState === PLAY) {
    sword.y = World.mouseY
    sword.x = World.mouseX

    fruits();
    enemy();

    if (sword.isTouching(fruitGroup)) {
      fruitGroup.destroyEach();
      score = score + 1;
    }

    if (sword.isTouching(monsterGroup)) {
    monsterGroup.destroyEach();
    }
    
  //  gameOver.visible=false;
    
  }
    
    else if (gameState === END) {
    fruitGroup.setVelocityEach(0);
    monsterGroup.setVelocityEach(0);  
      
    gameOver.addImage(gameoverImage);
    sword.x = 200;
    sword.y = 200;
    
    monsterGroup.destroyEach();
    fruitGroup.destroyEach();
      
    gameOver.visible=true;
   }
  
   drawSprites();
    
 }
  
  function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    fruit.velocityX=-9;
 //fruit.debug = true
    r = Math.round(random(1, 4));
  if (r == 1) {
      fruit.addImage(fruit1);
    } 
    
    else if (r == 2) {
      fruit.addImage(fruit2);
    }
    
    else if (r == 3) {
      fruit.addImage(fruit3);
    }
    
    else {
      fruit.addImage(fruit4);
    }

    fruit.y = Math.round(random(50, 340));
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
  }
}


function enemy() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    
    monsterGroup.add(monster);
  }
}
  
  
  
  
  
