const BrickDamageLevel = Object.freeze({
  NO_DAMAGE: 0,
  CRACKED: 1,
  BROKEN: 2
});

class Brick {
  constructor(x, y, width, height, isBomb = false, R = 0, G = 0, B = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isDestroyed = false;
    this.isBomb = isBomb;
    this.red = R;
    this.green = G;
    this.blue = B;
    this.damageLevel = BrickDamageLevel.NO_DAMAGE;
  }

  display(canvas = window) {
    if (!this.isDestroyed) {
      canvas.noStroke();
      if (this.isBomb) {
        canvas.fill(0, 0, 255, 255);
      } else {
        canvas.fill(this.red, this.green, this.blue, 255);
      }
      canvas.rect(this.x, this.y, this.width, this.height);
      if (this.damageLevel === BrickDamageLevel.CRACKED) {
        canvas.stroke(50);
        canvas.line(this.x, this.y, this.x + this.width, this.y + this.height);
      } else if (this.damageLevel === BrickDamageLevel.BROKEN) {
        this.isDestroyed = true;
      }
    }
  }
}
