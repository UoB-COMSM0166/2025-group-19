class BallInfiniteEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    this.originalBallCount = 0;
  }

  applyEffect(stageController) {
    this.originalBallCount = stageController.ballRemain;
    stageController.ballRemain = Infinity;
  }

  removeEffect(stageController) {
    stageController.ballRemain = this.originalBallCount;
  }
}


