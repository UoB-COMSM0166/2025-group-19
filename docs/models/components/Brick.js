const BrickDamageLevel = Object.freeze({
  NO_DAMAGE: 0,
  CRACKED: 1,
  BROKEN: 2
});

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
    this.damageLevel = BrickDamageLevel.NO_DAMAGE;
  }

  display(canvas = window) {
    if (!this.isDestroyed) {
      if (this.isBomb) {
        canvas.fill(0, 0, 255, 255);
      } else {
        canvas.fill(this.red, this.green, this.blue, 255);
      }
      canvas.rect(this.x, this.y, this.width, this.height);
      if (this.damageLevel === BrickDamageLevel.CRACKED) {
        canvas.stroke(50);
        let seventhW = this.width / 7;
        let seventhH = this.height / 7;
        for (let i = 1; i <= 6; i++) {
          let xPos = this.x + i * seventhW;
          canvas.line(xPos, this.y, xPos, this.y + this.height);
        }
        for (let i = 1; i <= 6; i++) {
          let yPos = this.y + i * seventhH;
          canvas.line(this.x, yPos, this.x + this.width, yPos);
        }
      } else if (this.damageLevel === BrickDamageLevel.BROKEN) {
        this.isDestroyed = true;
      }
    }
  }

}
