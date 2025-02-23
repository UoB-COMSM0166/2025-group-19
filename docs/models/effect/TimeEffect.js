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
				stageController.timer -= 10;
        break;
    }
	}

	removeEffect(stageController) {
    //
  }


}


