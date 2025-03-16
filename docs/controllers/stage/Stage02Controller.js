class Stage02Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage02.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Tiger");
    this.pageController.switchToStage();
  }
}
