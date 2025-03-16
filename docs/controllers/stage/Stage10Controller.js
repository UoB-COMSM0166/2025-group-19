class Stage10Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage10.json";
  }

  goToNextStage() {
    this.pageController.setStageName("Dog");
    this.pageController.switchToStage();
  }
}
