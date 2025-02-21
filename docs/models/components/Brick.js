class Brick {
  constructor(x, y, width, height, isBomb = false, isUnbreakable = false, R = 0, G = 0, B = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isDestroyed = false;
    this.isBomb = isBomb;
    this.isUnbreakable = isUnbreakable;
    this.red = R;
    this.green = G;
    this.blue = B;
  }

  display(canvas = window) {
    if (!this.isDestroyed) {
      if (this.isBomb){
        canvas.fill(0,0,255, 255); //bomb is blue 
      }
      else {
        canvas.fill(this.red, this.green, this.blue, 255);
      }
      canvas.rect(this.x, this.y, this.width, this.height);
      console.log(`Brick at (${this.x}, ${this.y}) Color: RGB(${this.red}, ${this.green}, ${this.blue})`);
    }
  }
}
