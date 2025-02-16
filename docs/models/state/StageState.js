class StageState {
  constructor(stageName, bgImage) {
    this.gameWidth = 800;
    this.gameHeight = 600;
    this.stageName = stageName;
    this.bgImage = bgImage;
    this.paddle = new Paddle(this.gameWidth, this.gameHeight);
    this.balls = [new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10, this.gameWidth, this.gameHeight)];
    this.tools = [];
    this.bricks = [];
    this.isCleared = false;
    this.isFailed = false;
    this.rows = 5;
    this.cols = 8;
    this.brickWidth = 800 / this.cols;
    this.brickHeight = 20;
  }

  update() {
    this.paddle.move();
    this.balls.forEach(ball => ball.update());
    this.balls = this.balls.filter(ball => !ball.isOutOfBounds());
    this.bricks = this.bricks.filter(brick => !brick.isDestroyed);
    if (this.balls.length === 0) this.isFailed = true;
    if (this.bricks.length === 0) this.isCleared = true;
  }
}
