let balls = [];
let paddle;
let bricks = [];
let rows = 5;
let cols = 8;
let brickWidth;
let brickHeight = 20;
let powerUps = [];
let activePowerUps = { ball: null, paddle: null };
let powerUpTimers = { ball: 0, paddle: 0 };
let skyBackground;
let bgMusic;

function preload() {
  skyBackground = loadImage('assets/images/skyBackground.webp');
  bgMusic = loadSound('assets/sounds/bgMusic.mp3');
}

function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  balls.push(new Ball(paddle.x + paddle.width / 2, paddle.y - 10));
  brickWidth = width / cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let isRedBrick = random(1) < 0.3;
      bricks.push(new Brick(c * brickWidth, r * brickHeight, brickWidth, brickHeight, isRedBrick));
    }
  }
}

function draw() {
  background(skyBackground);
  paddle.display();
  paddle.move();

  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    ball.display();
    ball.update();
    ball.checkCollision(paddle, bricks);

    if (ball.isOutOfBounds()) {
      balls.splice(i, 1);
    }
  }

  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].isDestroyed) {
      if (bricks[i].isRed) {
        powerUps.push(new Tool(bricks[i].x + bricks[i].width / 2, bricks[i].y));
      }
      bricks.splice(i, 1);
    } else {
      bricks[i].display();
    }
  }

  for (let i = powerUps.length - 1; i >= 0; i--) {
    let powerUp = powerUps[i];
    powerUp.display();
    powerUp.update();

    if (powerUp.isCollected(paddle)) {
      activatePowerUp(powerUp.type);
      powerUps.splice(i, 1);
    } else if (powerUp.isOutOfBounds()) {
      powerUps.splice(i, 1);
    }
  }

  displayPowerUpTimers();

  if (balls.length === 0) {
    noLoop();
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
  }

  if (bricks.length === 0) {
    noLoop();
    fill(0, 255, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
  }
}

function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
    bgMusic.setVolume(0.5);
  }
}
