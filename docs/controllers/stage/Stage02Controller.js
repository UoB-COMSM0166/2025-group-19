class Stage02Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.7; // 70% dropping rate
    this.toolProbabilities = {
      ballGrow: 0.5,
      ballShrink: 0.5,
      paddleGrow: 0.6,
      paddleMax: 0.3,
      paddleShrink: 0.8,
    };
  }
  initBricks() {
    this.state.bricks = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 12; j++) {
        this.state.bricks.push(new Brick(
          j * 60 + 50,
          i * 30 + 50,
          60,
          30
        ));
      }
    }
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}