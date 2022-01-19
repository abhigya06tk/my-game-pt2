var background;
var kiwiImg, dragonImg, orangeImg, lemonImg;
var basket_img;
var broccolliImg , cabbageImg , carrotImg , pepperImg;
var virusGreen , virusOrange , virusBlue;
var syringeImg, soapImg , sanitizerImg , bottleImg;


function preload(){
  
 // backgroundImage = loadImage("background0.png");
  
  backImg = loadImage("background.jpg");
  basketImg = loadImage("basket.png");
  kiwiImg = loadImage("kiwi.png");
  dragonImg = loadImage("dragon.png");
  orangeImg = loadImage("orange2.png");
  lemonImg = loadImage("lemon.png");
  broccolliImg = loadImage("broccolli.png");
  cabbageImg = loadImage("cabbage.png");
  carrotImg = loadImage("carrot.png");
  pepperImg = loadImage("pepper2.png");
  virusGreen = loadImage("virus.png");
  virusOrange = loadImage("virus2.png");
  virusBlue = loadImage("virus3.png");
  syringeImg = loadImage("syringe.png");
  soapImg = loadImage("soap.png");
  sanitizerImg = loadImage("sanitizer.png");
  bottleImg = loadImage("bottle.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backImg);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  basket = createSprite(480,220,20,50);
  basket.addImage(basketImg); 
 // bow.scale = 1;

//    score = 0  
  
//   bowGroup = createGroup();
//   arrowGroup = createGroup();
//  greenGroup = createGroup();
//  redGroup = createGroup();
//  pinkGroup = createGroup();
//  blueGroup = createGroup();
  
 }

 function draw() {

//   // moving ground
//     background.velocityX = -3 

//     if (background.x < 0){
//       background.x = background.width/2;
//     }
  
//   //moving bow
//   bow.y = World.mouseY
  
//    // release arrow when space key is pressed
//   if (keyDown("space")) {
//     createArrow();
    
//   }
  
//   //creating continous enemies
//   var select_balloon = Math.round(random(1,4));
  
//   if (World.frameCount % 100 == 0) {
//     if (select_balloon == 1) {
//       redBalloon();
//     } else if (select_balloon == 2) {
//       greenBalloon();
//     } else if (select_balloon == 3) {
//       blueBalloon();
//     } else {
//       pinkBalloon();
//     }
//   }                             


  
   drawSprites();
//     text("Score: "+ score, 500,50);
 }


// function redBalloon() {
//   var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
//   return red
  
//   redGroup.add(red)
  
// }

// function blueBalloon() {
//   var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
//   blue.addImage(blue_balloonImage);
//   blue.velocityX = 3;
//   blue.lifetime = 150;
//   blue.scale = 0.1;
//   return blue;
// }

// function greenBalloon() {
//   var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
//   green.addImage(green_balloonImage);
//   green.velocityX = 3;
//   green.lifetime = 150;
//   green.scale = 0.1;
//   return green;   
// }

// function pinkBalloon() {
//   var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
//   pink.addImage(pink_balloonImage);
//   pink.velocityX = 3;
//   pink.lifetime = 150;
//   pink.scale = 1
//   return pink;
// }


// // Creating  arrows for bow
//  function createArrow() {
//   var arrow= createSprite(100, 100, 60, 10);
//   arrow.addImage(arrowImage);
//   arrow.x = 360;
//   arrow.y=bow.y;
//   arrow.velocityX = -4;
//   arrow.lifetime = 100;
//   arrow.scale = 0.3;
//   return arrow;
   
// }
