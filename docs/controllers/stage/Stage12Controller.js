class Stage12Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage12.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Rat");
    this.pageController.switchToStage();
  }
}
