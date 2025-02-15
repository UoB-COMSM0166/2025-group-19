class Brick {
    constructor(x, y, width, height, isRed = false) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.isDestroyed = false;
      this.isRed = isRed;
      this.shouldDropTool = random() < 0.3; // dropping tools is 30%
    }
  
    display() {
      if (!this.isDestroyed) {
        fill(this.isRed ? 255 : 0, this.isRed ? 0 : 255, 0);
        rect(this.x, this.y, this.width, this.height);
      }
    }
  }
  