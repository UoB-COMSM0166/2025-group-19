class Stage03Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.4;
    this.toolProbabilities = {
      ballGrow: 0.5,
			timeIncrease: 0.5,
			timeDecrease: 0.5,
			paddleReverse: 0.7,
    };
		this.regenerate = true;

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

	regenerateBricks() {    
		this.state.bricks = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
				if(j === 4 || j === 5) {
        	this.state.bricks.push(new Brick(    
          	j * 60 + 50,
          	i * 30 + 50,
          	60,
          	30, true
        	));
				} else {
        	this.state.bricks.push(new Brick(
          	j * 60 + 50,
          	i * 30 + 50,
          	60,
          	30
        	));
				}
      }
    }
  }


	update() {
		if (this.showingDialog || this.paused) return;

		this.state.paddle.update();

		for (let ball of this.state.balls) {
				ball.update();
				ball.checkCollision(this.state.paddle, this.state.bricks, this.state.tools, this.sidebar, this);
		}

		for (let i = this.state.tools.length - 1; i >= 0; i--) {
				let tool = this.state.tools[i];
				tool.update();

				if (tool.hits(this.state.paddle)) {
						this.applyToolEffect(tool);
						this.state.tools.splice(i, 1);
				} else if (tool.isOutOfBounds()) {
						this.state.tools.splice(i, 1);
				}
		}

		this.state.balls = this.state.balls.filter(ball => !ball.isOutOfBounds());
		this.state.bricks = this.state.bricks.filter(brick => !brick.isDestroyed);

		if (this.state.balls.length === 0) {
			this.state.isStageFailed = true;
			this.showLoseDialog();
	}

		if (this.state.bricks.length === 0) {
			if(this.regenerate === true) {
				this.regenerateBricks();
				this.regenerate = false;
			} else {
				this.showWinDialog();
			}
		}

}

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}



