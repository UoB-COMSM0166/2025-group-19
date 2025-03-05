class Stage09Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage09.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Rooster");
    this.pageController.switchToStage();
  }
}
