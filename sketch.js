var player,playerWalking,playerAttack,playerIdle,badGuy,badGuyAttack;
var bg,bgImage;
var block,blockIMG;
var gameState = "play";

function preload(){
  bgImage = loadImage("bg.jpg");
  //playerWalking = loadAnimation("goodguywalk/goodguywalk1.jpg","goodguywalk/goodguywalk2.jpg","goodguywalk/goodguywalk3.jpg","goodguywalk/goodguywalk4.jpg"
  //,"goodguywalk/goodguywalk5.jpg","goodguywalk/goodguywalk6.jpg","goodguywalk/goodguywalk7.jpg","goodguywalk/goodguywalk8.jpg","goodguywalk/goodguywalk9.jpg,goodguywalk10.jpg");
  //playerWalking = loadAnimation("goodguywalk1.jpg","goodguywalk2.jpg");
}


function setup(){
  createCanvas(displayWidth,displayHeight-111);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgImage);
  bg.scale = 5;

  player = createSprite(200,200,20,20);
  //player.addAnimation("Walking",playerWalking);
  block = createSprite(200,250,50,50);
}



function draw(){
  background(0);
  player.setVelocity(0,0);
  //console.log(bg.x);


  if(gameState === "play"){
      bg.velocityX = -3;

     if(bg.x<350){
      bg.x = displayWidth/2;
    }

    if(keyDown("D")){
      player.velocityX = 3;
      
    }
    if(keyDown("A")){
      player.velocityX = -3;
      
    }
    if(keyWentDown("W")){
      player.velocityY = -50;
    }
      player.velocityY = player.velocityY+3;

      player.collide(block);

    if(player.y>950){
      gameState = "end";
    }

    if(gameState ==="end"){
      background(0);
      fill("white");
      text("Game Over",500,500);

    }

      console.log(player.y);
      drawSprites();
    }
  }