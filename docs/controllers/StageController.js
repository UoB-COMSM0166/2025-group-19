const CurrentForm = Object.freeze({
  STAGE1: 1,
  STAGE2: 2
});

class StageController {
  constructor(state, view, sidebar, pageController) {
      this.state = state;
      this.view = view;
      this.sidebar = sidebar;
      this.pageController = pageController;
      this.effectController = new EffectController(this);
      this.keyboardController = new KeyboardController(this.state.paddle, () => this.shootBall());
      this.showingDialog = false;
      this.dialogText = '';
      this.toolDropRate = 0; // tool dropping rate
      this.toolProbabilities = {}; // drop
      // ping tool array
      this.ballRadius = 10; // shoting ball size
      this.paused = false;
      this.state.balls = []; // Will not generate ball in the beginning.
      this.ballRemain = 10; // Remain Ball
      this.timer = 60; // Remain time
      this.toolProbabilities = {}; // dropping tool array
      this.ballRadius = Ball.normalSizeBall; // shoting ball size
      this.isBricksLoaded = false;
      this.form = CurrentForm.STAGE1; // which form is animal in (default = 1)
      this.regenerate = false;
      this.secondFormLoaded = false; 
      this.initBricks();
      this.startTimer(); // Start the timer.
      this.sidebar.onPauseClick = () => {
        this.togglePause();
      };

  }

  initBricks() {
    this.state.bricks = [];
    const jsonPath = this.getStageJsonPath();
    loadJSON(jsonPath, (data) => {
      let brickWidth = data.width;
      let brickHeight = data.height;
      for (let brickData of data.bricks) {
        let colorValues = data.colour[brickData.colour];
        let [r, g, b] = colorValues;
        let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, brickData.bomb, brickData.unbreakable, r, g, b);
        this.state.bricks.push(brick);
      }
      if (this.form === CurrentForm.STAGE1) {
        this.isBricksLoaded = true;
      } else if (this.form === CurrentForm.STAGE2) {
        this.secondFormLoaded = true;
      }

      if (this.regenerate) {
        this.form = CurrentForm.STAGE2;
      }

    });
  }

  getStageJsonPath() {
    throw new Error('getStageJsonPath() should be implemented by subclass!');
  }

  togglePause() {
    this.paused = !this.paused;
    this.sidebar.setPauseState(this.paused);
  }

  shootBall() {

    if (this.ballRemain > 0){
      const ball = new Ball(
        this.state.paddle.x + this.state.paddle.width / 2,
        this.state.paddle.y - 10,
        this.state.gameWidth,
        this.state.gameHeight,
        this.ballRadius
        
      );
      this.state.balls.push(ball);
      this.ballRemain--;
      console.log(`Ball shot! Remaining balls: ${this.ballRemain}`);

      //Make sure when shoot ball, update sidebar simutanously.
      this.sidebar.update(this.sidebar.score, this.ballRemain, this.state.timer);
    } else {
      console.log(`No more balls left! Cannot shoot.`);
    }

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
      if (!this.isBricksLoaded) return;
      if (!this.regenerate && !this.secondFormLoaded && (this.form === CurrentForm.STAGE2)) return;
      if (this.showingDialog || this.paused) return;

      console.log("helloooooo");
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


      // Lose if ballRemain == 0;
      if (this.state.balls.length === 0 && this.ballRemain === 0) {
          this.state.isStageFailed = true;
          this.showLoseDialog();
      }
      if (this.state.bricks.filter(brick => !brick.isUnbreakable).length === 0) {
          if (this.regenerate) {
              // if animal has 2nd form, generates new set of bricks
              this.regenerate = false;
              this.initBricks();
          } else {
              // removes all unbreakable bricks before ending level
              this.state.bricks = (this.state.bricks.filter(brick => !brick.isDestroyed && !brick.isUnbreakable));
              this.state.isStageCleared = true;
              this.showWinDialog();
              clearInterval(this.timerInterval); // Clear timer when win
          }

      }

      //update sidebar
      this.sidebar.update(this.sidebar.score, this.ballRemain, this.timer);
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
            this.pageController.switchToStage('Stage 03');
              break;
          case 'Stage 03':
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

  startTimer(){
    this.timerInterval = setInterval(() => {
      if(this.showingDialog || this.paused) return;

      this.timer--;
      console.log(`Remaining time: ${this.timer}.`);
      this.sidebar.update(this.sidebar.score, this.ballRemain, this.timer);

      if(this.timer <= 0){
        this.timer = 0;
        this.state.isStageFailed = true;
        this.showLoseDialog();
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
}
 