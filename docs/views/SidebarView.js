class SidebarView {
  constructor(stageName, sidebarCanvas) {
    this.stageName = stageName;
    this.score = 0;
    this.ballCount = 10;
    this.timer = 60;
    this.canvas = sidebarCanvas;
    this.updateScale();
    this.font = boutiqueBitmaFont;     

  }

  addScore(points) {
      this.score += points;
  }

  // Update data from StageController.js
  update(score, ballRemain, timeRemaining){
    this.score = score;
    this.ballCount = ballRemain;
    this.timer = timeRemaining;
  }

  display() {
    this.canvas.background(50);
    this.canvas.fill(255);
    this.canvas.textSize(20);
    this.canvas.textFont(boutiqueBitmaFont);
    this.canvas.textAlign(LEFT, TOP);

    // Game Title
    this.canvas.textAlign(CENTER);
    this.canvas.text("ZODIAC CATCH", 100, 30);
    this.canvas.textAlign(LEFT);

    // Storage for picture
    this.canvas.fill(100);
    this.canvas.rect(25, 50, 150, 80, 10); // Picture
    this.canvas.fill(255);
    this.canvas.textAlign(CENTER);
    this.canvas.text("LOGO / IMAGE", 100, 90);
    this.canvas.textAlign(LEFT);

    // Stage
    this.canvas.textSize(18);
    this.canvas.textAlign(CENTER);
    this.canvas.text("STAGE", 100, 140);

    let stageText = "Unknown Stage";
    switch(this.stageName) {
        case 'Stage01': stageText = "Stage 1: Mouse"; break;
        case 'Stage02': stageText = "Stage 2: Cow"; break;
        case 'Stage03': stageText = "Stage 3: Tiger"; break;
        case 'Stage04': stageText = "Stage 4: Rabbit"; break;
        case 'Stage05': stageText = "Stage 5: Dragon"; break;
        case 'Stage06': stageText = "Stage 6: Snake"; break;
        case 'Stage10': stageText = "Stage 10: Rooster"; break;
        default: stageText = this.stageName;
    }
    this.canvas.text(stageText, 100, 165);
    this.canvas.textAlign(LEFT);

    // Point
    this.canvas.textSize(18);
    this.canvas.text("Point", 10, 210);
    this.canvas.text(`${this.score}`, 10, 240);

    // Time left
    this.canvas.textSize(18);
    this.canvas.text("Time Left", 10, 270);
    this.canvas.text(`${this.timer} sec`, 10, 300);

    // Remain ball
    this.canvas.textSize(18);
    this.canvas.text("Balls", 10, 330);
    let ballX = 10;
    let ballY = 360;
    this.canvas.textSize(24);

    if (this.ballCount === Infinity) {
        this.canvas.text("∞", ballX, ballY);
    } else {
        for (let i = 0; i < this.ballCount; i++) {
            this.canvas.text("o", ballX, ballY);
            ballX += 30;

            if (i === 4) { // 5 ball a row

                ballX = 10;
                ballY += 30;
            }
        }
    }

    image(this.canvas, this.canvasX + 800 * this.scaleFactor, this.canvasY, 200 * this.scaleFactor, 600 * this.scaleFactor);
  }

  resizeWindow() {
    console.log("SidebarView");
    this.updateScale();
  }

  // Calculate the scaling factor and adjust the centering.
  updateScale() {
    console.log("SidebarView updateScale");
    let availableHeight = windowHeight * 0.9; //  5% padding
    this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
    this.scaledWidth = 1000 * this.scaleFactor;
    this.scaledHeight = 600 * this.scaleFactor;
    this.canvasX = (windowWidth - this.scaledWidth) / 2;
    this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
  }
}
