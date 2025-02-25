class Stage01Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.5; // 50% dropping rate
    this.toolProbabilities = {
      ballGrow: 0.3,
      ballShrink: 0.3,
      infiniteBall: 0.3,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage01.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Ox');
  }
}