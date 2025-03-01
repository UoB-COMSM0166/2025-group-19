class Stage11Controller extends StageController {
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
  
    // refer to stage 12
    getStageJsonPath() {
      return "./models/components/StagePattern/Stage11.json";
    }
  
    goToNextStage() {
      this.pageController.switchToStage('Pig');
    }
  }
  