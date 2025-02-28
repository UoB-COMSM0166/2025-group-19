class SidebarView {
  constructor(stageName, sidebarCanvas) {
    this.stageName = stageName;
    this.score = 0;
    this.ballCount = 10;
    this.timer = 60;
    this.items = {};
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

  updateItems(items) {
    this.items = items;
    this.display();
  }

  display() {
    this.canvas.background(50);
    this.canvas.fill(255);
    this.canvas.textSize(20);
    this.canvas.textFont(boutiqueBitmaFont);
    this.canvas.textAlign(LEFT, TOP);

    // Game Title
    this.canvas.textAlign(CENTER);
    this.canvas.text("ZODIAC CATCH", 100, 10);
    this.canvas.textAlign(LEFT);

    // Storage for picture
    this.canvas.fill(100);
    this.canvas.rect(25, 50, 150, 80, 10); // Picture
    this.canvas.fill(255);
    this.canvas.textAlign(CENTER);
    this.canvas.text("LOGO / IMAGE", 100, 80);
    this.canvas.textAlign(LEFT);

    // Stage Name
    this.canvas.textSize(18);
    this.canvas.textAlign(LEFT, CENTER);
    this.canvas.text("STAGE: ", 50, 150);
    this.canvas.text(this.stageName, 130, 150);

    // Point
    this.canvas.textSize(18);
    this.canvas.textAlign(LEFT, CENTER);
    this.canvas.text("Point: ", 10, 190);
    this.canvas.text(`${this.score}`, 100, 190);

    // Time left
    this.canvas.text("Time: ", 10, 230);
    this.canvas.text(`${this.timer} s`, 100, 230);

    // Remain ball
    this.canvas.textSize(18);
    this.canvas.text("Balls: ", 10, 270);
    let ballX = 10;
    let ballY = 300;
    this.canvas.textSize(24);

    if ('infiniteBall' in this.items) {
      // Show infinite Ball and its remaining time
      let infiniteBallTime = this.items['infiniteBall'];
      let tool = new Tool(0, 0, 'infiniteBall');
      let infiniteBallImg = tool.getImage();

      if (infiniteBallImg) {
          this.canvas.image(infiniteBallImg, ballX, ballY, 25, 25);
      }
      this.canvas.textSize(16);
      this.canvas.text(`${infiniteBallTime}s`, ballX + 40, ballY + 12);
    } else {
      // Remain Balls
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
    }
    // Items
    this.canvas.textSize(18);
    this.canvas.text("Items:", 10, 370);

    let maxPerRow = 4;
    let itemY = 395;
    let itemX = 10;
    let itemCount = 0;

    for (const [itemName, timeLeft] of Object.entries(this.items)) {
        if (itemName === 'infiniteBall') continue;
        if (itemName === 'timeIncrease') continue;
        if (itemName === 'timeDecrease') continue;
        let tool = new Tool(0, 0, itemName);
        let itemImage = tool.getImage();

        if (itemImage) {
            this.canvas.image(itemImage, itemX, itemY, 25, 25);
        }

        this.canvas.textSize(16);
        this.canvas.text(`${timeLeft}s`, itemX + 45, itemY + 10);

        itemCount++;

        if (itemCount === maxPerRow) {
            itemX = 110;
            itemY = 395;
        } else {
            itemY += 40;
        }
    }

    image(this.canvas, this.canvasX + 800 * this.scaleFactor, this.canvasY, 200 * this.scaleFactor, 600 * this.scaleFactor);
  }

  resizeWindow() {
    this.updateScale();
  }

  // Calculate the scaling factor and adjust the centering.
  updateScale() {
    let availableHeight = windowHeight * 0.9; //  5% padding
    this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
    this.scaledWidth = 1000 * this.scaleFactor;
    this.scaledHeight = 600 * this.scaleFactor;
    this.canvasX = (windowWidth - this.scaledWidth) / 2;
    this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
  }
}
