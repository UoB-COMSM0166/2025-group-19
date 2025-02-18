class PaddleDirectionEffect extends Effect {
  constructor(sizeType) {
    super();
    this.sizeType = sizeType;
  }

  applyEffect(balls, paddle) {
    if (this.sizeType === 'reverse') {
			paddle.reverse = true;
    }
  }
}

