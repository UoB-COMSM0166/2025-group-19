class Stage02Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.3;
    this.toolProbabilities = {
      ballGrow: 0.1,
      ballShrink: 0.1,
      paddleGrow: 0.1,
      paddleMax: 0.1,
      paddleShrink: 0.1,
      ballSpeedUp: 0.5,
      gravityUp: 0.5,
      infiniteBall: 0.2,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage02.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage03');
  }
}