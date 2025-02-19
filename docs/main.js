let mainController;
let skyBackground;
let bgMusic;
let roadImg;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
  roadImg = loadImage('assets/images/road.png');
  mouseImg = loadImage('assets/images/characters/mouse.png');
  cowImg = loadImage('assets/images/characters/cow.png');
  tigerImg = loadImage('assets/images/characters/tiger.png');
  rabbitImg = loadImage('assets/images/characters/rabbit.png');
  dragonImg = loadImage('assets/images/characters/dragon.png');
  snakeImg = loadImage('assets/images/characters/snake.png');
}

function setup() {
  createCanvas(1000, 600);
  pageController = new PageController();
  mouseController = new MouseController(pageController, bgMusic);
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

function mousePressed() {
  mouseController.handleMousePressed(mouseX, mouseY);
}
