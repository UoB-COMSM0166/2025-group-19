class Stage02 extends BasicStage {
    constructor(bgImage) {
      super(bgImage);
      this.rows = 3;
      this.cols = 5;
      this.brickWidth = width / this.cols;
      this.initBricks();
    }
  }