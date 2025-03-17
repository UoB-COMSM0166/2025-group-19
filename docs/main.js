let mainController;
let skyBackground;
let bgMusic;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3'); 
  mouseImg = loadImage('assets/images/characters/Rat.png');
  cowImg = loadImage('assets/images/characters/Ox.png');
  tigerImg = loadImage('assets/images/characters/Tiger.png');
  rabbitImg = loadImage('assets/images/characters/Rabbit.png');
  dragonImg = loadImage('assets/images/characters/Dragon.png');
  snakeImg = loadImage('assets/images/characters/Snake.png');
  horseImg = loadImage('assets/images/characters/Horse.png');
  goatImg = loadImage('assets/images/characters/Goat.png');
  monkeyImg = loadImage('assets/images/characters/Monkey.png');
  roosterImg = loadImage('assets/images/characters/Rooster.png');
  dogImg = loadImage('assets/images/characters/Dog.png');
  pigImg = loadImage('assets/images/characters/Pig.png');
  godImg = loadImage('assets/images/characters/God.png');
  // welcome-page
  roadImg = loadImage('assets/images/welcome-page/road.png');
  cloudImg1 = loadImage('assets/images/welcome-page/cloud-1.png');
  cloudImg2 = loadImage('assets/images/welcome-page/cloud-2.png');
  zodiacCatchImg = loadImage('assets/images//welcome-page/zodiacCatch.png');
  boutiqueBitmaFont = loadFont('assets/font/BoutiqueBitmap9x9_Bold_1.5.ttf');
  // tool images
  ballGrow = loadImage('assets/images/tools/ballGrow.png');
  ballShrink = loadImage('assets/images/tools/ballShrink.png');
  ballSpeedUp = loadImage('assets/images/tools/ballSpeedUp.png');
  bomb = loadImage('assets/images/tools/bomb.png');
  gravityUp = loadImage('assets/images/tools/gravityUp.png');
  infiniteBall = loadImage('assets/images/tools/infiniteBall.png');
  paddleGrow = loadImage('assets/images/tools/paddleGrow.png');
  paddleMax = loadImage('assets/images/tools/paddleMax.png');
  paddleReverse = loadImage('assets/images/tools/paddleReverse.png');
  paddleShrink = loadImage('assets/images/tools/paddleShrink.png');
  timeDecrease = loadImage('assets/images/tools/timeDecrease.png');
  timeIncrease = loadImage('assets/images/tools/timeIncrease.png');
  // others
  dialogImg = loadImage('assets/images/dialog-picture.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // (1000, 600);
  textFont(boutiqueBitmaFont);
  pageController = new PageController();
}

function draw() {
  pageController.update();
  pageController.display();
}

function keyPressed() {
  pageController.handleKeyPress(key);
  if (pageController.currentPage instanceof StageController) {
    pageController.currentPage.keyboardController.handleKeyPressed(key);
  }
}

function keyReleased() {
  if (pageController.currentPage instanceof StageMapView) {
    pageController.handleKeyReleased(key);
  } else if (pageController.currentPage instanceof StageController) {
    pageController.currentPage.keyboardController.handleKeyReleased(key);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pageController.resizeWindow();
}
