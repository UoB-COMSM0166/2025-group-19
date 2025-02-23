class Stage02Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
<<<<<<< HEAD
    this.toolDropRate = 0.3; // 70% dropping rate
    this.toolProbabilities = {
      ballGrow: 0,
      ballShrink: 0,
      paddleGrow: 0,
      paddleMax: 0,
      paddleShrink: 0,
      ballSpeedUp: 0,
      gravityUp: 0.5
    };
  }
  initBricks() {
    this.state.bricks = [];
    console.log("bricks initialized, length: ", this.state.bricks.length); 
    
    loadJSON("./models/components/StagePattern/Stage02.json", (data) => {
      let brickWidth = data.width;
      let brickHeight = data.height;  
      
      console.log("Brick data received:", data, " brickwidth: ", brickWidth, " brickHeight: ", brickHeight); 
      for (let brickData of data.bricks) {
        let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, false, brickData.bomb);
        this.state.bricks.push(brick);
      }
    });
=======
    this.toolDropRate = 0.3;
    this.toolProbabilities = {
      ballGrow: 0.1,
      ballShrink: 0.1,
      paddleGrow: 0.1,
      paddleMax: 0.1,
      paddleShrink: 0.1,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage02.json";
>>>>>>> develop
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage03');
  }
}