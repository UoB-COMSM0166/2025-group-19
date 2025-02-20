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
        let colorValues = data.colour[brickData.colour];
        let [r, g, b] = colorValues;
        console.log("Stage02Controller: " + r+" "+g+" "+b);
        let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, false, brickData.bomb, r, g, b);
        this.state.bricks.push(brick);
      }
    });
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}