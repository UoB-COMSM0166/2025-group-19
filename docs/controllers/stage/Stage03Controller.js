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
	

	getStageJsonPath() {
    return "./models/components/StagePattern/Stage03_1.json";
  }


	// second form of tiger: angry paw
	transformIntoPaw() {
		this.state.bricks = [];
		console.log("bricks initialized, length: ", this.state.bricks.length); 
		
		loadJSON("./models/components/StagePattern/Stage03_2.json", (data) => {
			let brickWidth = data.width;
			let brickHeight = data.height;  
			
			console.log("Brick data received:", data, " brickwidth: ", brickWidth, " brickHeight: ", brickHeight); 
			for (let brickData of data.bricks) {
				let colorValues = data.colour[brickData.colour];
				let [r, g, b] = colorValues;
				let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, brickData.bomb, brickData.unbreakable, r, g, b);
				this.state.bricks.push(brick);
			}
		});
	}


	update() {
		if (!this.isBricksLoaded) return;
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

		// checks to see if all bricks besides unbreakable ones have been destroyed
		if (this.state.bricks.filter(brick => !brick.isUnbreakable).length === 0) {
			if(this.regenerate === true) {
				this.transformIntoPaw();
				this.regenerate = false;
			} else {
				// removes all unbreakable bricks before ending level
				this.state.bricks = (this.state.bricks.filter(brick => !brick.isDestroyed && !brick.isUnbreakable));
				this.showWinDialog();
			}
		}

}

  goToNextStage() {
    this.pageController.switchToStage('Stage04');
  }
}



