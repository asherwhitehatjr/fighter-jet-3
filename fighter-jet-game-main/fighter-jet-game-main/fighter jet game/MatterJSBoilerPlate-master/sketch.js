var background_img;
var fighterjet_img;
var enemyfighterjet_img;

var fighterjet;
var enemyfighterjet_1;
var enemyfighterjet_3;
var enemyfighterjet_3;
var rocket;
var rocket_img;

var score = 0;
//var life = 10;

var gamestate = "play";
var gameState = "end";

var enemyfighterjetsGroup;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  background_img = loadImage("background red.png");
  fighterjet_img = loadImage("fighter jet f51.png");
  enemyfighterjet_img = loadImage("enemy fighter jet1.png");
  rocket_img = loadImage("rocket1.png");
 // enemyfighterjet_1 = loadImage("fighter jet f51.png");
 // enemyfighterjet_2 = loadImage("fighter jet f51.png");
  //enemyfighterjet_3 = loadImage("fighter jet f51.png");
  //enemyfighterjet_4 = loadImage("fighter jet f51.png");
  //enemyfighterjet_5 = loadImage("fighter jet f51.png");


}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//rocketGroup = new Group();

	//Create the Bodies Here.
	fighterjet = createSprite(1100,350,20,10);
	fighterjet.addImage(fighterjet_img);
	fighterjet.scale = 0.09;

	rocket1 = createSprite(500,500,20,10);
	rocket1.addImage(rocket_img);
	rocket1.scale = 0.05;

	rocket2 = createSprite(350,200,20,10);
	rocket2.addImage(rocket_img);
	rocket2.scale = 0.05;

	rocket3 = createSprite(100,550,20,10);
	rocket3.addImage(rocket_img);
	rocket3.scale = 0.05;

	rocket4 = createSprite(1000,200,20,10);
	rocket4.addImage(rocket_img);
	rocket4.scale = 0.05;

	rocket5 = createSprite(900,650,20,10);
	rocket5.addImage(rocket_img);
	rocket5.scale = 0.05;

  
	enemyfighterjet_1 = createSprite(200,400,20,10);
	enemyfighterjet_1.addImage(enemyfighterjet_img);
    enemyfighterjet_1.scale = 0.1;
	enemyfighterjet_1.visilbe = true;
  
	enemyfighterjet_2 = createSprite(200,700,20,10);
	enemyfighterjet_2.addImage(enemyfighterjet_img);
	enemyfighterjet_2.scale = 0.1;
	enemyfighterjet_2.visilbe = true;
  
	enemyfighterjet_3 = createSprite(500,300,20,10);
	enemyfighterjet_3.addImage(enemyfighterjet_img);
	enemyfighterjet_3.scale = 0.1;
	enemyfighterjet_3.visilbe = true;

	enemyfighterjet_4 = createSprite(700,600,20,10);
	enemyfighterjet_4.addImage(enemyfighterjet_img);
	enemyfighterjet_4.scale = 0.1;
	enemyfighterjet_4.visilbe = true;

	enemyfighterjet_5 = createSprite(900,300,20,10);
	enemyfighterjet_5.addImage(enemyfighterjet_img);
	enemyfighterjet_5.scale = 0.1;
	enemyfighterjet_5.visilbe = true;


	//enemyfighterjetsGroup = createGroup();




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(background_img,0,0,1500,850);

  Engine.update(engine);

  if(gamestate === "play"){



  fill("black");
  textSize(20);
  text("use ARROW keys to move",600,50);


  fill("black");
  textSize(25);
  text("FLY INTO ENEMY PLANES TO DESTROY THEM",500,750);

  fill("black");
  textSize(20);
  text("WHILE DODGING ENEMY FIRE -- DONT GET TO CLOSE -- OR YOU WILL BLOW UP",450,800);

  text("score = "+score,1300,80);
  textSize(25);
  fill("black");

  //text("life = "+life,1300,90);
 // textSize(25);
 //fill("black");



 //if(fighterjet.isTouching(enemyfighterjetsGroup)){
	//score = score+10;
 // }

  if(fighterjet.isTouching(enemyfighterjet_1)){
	enemyfighterjet_1.visible=false;
	//world.remove(enemyfighterjet_1);
	score = score+10;
	stroke("orange");
	text("amazing job",200,200);
 }

  if(fighterjet.isTouching(enemyfighterjet_2)){
	enemyfighterjet_2.visible=false;
	score = score+10;
	stroke("blue");
	text("great job",400,500);
  }

  if(fighterjet.isTouching(enemyfighterjet_3)){
	enemyfighterjet_3.visible=false;
	score = score+10;
	stroke("orange");
	text("epic",300,300);
	
  }

  if(fighterjet.isTouching(enemyfighterjet_4)){
	enemyfighterjet_4.visible=false;
	score = score+10;
	stroke("blue");
	text("you can do it",100,600);
 }

  if(fighterjet.isTouching(enemyfighterjet_5)){
	enemyfighterjet_5.visible=false;
	score = score+10;
	stroke("orange");
	text("amazing job",700,500);
  }

  if(fighterjet.isTouching(rocket1)){
	rocket1.visible = false;
	gamestate = "end";
  }

  if(fighterjet.isTouching(rocket2)){
	rocket2.visible = false;
	gamestate = "end";
  }

  if(fighterjet.isTouching(rocket3)){
	rocket3.visible = false;
	gamestate = "end";
  }

  if(fighterjet.isTouching(rocket4)){
	rocket4.visible = false;
	gamestate = "end";
  }

  if(fighterjet.isTouching(rocket5)){
	rocket5.visible = false;
	gamestate = "end";
  }

  spawnEnemyFighterJets();

  drawSprites();

  }
  

 else if(gameState === "end"){
	background("black");
	stroke("orange");
	fill("red");
    textSize(20);
	text("GAME OVER - UNLUCKY TRY AGAIN",700,400)
    }
  
}


