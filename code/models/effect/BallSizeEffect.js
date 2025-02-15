class BallSizeEffect extends Effect {
  constructor(sizeType) {
    super();
    this.sizeType = sizeType;
  }

  applyEffect(balls, paddle) {
    balls.forEach(ball => {
      if (this.sizeType === 'big') {
        ball.radius = 20;
      } else if (this.sizeType === 'small') {
        ball.radius = 8;
      }
    });
  }
}
