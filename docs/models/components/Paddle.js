class Paddle {
  constructor(gameWidth, gameHeight, borderSize) {
    this.width = 120;
    this.height = 20;
    this.borderSize = borderSize;
    this.x = gameWidth / 2 - this.width / 2;
    this.y = gameHeight - this.height - 10;
    this.speed = 7;
    this.gameWidth = gameWidth;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.toggleOffset = 10;
    this.toggleOn = false;
    this.reverse = false;
  }

  display(canvas = window) {
    canvas.fill(255);
    canvas.rect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.isMovingLeft) {
      if (this.reverse) {
        this.x = min(this.x + this.speed, this.gameWidth - this.borderSize - this.width);
      } else {
        this.x = max(this.x - this.speed, this.borderSize);
      }
    }
    if (this.isMovingRight) {
      if (this.reverse) {
        this.x = max(this.x - this.speed, this.borderSize);
      } else {
        this.x = min(this.x + this.speed, this.gameWidth - this.borderSize - this.width);
      }
    }
  }

  moveLeft(isMoving) {
    this.isMovingLeft = isMoving;
  }

  moveRight(isMoving) {
    this.isMovingRight = isMoving;
  }

  togglePosition() {
    this.toggleOn = true;
    this.y -= this.toggleOffset;
    setTimeout(() => {
      this.y += this.toggleOffset;
      this.toggleOn = false;
    }, 300);
  }
}




