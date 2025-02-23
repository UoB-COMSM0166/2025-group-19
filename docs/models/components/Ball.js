class Ball {
  static smallSizeBall = 8;
  static normalSizeBall = 15;
  static bigSizeBall = 25;

  constructor(x, y, gameWidth, gameHeight, radius=Ball.normalSizeBall) {
    this.radius = radius;
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

  checkCollision(paddle, bricks, tools, sidebar, stageController) {
    if (
      this.y + this.radius > paddle.y &&
      this.y - this.radius < paddle.y + paddle.height &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.speedY *= -1;
      this.y = paddle.y - this.radius;
    }
    let hitBricks = [];
    for (let brick of bricks) {
      if (
        !brick.isDestroyed &&
        this.x + this.radius > brick.x &&
        this.x - this.radius < brick.x + brick.width &&
        this.y + this.radius > brick.y &&
        this.y - this.radius < brick.y + brick.height
      ) {
        // unbreakable blocks 'eat' any balls that touch them
        if (brick.isUnbreakable) {
          this.x = this.gameHeight;
          this.y = this.gameWidth;
        } else {
          hitBricks.push(brick);
        }
      }
    }

    if (hitBricks.length > 0) {
      // destroy the brick by its size
      if (this.radius == Ball.smallSizeBall) {
        hitBricks.forEach(brick => {
          if (brick.damageLevel < 2) {
            brick.damageLevel += 1;
          } else {
            brick.isDestroyed = true;
            sidebar.addScore(100);
          }
        });
      } else if (this.radius == Ball.bigSizeBall) {
        for (let i = 0; i < Math.min(3, hitBricks.length); i++) {
          hitBricks[i].isDestroyed = true;
          sidebar.addScore(100);
        }
      } else if (this.radius == Ball.normalSizeBall){
        hitBricks[0].isDestroyed = true;
        sidebar.addScore(100);
      } else {
        throw new Error('unknown size of balls!!');
      }

      // generate tools
      hitBricks.forEach(brick => {
        const tool = stageController.generateTool(
          brick.x + brick.width / 2,
          brick.y + brick.height / 2
        );

        if (tool) {
          tools.push(tool);
        }
      });

      // reverse Y speed
      this.speedY *= -1;
    }
  }


  isOutOfBounds() {
    return this.y - this.radius > this.gameHeight;
  }
}
