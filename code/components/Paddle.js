class Paddle {
    constructor() {
      this.width = 120;
      this.height = 20;
      this.x = width / 2 - this.width / 2;
      this.y = height - this.height - 10;
      this.speed = 7;
    }
  
    display() {
      fill(255);
      rect(this.x, this.y, this.width, this.height);
    }
  
    move() {
      if (keyIsDown(LEFT_ARROW)) {
        this.x = max(this.x - this.speed, 0);
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x = min(this.x + this.speed, width - this.width);
      }
    }
  }
  