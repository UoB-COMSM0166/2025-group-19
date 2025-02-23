class Stage03Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.3;
    this.toolProbabilities = {
      ballGrow: 0.1,
			timeIncrease: 0.1,
			timeDecrease: 0.2,
			paddleReverse: 0.5,
    };
  }
	

	getStageJsonPath() {
		if (this.form === CurrentForm.STAGE1) {
			this.regenerate = true;
    	return "./models/components/StagePattern/Stage03_1.json";
		} else if (this.form === CurrentForm.STAGE2) {
			return "./models/components/StagePattern/Stage03_2.json";
		}
  }


  goToNextStage() {
    this.pageController.switchToStage('Stage04');
  }
}



