let currentScene;
let skyBackground;
let bgMusic;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
}

function setup() {
  createCanvas(1000, 600);
  currentScene = new WelcomePage();
}

function draw() {
  background(0);
  currentScene.update();
  currentScene.display();

  if (currentScene instanceof BasicStage) {
    if (currentScene.isCleared()) {
      currentScene.showWinDialog();
    } else if (currentScene.isGameOver()) {
      currentScene.showLoseDialog();
    }
  }
}

function keyPressed() {
  currentScene.handleKeyPress(key);
}

function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
    bgMusic.setVolume(0.5);
  }
}
