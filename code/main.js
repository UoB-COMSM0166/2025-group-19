let currentScene;
let skyBackground;
let bgMusic;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
}

function setup() {
  createCanvas(800, 600);
  currentScene = new ChooseStage();
}

function draw() {
  background(0);
  currentScene.update();
  currentScene.display();

  if (currentScene.isCleared()) {
    currentScene = new ChooseStage();
  } else if (currentScene.isGameOver()) {
    currentScene = new ChooseStage();
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
