class PaddleSizeEffect extends Effect {
  constructor(sizeType, duration = 10000) {
    super(duration);
    this.sizeType = sizeType;
    // Remove -> this.originalWidth = 100;
  }

  applyEffect(stageController) {
    const paddle = stageController.state.paddle;
    this.originalWidth = paddle.width; //Recode current paddle width
    const centerX = paddle.x + paddle.width / 2;
    switch (this.sizeType) {
      case 'long':
        paddle.width = 150;
        break;
      case 'max':
        paddle.width = paddle.gameWidth;
        break;
      case 'short':
        paddle.width = 50;
        break;
    }
    paddle.x = Math.max(0, Math.min(paddle.gameWidth - paddle.width, centerX - paddle.width / 2));
  }

  removeEffect(stageController) {
    const paddle = stageController.state.paddle;
    paddle.width = this.originalWidth; // Remove original size
  }
}
