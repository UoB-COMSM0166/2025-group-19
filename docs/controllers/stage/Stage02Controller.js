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
      ballSpeedUp: 0.8
    };
  }
  initBricks() {
    this.state.bricks = [];
    
    loadJSON("./models/components/StagePattern/Stage02.json", (data) => {
      let brickWidth = data.width;
      let brickHeight = data.height;  
      
      console.log("Brick data received:", data, " brickwidth: ", brickWidth, " brickHeight: ", brickHeight); 
      for (let brickData of data.bricks) {
        let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, false, brickData.bomb);
        this.state.bricks.push(brick);
      }
    });
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}