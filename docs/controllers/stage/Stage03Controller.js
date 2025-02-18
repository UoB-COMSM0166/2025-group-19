class Stage03Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.6;
    this.toolProbabilities = {
      // ballGrow: 0.5,
      // ballShrink: 0.5,
      // paddleGrow: 0.6,
      // paddleMax: 0.3,
      // paddleShrink: 0.8,
			timeIncrease: 0.5,
			timeDecrease: 0.5,
			paddleReverse: 0.7,
    };
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

  // applyToolEffect(tool) {
  //     switch (tool.type) {

	// 				case 'timeIncrease':
	// 						new TimeEffect('add').applyEffect(this.sidebar);
	// 						break;
	// 				case 'timeDecrease':
	// 						new TimeEffect('minus').applyEffect(this.sidebar);
	// 						break;
	// 				case 'paddleReverse':
	// 						new PaddleDirectionEffect('reverse').applyEffect(this.state.balls, this.state.paddle);
	// 						break;
  //     }
  // }




