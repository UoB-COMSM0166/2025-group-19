class PaddleSizeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    // Remove -> this.originalWidth = 100;
  }

  applyEffect(stageController) {
    const paddle = stageController.state.paddle;
    this.originalWidth = paddle.width; //Recode current paddle width
    switch (this.sizeType) {
      case 'long':
        paddle.width = 300;
        break;
      case 'max':
        const centerX = paddle.x + paddle.width / 2;
        paddle.width = paddle.gameWidth;
        paddle.x = Math.max(0, Math.min(paddle.gameWidth - paddle.width, centerX - paddle.width / 2));
        break;
      case 'short':
        paddle.width = 50;
        break;
    }
  }

  removeEffect(stageController) {
    const paddle = stageController.state.paddle;
    paddle.width = this.originalWidth; // Remove original size
  }
}
