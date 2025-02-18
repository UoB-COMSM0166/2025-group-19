class SidebarView {
    constructor(stageName) {
      this.stageName = stageName;
      this.score = 0;
      this.ballCount = 3;
      this.timer = 60;
      this.canvas = createGraphics(200, 600);
      this.pauseButtonX = 50;
      this.pauseButtonY = 500;
      this.pauseButtonWidth = 100;
      this.pauseButtonHeight = 40;
      this.isPaused = false;
      this.onPauseClick = null;
    }

    addScore(points) {
        this.score += points;
    }

    setPauseState(isPaused) {
      this.isPaused = isPaused;
    }

    display() {
      this.canvas.background(50);
      this.canvas.fill(255);
      this.canvas.textSize(20);
      this.canvas.textAlign(LEFT, TOP);
      this.canvas.text(`STAGE: ${this.stageName}`, 10, 40);
      this.canvas.text(`SCORE: ${this.score}`, 10, 100);
      this.canvas.text(`BALLS: ${this.ballCount}`, 10, 160);
      this.canvas.text(`TIME: ${this.timer}`, 10, 220);

      // pause button
      this.canvas.fill(100);
      this.canvas.rect(
        this.pauseButtonX,
        this.pauseButtonY,
        this.pauseButtonWidth,
        this.pauseButtonHeight,
        10
      );
      this.canvas.fill(255);
      this.canvas.textAlign(CENTER, CENTER);
      console.log("sidebar this.isPaused:", this.isPaused);
      this.canvas.text(
        this.isPaused ? 'RESUME' : 'PAUSE',
        this.pauseButtonX + this.pauseButtonWidth / 2,
        this.pauseButtonY + this.pauseButtonHeight / 2
      );
      image(this.canvas, 800, 0);
    }

    handleMousePressed(mx, my) {
      const relativeX = mx - 800;
      const relativeY = my;
      if (
        relativeX > this.pauseButtonX &&
        relativeX < this.pauseButtonX + this.pauseButtonWidth &&
        relativeY > this.pauseButtonY &&
        relativeY < this.pauseButtonY + this.pauseButtonHeight
      ) {
        if (this.onPauseClick) {
          this.onPauseClick();
        }
      }
    }
}
