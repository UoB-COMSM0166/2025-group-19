class Ball {
  static smallSizeBall = 8;
  static normalSizeBall = 15;
  static bigSizeBall = 25;

  constructor(x, y, gameWidth, gameHeight, radius = Ball.normalSizeBall, ballSpeedX = random(-3, 3), ballSpeedY = -10, gravityOn = false) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = ballSpeedX;
    this.speedY = ballSpeedY;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gravityOn = gravityOn;
    this.gravity = 0.1;
    this.increaseSpeed = false;
    this.incSpeedVal = 1.5;
    this.incSpeedTime = 1200;
  }

  display(canvas = window) {
    canvas.fill(255, 204, 0);
    canvas.circle(this.x, this.y, this.radius * 2);
  }

  update(state) {
    if (this.gravityOn) {
      this.speedY += this.gravity;
    }
    if (this.increaseSpeed && Math.abs(this.speedY) <= 15) {
      this.speedY *= this.incSpeedVal;
      setTimeout(() => (this.speedY = Math.sign(this.speedY) * 5), this.incSpeedTime);
    }
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x - this.radius < 0 || this.x + this.radius > this.gameWidth) this.speedX *= -1;
    if (this.y - this.radius < 0) this.speedY *= -1;
  }

  checkCollision(paddle, bricks, tools, sidebar, stageController) {
    this.handlePaddleCollision(paddle, stageController);
    this.handleBrickCollision(bricks, tools, sidebar, stageController);
  }

  handlePaddleCollision(paddle, stageController) {
    if (
      this.y + this.radius > paddle.y &&
      this.y - this.radius < paddle.y + paddle.height &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.applyPaddleBounce(paddle);
      if (stageController.state.paddle.toggleOn) {
        this.increaseSpeed = true;
        setTimeout(() => (this.increaseSpeed = false), 300);
      }
    }
  }

  applyPaddleBounce(paddle) {
    let hitPosition = (this.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
    let angle = hitPosition * (Math.PI / 3);
    let speed = Math.sqrt(this.speedX ** 2 + this.speedY ** 2);
    this.speedX = speed * Math.sin(angle);
    this.speedY = -Math.abs(speed * Math.cos(angle));
    this.y = paddle.y - this.radius;
  }

  handleBrickCollision(bricks, tools, sidebar, stageController) {
    let hitBricks = bricks.filter(brick => this.isCollidingWithBrick(brick));
    if (hitBricks.length === 0) return;

    hitBricks.forEach(brick => this.handleSpecialBricks(brick, bricks));
    this.destroyBricks(hitBricks, sidebar);
    this.generateTools(hitBricks, tools, stageController);
    this.speedY *= -1;
  }

  isCollidingWithBrick(brick) {
    return (
      !brick.isDestroyed &&
      this.x + this.radius > brick.x &&
      this.x - this.radius < brick.x + brick.width &&
      this.y + this.radius > brick.y &&
      this.y - this.radius < brick.y + brick.height
    );
  }

  handleSpecialBricks(brick, bricks) {
    if (brick.isBomb) {
      bricks.forEach(b => (b.y === brick.y ? (b.isDestroyed = true) : null));
    }
    if (brick.isUnbreakable) {
      this.x = this.gameHeight;
      this.y = this.gameWidth;
    }
  }

  destroyBricks(hitBricks, sidebar) {
    switch (this.radius) {
      case Ball.smallSizeBall:
        hitBricks.forEach(brick => (brick.damageLevel < BrickDamageLevel.BROKEN ? brick.damageLevel++ : (brick.isDestroyed = true)));
        break;
      case Ball.bigSizeBall:
        hitBricks.slice(0, 3).forEach(brick => (brick.isDestroyed = true));
        break;
      case Ball.normalSizeBall:
        hitBricks[0].isDestroyed = true;
        break;
      default:
        throw new Error('Unknown ball size!');
    }
    sidebar.addScore(100 * hitBricks.length);
  }

  generateTools(hitBricks, tools, stageController) {
    hitBricks.forEach(brick => {
      const tool = stageController.generateTool(brick.x + brick.width / 2, brick.y + brick.height / 2);
      if (tool) tools.push(tool);
    });
  }

  isOutOfBounds() {
    return this.y - this.radius > this.gameHeight;
  }
}
