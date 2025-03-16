class Stage05Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
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
    this.pageController.setStageName("Snake");
    this.pageController.switchToStage();
  }
}
