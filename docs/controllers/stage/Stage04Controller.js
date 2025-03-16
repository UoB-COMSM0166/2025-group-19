class Stage04Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage04.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Dragon");
    this.pageController.switchToStage();
  }
}