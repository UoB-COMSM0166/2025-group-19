class Stage01Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
  }
  initBricks() {
    this.state.bricks = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
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