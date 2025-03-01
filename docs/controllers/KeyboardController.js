class KeyboardController {
    constructor(paddle, onShootBall) {
      this.paddle = paddle;
      this.onShootBall = onShootBall;
      this.keyBindings = {
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shootBall: ' ',
        togglePaddle: 'ArrowUp'
      };
    }

    setKeyBinding(action, key) {
        if (this.keyBindings[action] !== undefined) {
        this.keyBindings[action] = key;
        }
    }

    handleKeyPressed(key) {
        if (key === this.keyBindings.moveLeft) {
            this.paddle.moveLeft(true);
        }
        if (key === this.keyBindings.moveRight) {
            this.paddle.moveRight(true);
        }
        if (key === this.keyBindings.shootBall && this.onShootBall) {
            this.onShootBall();
        }
        if (key === this.keyBindings.togglePaddle){
            this.paddle.togglePosition();
        }
    }

    handleKeyReleased(key) {
        if (key === this.keyBindings.moveLeft) {
            this.paddle.moveLeft(false);
        }
        if (key === this.keyBindings.moveRight) {
            this.paddle.moveRight(false);
        }
    }

    handleSettingDifficulty(key) {
        if (key === LEFT_ARROW || key === 'A') {
            this.isHardMode = false; // Switch to EASY mode
        } else if (key === RIGHT_ARROW || key === 'D') {
            this.isHardMode = true; // Switch to HARD mode
        }
    }
}
  