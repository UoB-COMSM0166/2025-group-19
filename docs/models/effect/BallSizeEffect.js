class BallSizeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    this.originalRadius = 10;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    const ballRadius = this.sizeType === 'big' ? 20 : 8;

    balls.forEach(ball => ball.radius = ballRadius);
    stageController.ballRadius = ballRadius; // new ball size
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;

    balls.forEach(ball => ball.radius = this.originalRadius);
    stageController.ballRadius = this.originalRadius; // new ball will be reset
  }
}
