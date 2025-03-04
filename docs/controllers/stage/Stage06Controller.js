class Stage06Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage06.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Horse');
  }
}