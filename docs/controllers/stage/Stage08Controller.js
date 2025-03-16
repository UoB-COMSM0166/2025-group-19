class Stage08Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage08.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Monkey");
    this.pageController.switchToStage();
  }
}