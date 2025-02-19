class BallSizeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    //this.originalRadius = 10;
  }

  applyEffect(stageController) {
    const balls = stageController.state.balls;
    this.originalRadius = stageController.ballRadius; //記錄當前大小
    
    const ballRadius = this.sizeType === 'big' ? this.originalRadius * 1.5 : this.originalRadius *0.7;
    stageController.ballRadius = ballRadius; // new ball size
    balls.forEach(ball => ball.radius = ballRadius);
  }

  removeEffect(stageController) {
    const balls = stageController.state.balls;
    stageController.ballRadius = this.originalRadius; // new ball will be reset
    balls.forEach(ball => ball.radius = this.originalRadius);
  }
  
}
