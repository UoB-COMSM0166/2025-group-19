class Stage02Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.3;
    this.toolProbabilities = {
      ballGrow: 0,
      ballShrink: 0,
      paddleGrow: 0,
      paddleMax: 0,
      paddleShrink: 0,
      ballSpeedUp: 0,
      gravityUp: 0.5
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage02.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage03');
  }
}