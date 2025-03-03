class Stage04Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.5;
    this.toolProbabilities = {
      ballGrow: 0.3,
      ballShrink: 0.3,
      infiniteBall: 0.3,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage04.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Dragon');
  }
}