class TimeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
  }

	applyEffect(stageController) {
		const sidebar = stageController.sidebar;

		// probably need to edit this to change timer in stageController isntead once Sidebar updates pushed to develop

		switch (this.sizeType) {
      case 'add':
				sidebar.timer += 10;
        break;
      case 'minus':
				sidebar.timer -= 10;
        break;
    }
	}

	removeEffect(stageController) {
    //
  }


}


