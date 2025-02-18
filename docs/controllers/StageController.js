class StageController {
  constructor(state, view, sidebar, pageController) {
      this.state = state;
      this.view = view;
      this.sidebar = sidebar;
      this.pageController = pageController;
      this.effectController = new EffectController(this);
      this.showingDialog = false;
      this.dialogText = '';
      this.toolDropRate = 0; // tool dropping rate
      this.toolProbabilities = {}; // dropping tool array
      this.ballRadius = 10; // shoting ball size
      this.paused = false;
      this.initBricks();
      this.sidebar.onPauseClick = () => {
        this.togglePause();
      };
  }

  initBricks() {
    throw new Error('initBricks() should be implemented by subclass!');
  }

  togglePause() {
    this.paused = !this.paused;
    this.sidebar.setPauseState(this.paused);
  }

  generateTool(x, y) {
    if (Math.random() > this.toolDropRate) {
      return null;
    }
    const toolTypes = Object.keys(this.toolProbabilities);
    const probabilities = Object.values(this.toolProbabilities);
    const selectedToolType = this.weightedRandom(toolTypes, probabilities);
    return new Tool(x, y, selectedToolType);
  }

  weightedRandom(items, weights) {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * totalWeight;

    for (let i = 0; i < items.length; i++) {
      randomValue -= weights[i];
      if (randomValue <= 0) {
        return items[i];
      }
    }
  }

  update() {
      if (this.showingDialog || this.paused) return;

      this.state.paddle.move();

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
          this.state.isStageCleared = true;
          this.showWinDialog();
      }
  }

  display() {
      this.view.display();
      this.sidebar.display();
      if (this.showingDialog) {
        this.displayDialog();
      } else if (this.paused) {
        this.displayPauseMenu();
      }
  }

  displayPauseMenu() {
    fill(0, 0, 0, 200);
    rect(100, 200, 600, 200, 20);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text('Paused', 400, 250);
    textSize(18);
    text('Press C: Continue / Press M: Return to Menu', 400, 300);
  }

  handleKeyPress(key) {
    if (key === ' ') {
      this.state.balls.push(new Ball(
        this.state.paddle.x + this.state.paddle.width / 2,
        this.state.paddle.y - 10,
        this.state.gameWidth,
        this.state.gameHeight,
        this.ballRadius, // shotting ball size
      ));
    }

    if (this.showingDialog) {
      if (key === 'Y' || key === 'y') {
          this.onYes();
      } else if (key === 'N' || key === 'n') {
          this.onNo();
      }
    }

    if (key === 'P' || key === 'p') {
      this.paused = !this.paused;
    }

    if (this.paused) {
      if (key === 'C' || key === 'c') {
        this.paused = false;
      }

      if (key === 'M' || key === 'm') {
        this.pageController.switchToWelcome();
      }
    }
  }

  goToNextStage() {
      switch (this.state.stageName) {
          case 'Stage 01':
              this.pageController.switchToStage('Stage 02');
              break;
          case 'Stage 02':
              this.pageController.switchToWelcome();
              break;
          default:
              this.pageController.switchToWelcome();
              break;
      }
  }

  showWinDialog() {
      this.showingDialog = true;
      this.dialogText = this.state.stageName === 'Stage01' ? 'You Win! Go to Stage 02? (Y/N)' : 'You Win! Congratulations! (Press N to return)';

      this.onYes = () => {
          this.goToNextStage();
      };
      this.onNo = () => {
          this.pageController.switchToWelcome();
      };
  }

  showLoseDialog() {
      this.showingDialog = true;
      this.dialogText = 'Game Over. Retry? (Y/N)';

      this.onYes = () => {
          this.pageController.switchToStage(this.state.stageName);
      };
      this.onNo = () => {
          this.pageController.switchToWelcome();
      };
  }

  displayDialog() {
      fill(0, 0, 0, 200);
      rect(100, 200, 600, 200, 20);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(24);
      text(this.dialogText, 400, 300);
      textSize(18);
      text('Press Y: Yes / Press N: No', 400, 340);
  }

  applyToolEffect(tool) {
    this.effectController.applyToolEffect(tool);
  }
}
 