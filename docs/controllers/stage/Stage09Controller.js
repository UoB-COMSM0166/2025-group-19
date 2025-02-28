class Stage09Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.3;
    this.toolProbabilities = {
      ballGrow: 0.1,
      ballShrink: 0.1,
      paddleGrow: 0.1,
      paddleMax: 0.1,
      paddleShrink: 0.1,
      ballSpeedUp: 0.1,
      gravityUp: 0.1,
      infiniteBall: 0.1,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage09.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Rooster');
  }
}
