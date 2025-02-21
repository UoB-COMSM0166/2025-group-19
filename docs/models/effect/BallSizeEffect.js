class BallSizeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    this.originalRadius = Ball.normalSizeBall;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    const ballRadius = this.sizeType === 'big' ? Ball.bigSizeBall : Ball.smallSizeBall;

    balls.forEach(ball => ball.radius = ballRadius);
    stageController.ballRadius = ballRadius; // new ball size
    balls.forEach(ball => ball.radius = ballRadius);
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;
    stageController.ballRadius = this.originalRadius; // new ball will be reset
    balls.forEach(ball => ball.radius = this.originalRadius);
  }
  
}
