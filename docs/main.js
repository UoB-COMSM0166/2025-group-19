let mainController;
let skyBackground;
let bgMusic;
let breakBlockSound;
let paddlePowerUpSound;
const globalKeyBindings = {
  moveLeft: 'ArrowLeft',
  moveRight: 'ArrowRight',
  shootBall: ' ',
  togglePaddle: 'ArrowUp'
};

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  mouseImg = loadImage('assets/images/characters/Rat.webp');
  cowImg = loadImage('assets/images/characters/Ox.webp');
  tigerImg = loadImage('assets/images/characters/Tiger.webp');
  rabbitImg = loadImage('assets/images/characters/Rabbit.webp');
  dragonImg = loadImage('assets/images/characters/Dragon.webp');
  snakeImg = loadImage('assets/images/characters/Snake.webp');
  horseImg = loadImage('assets/images/characters/Horse.webp');
  goatImg = loadImage('assets/images/characters/Goat.webp');
  monkeyImg = loadImage('assets/images/characters/Monkey.webp');
  roosterImg = loadImage('assets/images/characters/Rooster.webp');
  dogImg = loadImage('assets/images/characters/Dog.webp');
  pigImg = loadImage('assets/images/characters/Pig.webp');
  godImg = loadImage('assets/images/characters/God.webp');
  // Load sound effects
  bgMusic = loadSound('assets/sounds/bgMusic.mp3'); 
  breakBlockSound = loadSound('assets/sounds/breakBlockSound.mp3');
  paddlePowerUpSound = loadSound('assets/sounds/paddlePowerUp.mp3');
  // welcome-page
  roadImg = loadImage('assets/images/welcome-page/road.webp');
  cloudImg1 = loadImage('assets/images/welcome-page/cloud-1.webp');
  cloudImg2 = loadImage('assets/images/welcome-page/cloud-2.webp');
  boutiqueBitmaFont = loadFont('assets/font/BoutiqueBitmap9x9_Bold_1.5.ttf');
  this.teamImg = [
    loadImage('assets/images/welcome-page/team_areta.webp'),
    loadImage('assets/images/welcome-page/team_daisy.webp'),
    loadImage('assets/images/welcome-page/team_elle.webp'),
    loadImage('assets/images/welcome-page/team_erik.webp'),
    loadImage('assets/images/welcome-page/team_lucas.webp'),
    loadImage('assets/images/welcome-page/team_mikas.webp')
  ];
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
  dialogImg = loadImage('assets/images/dialog-picture.webp');
  dialogData = loadJSON('./data/story.json');
  // zodiac silhouette
  ratSilhouette = loadImage('assets/images/silhouette/rat.webp');
  oxSilhouette = loadImage('assets/images/silhouette/ox.webp');
  tigerSilhouette = loadImage('assets/images/silhouette/tiger.webp');
  rabbitSilhouette = loadImage('assets/images/silhouette/rabbit.webp');
  dragonSilhouette = loadImage('assets/images/silhouette/dragon.webp');
  snakeSilhouette = loadImage('assets/images/silhouette/snake.webp');
  horseSilhouette = loadImage('assets/images/silhouette/horse.webp');
  goatSilhouette = loadImage('assets/images/silhouette/goat.webp');
  monkeySilhouette = loadImage('assets/images/silhouette/monkey.webp');
  roosterSilhouette = loadImage('assets/images/silhouette/rooster.webp');
  dogSilhouette = loadImage('assets/images/silhouette/dog.webp');
  pigSilhouette = loadImage('assets/images/silhouette/pig.webp');
  // Set the volume for each sound effect
  bgMusic.setVolume(0.03);
  breakBlockSound.setVolume(0.05);
  paddlePowerUpSound.setVolume(0.05);
}

function setup() {
  createCanvas(windowWidth, windowHeight); // (1000, 600);
  textFont(boutiqueBitmaFont);
  pageController = new PageController();
  userStartAudio().then(() => {
    bgMusic.loop();
  });
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
