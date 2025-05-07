class Ball {
  static smallSizeBall = 8;
  static normalSizeBall = 15;
  static bigSizeBall = 25;

  constructor(x, y, gameWidth, gameHeight, borderSize,
              ballSpeedX, ballSpeedY, minSpeedY, maxSpeedY,
              radius = Ball.normalSizeBall, gravityOn = false) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = ballSpeedX;
    this.speedY = ballSpeedY;
    this.initialSpeedY = ballSpeedY;
    this.borderSize = borderSize;
    this.gameWidth = gameWidth - this.borderSize;
    this.gameHeight = gameHeight;
    this.gravityOn = gravityOn;
    this.gravity = 0.2;
    this.increaseSpeed = false;
    this.incSpeedVal = 1.5;
    this.incSpeedTime = 1200;
    this.isBeingAbsorbed = false;
    this.minSpeedY = minSpeedY,
    this.maxSppedY = maxSpeedY
  }

  display(canvas = window) {
    canvas.fill(255, 204, 0);
    canvas.circle(this.x, this.y, this.radius * 2);
  }

  update() {
    if (this.gravityOn) {
      this.speedY += this.gravity;
    } else {
      if (Math.abs(this.speedY) < this.minSpeedY) {
        this.speedY = this.y < this.gameHeight / 2 ? this.initialSpeedY : -this.initialSpeedY;
      }
    }
    if (this.increaseSpeed && Math.abs(this.speedY) <= this.maxSppedY) {
      this.speedY *= this.incSpeedVal;
      setTimeout(() => (this.speedY = Math.sign(this.speedY) * 5), this.incSpeedTime);
    }

    const minSpeed = 1;
    if (Math.abs(this.speedX) < minSpeed) this.speedX = Math.sign(this.speedX) !== 0 ? Math.sign(this.speedX) * minSpeed : minSpeed;

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x - this.radius < this.borderSize) {
      this.x = this.borderSize + this.radius;
      this.speedX *= -1;
    } else if (this.x + this.radius > this.gameWidth) {
      this.x = this.gameWidth - this.radius;
      this.speedX *= -1;
    }

    if (this.y - this.radius < this.borderSize) {
      this.y = this.borderSize + this.radius;
      this.speedY *= -1;
    }
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

    let closestBrick = hitBricks.reduce((closest, brick) => {
      let distA = Math.hypot(this.x - closest.x, this.y - closest.y);
      let distB = Math.hypot(this.x - brick.x, this.y - brick.y);
      return distB < distA ? brick : closest;
    });

    breakBlockSound.play();

    this.handleSpecialBricks(closestBrick, bricks, stageController);
    this.destroyBricks([closestBrick], sidebar);
    this.generateTools([closestBrick], tools, stageController);

    let prevX = this.x - this.speedX;
    let prevY = this.y - this.speedY;
    let hitFromLeft = prevX + this.radius <= closestBrick.x;
    let hitFromRight = prevX - this.radius >= closestBrick.x + closestBrick.width;
    let hitFromTop = prevY + this.radius <= closestBrick.y;
    let hitFromBottom = prevY - this.radius >= closestBrick.y + closestBrick.height;

    if (hitFromLeft || hitFromRight) {
      this.speedX *= -1;
      this.x = hitFromLeft
        ? closestBrick.x - this.radius - 1
        : closestBrick.x + closestBrick.width + this.radius + 1;
    }

    if (hitFromTop || hitFromBottom) {
      this.speedY *= -1;
      this.y = hitFromTop
        ? closestBrick.y - this.radius - 1
        : closestBrick.y + closestBrick.height + this.radius + 1;
    }
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

  handleSpecialBricks(brick, bricks, stageController) {
    if (brick.isBomb) {
      bricks.forEach(b => (b.y === brick.y ? (b.isDestroyed = true) : null));
    }

    if (brick.isBlackHole) {
      BlackHoleEffect.absorb(this, brick, stageController);
    }
  }

  destroyBricks(hitBricks, sidebar) {
    if (this.isBeingAbsorbed) return;
    const validBricks = hitBricks.filter(brick => !brick.isBlackHole);
    const damageRules = {
      [Ball.smallSizeBall]: bricks =>
        bricks.forEach(brick => (brick.damageLevel < 2 ? brick.damageLevel++ : brick.isDestroyed = true)),
      [Ball.bigSizeBall]: bricks =>
        bricks.slice(0, 3).forEach(brick => brick.isDestroyed = true),
      [Ball.normalSizeBall]: bricks => {
        if (bricks[0]) bricks[0].isDestroyed = true;
      }
    };
    if (damageRules[this.radius]) {
      damageRules[this.radius](validBricks);
    } else {
      throw new Error(`Unknown ball size: ${this.radius}`);
    }
    sidebar.addScore(100 * validBricks.length);
  }

  generateTools(hitBricks, tools, stageController) {
    hitBricks
    .filter(brick => !brick.isBlackHole)
    .forEach(brick => {
      const tool = stageController.generateTool(brick.x + brick.width / 2, brick.y + brick.height / 2);
      if (tool) tools.push(tool);
    });
  }

  isOutOfBounds() {
    return this.y - this.radius > this.gameHeight;
  }
}
