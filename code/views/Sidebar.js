class Sidebar {
  constructor(stageName) {
      this.stageName = stageName;
      this.score = 0;
      this.ballCount = 3;
      this.timer = 60;

      this.canvas = createGraphics(200, 600);
  }

  update(score, ballCount, timer) {
      this.score = score;
      this.ballCount = ballCount;
      this.timer = timer;
  }

  addScore(points) {
      this.score += points;
  }

  display() {
      this.canvas.background(50);
      this.canvas.fill(255);
      this.canvas.textSize(20);
      this.canvas.text(`STAGE: ${this.stageName}`, 10, 40);
      this.canvas.text(`SCORE: ${this.score}`, 10, 100);
      this.canvas.text(`BALLS: ${this.ballCount}`, 10, 160);
      this.canvas.text(`TIME: ${this.timer}`, 10, 220);

      image(this.canvas, 800, 0);
  }
}
