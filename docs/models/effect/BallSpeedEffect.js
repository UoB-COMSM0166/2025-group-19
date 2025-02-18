class BallSpeedEffect extends Effect {
  constructor(speedType, duration = 10000) {
    super(duration);
    this.speedType = speedType;
    // this.originalSpeedX = ball.speedX;
    // this.orgiinalSpeedY = ball.speedY;
    // this.originalRadius = 10;
    this.multiplier = null;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    // const ballSpeedMultiplier = null;
    if (this.speedType === 'twotimes'){
      this.multiplier = 1.5;
    }
    else {
      throw new Error("applyEffect() should be given how many times");
    }

    balls.forEach(ball => ball.speedX *= this.multiplier);
    balls.forEach(ball => ball.speedY *= this.multiplier);
    stageController.update;
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;

    balls.forEach(ball => ball.speedX /= this.multiplier);
    balls.forEach(ball => ball.speedY /= this.multiplier);
    // balls.forEach(ball => ball.speedX = this.originalSpeedX);
    // balls.forEach(ball => ball.speedY = this.originalSpeedY);
    // stageController.update; 
  }
}