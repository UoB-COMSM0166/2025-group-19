let mainController;
let skyBackground;
let bgMusic;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
}

function setup() {
  createCanvas(1000, 600);
  pageController = new PageController();
}

function draw() {
  pageController.update();
  pageController.display();
}

function keyPressed() {
  pageController.handleKeyPress(key);
}

function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
    bgMusic.setVolume(0);
  }
}
