class KeyboardController {
    constructor(paddle, onShootBall) {
      this.paddle = paddle;
      this.onShootBall = onShootBall;
      this.keyBindings = {
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shootBall: ' ',
        togglePaddle: 'q'
      };
    }

    setKeyBinding(action, key) {
        if (this.keyBindings[action] !== undefined) {
        this.keyBindings[action] = key;
        } else {
        console.warn(`Action "${action}" does not exist`);
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
}
  