class StageState {
  constructor(stageName, bgImage, mode) {
    this.gameWidth = 800;
    this.gameHeight = 600;
    this.borderSize = 10;
    this.stageName = stageName;
    this.bgImage = bgImage;
    this.paddle = new Paddle(this.gameWidth, this.gameHeight, this.borderSize);
    this.balls = [new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10, this.gameWidth, this.gameHeight)];
    this.tools = [];
    this.bricks = [];
    this.border = [];
    this.isCleared = false;
    this.isFailed = false;
    this.rows = 5;
    this.cols = 8;
    this.brickWidth = 800 / this.cols;
    this.brickHeight = 20;
    this.mode = mode;
  }

  update() {
    this.paddle.move();
    this.balls.forEach(ball => ball.update());
    this.balls = this.balls.filter(ball => !ball.isOutOfBounds());
    this.bricks = this.bricks.filter(brick => !brick.isDestroyed);
    if (this.balls.length === 0) this.isFailed = true;
    if (this.bricks.length === 0) this.isCleared = true;
  }

  setDifficultyMode() {
    console.log("mode:", this.mode);
    if (this.mode === 'easy') {
      this.toolDropRate = 0.5;
      this.toolProbabilities = {
        ballGrow: 0.6,
        ballShrink: 0.4,
        infiniteBall: 0.7,
        paddleMax: 0.6,
        paddleGrow: 1,
      };
    } else if (this.mode === 'hard') {
      this.toolDropRate = 0.4;
      this.toolProbabilities = {
        ballGrow: 0.6,
        ballShrink: 0.4,
        infiniteBall: 0.5,
        paddleMax: 0.6,
        paddleGrow: 1,
        ballShrink: 0.6,
        ballSpeedUp: 0.4,
        gravityUp: 0.3,
        timeIncrease: 0.6,
        timeDecrease: 0.6,
        paddleReverse: 1.5,
      };
    } else {
      throw new Error('Unknown mode');
    }
  }
}
