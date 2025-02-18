class Stage03Controller extends StageController {
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
    this.pageController.switchToStage('Stage04');
  }

  applyToolEffect(tool) {
      switch (tool.type) {
          // case 'ballGrow':
          //     new BallSizeEffect('big').applyEffect(this.state.balls, this.state.paddle);
          //     break;
          // case 'ballShrink':
          //     new BallSizeEffect('small').applyEffect(this.state.balls, this.state.paddle);
          //     break;
          // case 'paddleGrow':
          //     new PaddleSizeEffect('long').applyEffect(this.state.balls, this.state.paddle);
          //     break;
          // case 'paddleMax':
          //     new PaddleSizeEffect('max').applyEffect(this.state.balls, this.state.paddle);
          //     break;
          // case 'paddleShrink':
          //     new PaddleSizeEffect('short').applyEffect(this.state.balls, this.state.paddle);
          //     break;
					case 'timeIncrease':
							new TimeEffect('add').applyEffect(this.sidebar);
							break;
					case 'timeDecrease':
							new TimeEffect('minus').applyEffect(this.sidebar);
							break;
					case 'paddleReverse':
							new PaddleDirectionEffect('reverse').applyEffect(this.state.balls, this.state.paddle);
							break;
      }
  }

}


