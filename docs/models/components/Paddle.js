class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 120;
    this.height = 20;
    this.x = gameWidth / 2 - this.width / 2;
    this.y = gameHeight - this.height - 10;
    this.speed = 7;
    this.gameWidth = gameWidth;
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }

  display(canvas = window) {
    canvas.fill(255);
    canvas.rect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.isMovingLeft) {
      this.x = max(this.x - this.speed, 0);
    }
    if (this.isMovingRight) {
      this.x = min(this.x + this.speed, this.gameWidth - this.width);
    }
  }

  moveLeft(isMoving) {
    this.isMovingLeft = isMoving;
  }

  moveRight(isMoving) {
    this.isMovingRight = isMoving;
  }
}
