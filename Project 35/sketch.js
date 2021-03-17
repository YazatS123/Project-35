//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg1, dogImg2;
function preload(){
  //dogImg1 = loadImage("images/dogImg.png");
  //dogImg2 = loadImage("images/dogImg2.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 50, 50);
  //dog.addAnimation("dog", dogImg1)
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here

}



