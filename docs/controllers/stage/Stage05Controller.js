class Stage05Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.4;
    this.toolProbabilities = {
      ballGrow: 0.3,
      ballShrink: 0.2,
			timeIncrease: 0.2,
			infiniteBall: 0.3,
			timeDecrease: 0.3,
    };
  }

	getStageJsonPath() {
		if (this.form === CurrentForm.STAGE1) {
			this.regenerate = true;
    	return "./models/components/StagePattern/Stage05_1.json";
		} else if (this.form === CurrentForm.STAGE2) {
			return "./models/components/StagePattern/Stage05_2.json";
		}
  }

  goToNextStage() {
    this.pageController.switchToStage('Rabbit');
  }
}