function keyPressed(){

	if(keyCode===UP_ARROW){
    fighterjet.velocityY = -3;
	}

 if(keyCode===DOWN_ARROW){
   fighterjet.velocityY = 3;
    }

	if(keyCode===LEFT_ARROW){
		fighterjet.velocityX = -3;
	}

	if(keyCode===RIGHT_ARROW){
		fighterjet.velocityX = 3;
		}
}	

function spawnEnemyFighterJets(){
	if(enemyfighterjet_1.visible === false){
		enemyfighterjet_1 = createSprite(600,400,20,10);
	    enemyfighterjet_1.addImage(enemyfighterjet_img);
		enemyfighterjet_1.scale = 0.1;
		if(fighterjet.isTouching(enemyfighterjet_1)){
			enemyfighterjet_1.visible=false;}

	}
	if(enemyfighterjet_2.visible === false){
		enemyfighterjet_2 = createSprite(400,700,20,10);
	    enemyfighterjet_2.addImage(enemyfighterjet_img);
		enemyfighterjet_2.scale = 0.1;
		if(fighterjet.isTouching(enemyfighterjet_2)){
			enemyfighterjet_2.visible=false;}


	}

	if(enemyfighterjet_3.visible === false){
		enemyfighterjet_3 = createSprite(300,200,20,10);
	    enemyfighterjet_3.addImage(enemyfighterjet_img);
		enemyfighterjet_3.scale = 0.1;
		if(fighterjet.isTouching(enemyfighterjet_3)){
			enemyfighterjet_3.visible=false;}


	}

	if(enemyfighterjet_4.visible === false){
		enemyfighterjet_4 = createSprite(900,100,20,10);
	    enemyfighterjet_4.addImage(enemyfighterjet_img);
		enemyfighterjet_4.scale = 0.1;
		if(fighterjet.isTouching(enemyfighterjet_4)){
			enemyfighterjet_4.visible=false;}


	}

	if(enemyfighterjet_5.visible === false){
		enemyfighterjet_5 = createSprite(800,800,20,10);
	    enemyfighterjet_5.addImage(enemyfighterjet_img);
		enemyfighterjet_5.scale = 0.1;
		if(fighterjet.isTouching(enemyfighterjet_5)){
			enemyfighterjet_5.visible=false;}


	}
}












