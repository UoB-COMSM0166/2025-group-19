class PaddleSizeEffect extends Effect {
  constructor(sizeType) {
    super();
    this.sizeType = sizeType;
  }

  applyEffect(balls, paddle) {
    if (this.sizeType === 'long') {
      paddle.width = 150;
    } else if (this.sizeType === 'short') {
      paddle.width = 50;
    } else if (this.sizeType === 'max') {
      paddle.width = width;
    }
  }
}
