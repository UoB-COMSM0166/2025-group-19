class Stage07Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage07.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Goat");
    this.pageController.switchToStage();
  }
}