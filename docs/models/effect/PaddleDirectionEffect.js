class PaddleDirectionEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
  }

	applyEffect(stageController) {
    const paddle = stageController.state.paddle;
    if(this.sizeType === 'reverse') {
			paddle.reverse = true; 
    }
  }

  removeEffect(stageController) {
    const paddle = stageController.state.paddle;
		paddle.reverse = false;
	}

}

