let mainController;
let skyBackground;
let bgMusic;
let roadImg;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3'); 
  mouseImg = loadImage('assets/images/characters/Rat.png');
  cowImg = loadImage('assets/images/characters/Ox.png');
  tigerImg = loadImage('assets/images/characters/Tiger.png');
  rabbitImg = loadImage('assets/images/characters/Rabbit.png');
  dragonImg = loadImage('assets/images/characters/Dragon.png');
  snakeImg = loadImage('assets/images/characters/Snake.png');
  // welcome-page
  roadImg = loadImage('assets/images/welcome-page/road.png');
  cloudImg1 = loadImage('assets/images/welcome-page/cloud-1.png');
  cloudImg2 = loadImage('assets/images/welcome-page/cloud-2.png');
  zodiacCatchImg = loadImage('assets/images//welcome-page/zodiacCatch.png');
  boutiqueBitmaFont = loadFont('assets/font/BoutiqueBitmap9x9_Bold_1.5.ttf');
}

function setup() {
  createCanvas(1000, 600);
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
  if (pageController.currentPage instanceof StageController) {
    pageController.currentPage.keyboardController.handleKeyReleased(key);
  }
}
