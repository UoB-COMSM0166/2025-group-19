class StageController {
  constructor(state, view, sidebar, pageController) {
      this.state = state;
      this.view = view;
      this.sidebar = sidebar;
      this.pageController = pageController;
      this.showingDialog = false;
      this.dialogText = '';
      this.initBricks();
  }

  initBricks() {
    throw new Error('initBricks() should be implemented by subclass!');
  }

  update() {
      if (this.showingDialog) return;

      this.state.paddle.move();

      for (let ball of this.state.balls) {
          ball.update();
          ball.checkCollision(this.state.paddle, this.state.bricks, this.state.tools, this.sidebar);
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
      }
  }

  handleKeyPress(key) {
      if (key === ' ') {
          this.state.balls.push(new Ball(this.state.paddle.x + this.state.paddle.width / 2, this.state.paddle.y - 10, this.state.gameWidth, this.state.gameHeight));
      }

      if (this.showingDialog) {
          if (key === 'Y' || key === 'y') {
              this.onYes();
          } else if (key === 'N' || key === 'n') {
              this.onNo();
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
      console.log("this.state.stageName:", this.state.stageName);
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
      switch (tool.type) {
          case 'ballGrow':
              new BallSizeEffect('big').applyEffect(this.state.balls, this.state.paddle);
              break;
          case 'ballShrink':
              new BallSizeEffect('small').applyEffect(this.state.balls, this.state.paddle);
              break;
          case 'paddleGrow':
              new PaddleSizeEffect('long').applyEffect(this.state.balls, this.state.paddle);
              break;
          case 'paddleMax':
              new PaddleSizeEffect('max').applyEffect(this.state.balls, this.state.paddle);
              break;
          case 'paddleShrink':
              new PaddleSizeEffect('short').applyEffect(this.state.balls, this.state.paddle);
              break;
      }
  }
}
 