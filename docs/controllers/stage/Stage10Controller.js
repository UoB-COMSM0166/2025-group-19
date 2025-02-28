class Stage10Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.3; 
    this.toolProbabilities = {
      ballShrink: 0.3,
      paddleGrow: 0.1,
      paddleShrink: 0.3,
      ballSpeedUp: 0.2,
			timeIncrease: 0.2,
			timeDecrease: 0.3,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage10.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Dog');
  }
}
