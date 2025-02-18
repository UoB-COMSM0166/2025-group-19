let mainController;
let skyBackground;
let bgMusic;
let roadImg;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
  roadImg = loadImage('assets/images/road.png');
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
