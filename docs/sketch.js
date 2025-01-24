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

function setup() {
  createCanvas(800, 600);
  background(255);

  // Initialize paddle
  paddle = new Paddle();

  // Initialize first ball
  balls.push(new Ball(paddle.x + paddle.width / 2, paddle.y - 10));

  // Initialize bricks
  brickWidth = width / cols;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let brickX = c * brickWidth;
      let brickY = r * brickHeight;
      let isRedBrick = random(1) < 0.3; // 30% chance to spawn red brick
      bricks.push(new Brick(brickX, brickY, brickWidth, brickHeight, isRedBrick));
    }
  }
}

function draw() {
  background(255);

  // Display and update paddle
  paddle.display();
  paddle.move();

  // Display and update balls
  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    ball.display();
    ball.update();
    ball.checkCollision(paddle, bricks);

    if (ball.isOutOfBounds()) {
      balls.splice(i, 1);
    }
  }

  // Display bricks
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].isDestroyed) {
      if (bricks[i].isRed) {
        powerUps.push(new PowerUp(bricks[i].x + bricks[i].width / 2, bricks[i].y));
      }
      bricks.splice(i, 1);
    } else {
      bricks[i].display();
    }
  }

  // Display and update power-ups
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

  // Display active power-up timers
  displayPowerUpTimers();

  // Check game over
  if (balls.length === 0) {
    noLoop();
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
  }

  // Check player victory
  if (bricks.length === 0) {
    noLoop();
    fill(0, 255, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === ' ') {
    balls.push(new Ball(paddle.x + paddle.width / 2, paddle.y - 10));
  }
}

function activatePowerUp(type) {
  if (type === 'ballGrow') {
    activePowerUps.ball = 'grow';
    powerUpTimers.ball = 10000;
    for (let ball of balls) {
      ball.radius = 15;
    }
    resetPowerUp('ball', 10000);
  } else if (type === 'ballShrink') {
    activePowerUps.ball = 'shrink';
    powerUpTimers.ball = 10000;
    for (let ball of balls) {
      ball.radius = 5;
    }
    resetPowerUp('ball', 10000);
  } else if (type === 'paddleGrow') {
    activePowerUps.paddle = 'grow';
    powerUpTimers.paddle = 10000;
    paddle.width = 160;
    resetPowerUp('paddle', 10000);
  } else if (type === 'paddleMax') {
    activePowerUps.paddle = 'max';
    powerUpTimers.paddle = 10000;
    paddle.width = 200;
    resetPowerUp('paddle', 10000);
  } else if (type === 'paddleShrink') {
    activePowerUps.paddle = 'shrink';
    powerUpTimers.paddle = 10000;
    paddle.width = 80;
    resetPowerUp('paddle', 10000);
  }
}

function resetPowerUp(category, duration) {
  setTimeout(() => {
    if (category === 'ball') {
      activePowerUps.ball = null;
      for (let ball of balls) {
        ball.radius = 10;
      }
    } else if (category === 'paddle') {
      activePowerUps.paddle = null;
      paddle.width = 120;
    }
  }, duration);
}

function displayPowerUpTimers() {
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  let y = 10;

  text("Active Power-Ups:", width - 200, y);
  y += 20;

  if (activePowerUps.ball) {
    text(`Ball: ${activePowerUps.ball} (${ceil(powerUpTimers.ball / 1000)}s)`, width - 200, y);
    y += 20;
  }

  if (activePowerUps.paddle) {
    text(`Paddle: ${activePowerUps.paddle} (${ceil(powerUpTimers.paddle / 1000)}s)`, width - 200, y);
  }

  // Update timers
  if (powerUpTimers.ball > 0) {
    powerUpTimers.ball -= deltaTime;
  }
  if (powerUpTimers.paddle > 0) {
    powerUpTimers.paddle -= deltaTime;
  }
}

// Paddle class
class Paddle {
  constructor() {
    this.width = 120;
    this.height = 20;
    this.x = width / 2 - this.width / 2;
    this.y = height - this.height - 10;
    this.speed = 7;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = max(this.x - this.speed, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = min(this.x + this.speed, width - this.width);
    }
  }
}

// Ball class
class Ball {
  constructor(x, y) {
    this.radius = 10;
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = -5;
  }

  display() {
    fill(255, 204, 0);
    circle(this.x, this.y, this.radius * 2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off walls
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.speedX *= -1;
    }

    if (this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  checkCollision(paddle, bricks) {
    // Paddle collision
    if (
      this.y + this.radius > paddle.y &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.speedY *= -1;
      this.y = paddle.y - this.radius; // Adjust position to avoid sticking
    }

    // Brick collision
    for (let brick of bricks) {
      if (!brick.isDestroyed &&
          this.x > brick.x &&
          this.x < brick.x + brick.width &&
          this.y - this.radius < brick.y + brick.height &&
          this.y + this.radius > brick.y) {
        this.speedY *= -1;
        brick.isDestroyed = true;
        break;
      }
    }
  }

  isOutOfBounds() {
    return this.y - this.radius > height;
  }
}

// Brick class
class Brick {
  constructor(x, y, width, height, isRed = false) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isDestroyed = false;
    this.isRed = isRed;
  }

  display() {
    if (!this.isDestroyed) {
      fill(this.isRed ? 255 : 0, this.isRed ? 0 : 255, 0);
      rect(this.x, this.y, this.width, this.height);
    }
  }
}

// PowerUp class
class PowerUp {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speed = 3;
    this.type = random(['ballGrow', 'ballShrink', 'paddleGrow', 'paddleMax', 'paddleShrink']);
  }

  display() {
    fill(0, 0, 255);
    textSize(16);
    textAlign(CENTER, CENTER);
    let symbol = '';
    if (this.type === 'ballGrow') symbol = 'B';
    if (this.type === 'ballShrink') symbol = 'S';
    if (this.type === 'paddleGrow') symbol = '<->';
    if (this.type === 'paddleMax') symbol = '<<->>';
    if (this.type === 'paddleShrink') symbol = '>-<';
    text(symbol, this.x, this.y);
  }

  update() {
    this.y += this.speed;
  }

  isCollected(paddle) {
    return (
      this.y + this.size / 2 > paddle.y &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    );
  }

  isOutOfBounds() {
    return this.y - this.size / 2 > height;
  }
}
