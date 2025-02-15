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
  
      if (this.x - this.radius < 0 || this.x + this.radius > width) {
        this.speedX *= -1;
      }
  
      if (this.y - this.radius < 0) {
        this.speedY *= -1;
      }
    }
  
    checkCollision(paddle, bricks) {
      if (this.y + this.radius > paddle.y && this.x > paddle.x && this.x < paddle.x + paddle.width) {
        this.speedY *= -1;
        this.y = paddle.y - this.radius;
      }
  
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
  