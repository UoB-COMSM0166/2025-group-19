class GravityEffect extends Effect {
  constructor(gravityType, duration = 10000) {
    super(duration);
    // this.gravityType = gravityType;
    // this.multiplier = null;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    balls.forEach(ball => ball.gravityOn = true);
    stageController.gravityOn = true;
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;
    balls.forEach(ball => ball.gravityOn = false);
    stageController.gravityOn = false;
  }
}