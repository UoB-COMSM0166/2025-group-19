class Brick {
    constructor(x, y, width, height, isRed = false, isBomb = false) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.isDestroyed = false;
      this.isRed = isRed;
      this.isBomb = isBomb;
    }
  
    display(canvas = window) {
      if (!this.isDestroyed) {
        this.colour = null;
        if (this.isRed){
          canvas.fill(255, 0, 0);
        }
        else if (this.isBomb){
          canvas.fill(0,0,255);
        }
        else{
          canvas.fill(0,255,0);
        }
        canvas.rect(this.x, this.y, this.width, this.height);
      }
    }
  }
