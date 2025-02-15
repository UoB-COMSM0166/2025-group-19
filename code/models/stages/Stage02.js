class Stage02 extends BasicStage {
    constructor(bgImage) {
      super(bgImage);
      this.rows = 20;
      this.cols = 5;
      this.brickWidth = width / this.cols;
      this.initBricks();
    }
  }