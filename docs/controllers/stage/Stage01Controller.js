class Stage01Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage01.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Ox");
    this.pageController.switchToStage();
  }
}