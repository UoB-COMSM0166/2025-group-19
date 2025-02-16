class Ball {
  constructor(x, y, gameWidth, gameHeight) {
    this.radius = 10;
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = -5;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  display(canvas = window) {
    canvas.fill(255, 204, 0);
    canvas.circle(this.x, this.y, this.radius * 2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x - this.radius < 0 || this.x + this.radius > this.gameWidth) {
      this.speedX *= -1;
    }

    if (this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  checkCollision(paddle, bricks, powerUps, sidebar) {
    if (
      this.y + this.radius > paddle.y &&
      this.y - this.radius < paddle.y + paddle.height &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.speedY *= -1;
      this.y = paddle.y - this.radius;
    }

    for (let brick of bricks) {
      if (
        !brick.isDestroyed &&
        this.x > brick.x &&
        this.x < brick.x + brick.width &&
        this.y - this.radius < brick.y + brick.height &&
        this.y + this.radius > brick.y
      ) {
        this.speedY *= -1;
        brick.isDestroyed = true;
        sidebar.addScore(100);

        if (brick.shouldDropTool) {
          powerUps.push(
            new Tool(brick.x + brick.width / 2, brick.y + brick.height / 2)
          );
        }
        break;
      }
    }
  }

  isOutOfBounds() {
    return this.y - this.radius > this.gameHeight;
  }
}
