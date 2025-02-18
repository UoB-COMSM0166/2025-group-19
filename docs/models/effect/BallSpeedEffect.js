class BallSpeedEffect extends Effect {
  constructor(speedType, duration = 10000) {
    super(duration);
    this.speedType = speedType;
    this.multiplier = null;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    if (this.speedType === 'twotimes'){
      this.multiplier = 1.5;
    }
    else {
      throw new Error("applyEffect() should be given how many times");
    }

    balls.forEach(ball => ball.speedX *= this.multiplier);
    balls.forEach(ball => ball.speedY *= this.multiplier);
    stageController.update;
    stageController.ballSpeedX *= this.multiplier;
    stageController.ballSpeedY *= this.multiplier;
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;

    balls.forEach(ball => ball.speedX /= this.multiplier);
    balls.forEach(ball => ball.speedY /= this.multiplier);
    stageController.ballSpeedX /= this.multiplier;
    stageController.ballSpeedY /= this.multiplier;
  }
}