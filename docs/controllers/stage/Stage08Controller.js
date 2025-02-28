class Stage08Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.2; // 50% dropping rate
    this.toolProbabilities = {
      ballGrow: 0.3,
      ballShrink: 0.3,
      infiniteBall: 0.3,
      paddleGrow: 0.1,
      paddleMax: 0.1,
      paddleShrink: 0.1,
      ballSpeedUp: 0.5,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage08.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Monkey');
  }
}