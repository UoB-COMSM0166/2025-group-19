class Tool {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speed = 3;
    this.type = type;
  }

  display(canvas = window) {
    canvas.fill(0, 0, 255);
    canvas.textSize(16);
    canvas.textAlign(CENTER, CENTER);
    let symbol = '';
    if (this.type === 'ballGrow') symbol = '<B>';
    if (this.type === 'ballShrink') symbol = '<S>';
    if (this.type === 'paddleGrow') symbol = '<->';
    if (this.type === 'paddleMax') symbol = '<<->>';
    if (this.type === 'paddleShrink') symbol = '>-<';
    canvas.text(symbol, this.x, this.y);
  }

  update() {
    this.y += this.speed;
  }

  hits(paddle) {
    return (
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width &&
      this.y + this.size / 2 > paddle.y &&
      this.y - this.size / 2 < paddle.y + paddle.height
    );
  }

  isOutOfBounds() {
    return this.y - this.size / 2 > height;
  }
}
