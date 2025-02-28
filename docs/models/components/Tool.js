class Tool {
  constructor(x, y, type, gameHeight) {
    this.x = x;
    this.y = y;
    this.gameHeight = gameHeight;
    this.size = 20;
    this.speed = 3;
    this.type = type;
    this.imgWidth = 0;
    this.imgHeight = 0;

    if (this.type === 'ballGrow') this.img = ballGrow;
    if (this.type === 'ballShrink') this.img = ballShrink;
    if (this.type === 'paddleGrow') this.img = paddleGrow;
    if (this.type === 'paddleMax') this.img = paddleMax;
    if (this.type === 'paddleShrink') this.img = paddleShrink;
    if (this.type === 'ballSpeedUp') this.img = ballSpeedUp;
    if (this.type === 'gravityUp') this.img = gravityUp;
    if (this.type === 'timeIncrease') this.img = timeIncrease;
    if (this.type === 'timeDecrease') this.img = timeDecrease;
    if (this.type === 'paddleReverse') this.img = paddleReverse;
    if (this.type === 'infiniteBall') this.img = infiniteBall;

    // Calculate the size for the image
    this.imgHeight = windowHeight * 0.025; // if use height, its setting will come from main.js's createCanvas(1000, 600);. 
    this.imgWidth = (this.img.width / this.img.height) * this.imgHeight; // Maintain the original aspect ratio
  }

  display(canvas) {
    canvas.image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
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
    return this.y - this.size  > this.gameHeight;
  }
}
