class Stage01Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.4; // 70% dropping rate
    this.toolProbabilities = {
      ballGrow: 0.1,
      ballShrink: 0.8,
    };
  }

  //Copy this to own Stage0xController
  initBricks() {
    this.state.bricks = [];
    loadJSON("./models/components/StagePattern/Stage01.json", (data) => {
      let brickWidth = data.width;
      let brickHeight = data.height;
      for (let brickData of data.bricks) {
        let colorValues = data.colour[brickData.colour];
        let [r, g, b] = colorValues;
        let brick = new Brick(brickData.x, brickData.y, brickWidth, brickHeight, brickData.bomb, r, g, b);
        this.state.bricks.push(brick);
        this.isBricksLoaded = true;
      }
    });
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}