class TimeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
  }

	applyEffect(stageController) {
		switch (this.sizeType) {
      case 'add':
				stageController.timer += 10;
        break;
      case 'minus':
				if(stageController.timer <= 10) {
					stageController.timer = 0;
					stageController.state.isStageFailed = true;
					stageController.showLoseDialog();
        	clearInterval(stageController.timerInterval);
				} else {
					stageController.timer -= 10;
				}
        break;
    }
	}

	removeEffect(stageController) {
    //
  }


}


