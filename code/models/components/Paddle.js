class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 120;
    this.height = 20;
    this.x = gameWidth / 2 - this.width / 2;
    this.y = gameHeight - this.height - 10;
    this.speed = 7;
    this.gameWidth = gameWidth;
  }

  display(canvas = window) {
    canvas.fill(255);
    canvas.rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = max(this.x - this.speed, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = min(this.x + this.speed, this.gameWidth - this.width);
    }
  }
}
