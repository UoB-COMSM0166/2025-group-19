class BasicStage {
    constructor(bgImage) {
        this.bgImage = bgImage;
        this.paddle = new Paddle();
        this.balls = [new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10)];
        this.bricks = [];
        this.powerUps = [];
        this.activePowerUps = { ball: null, paddle: null };
        this.powerUpTimers = { ball: 0, paddle: 0 };

        this.rows = 5;
        this.cols = 8;
        this.brickWidth = width / this.cols;
        this.brickHeight = 20;
        this.isStageCleared = false;
        this.isStageFailed = false;

        this.initBricks();
    }

    initBricks() {
        for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
            let isRedBrick = random(1) < 0.3;
            this.bricks.push(new Brick(c * this.brickWidth, r * this.brickHeight, this.brickWidth, this.brickHeight, isRedBrick));
        }
        }
    }

    update() {
        this.paddle.move();

        for (let i = this.balls.length - 1; i >= 0; i--) {
        let ball = this.balls[i];
        ball.update();
        ball.checkCollision(this.paddle, this.bricks);

        if (ball.isOutOfBounds()) {
            this.balls.splice(i, 1);
        }
        }

        for (let i = this.bricks.length - 1; i >= 0; i--) {
        if (this.bricks[i].isDestroyed) {
            if (this.bricks[i].isRed) {
            this.powerUps.push(new Tool(this.bricks[i].x + this.bricks[i].width / 2, this.bricks[i].y));
            }
            this.bricks.splice(i, 1);
        }
        }

        for (let i = this.powerUps.length - 1; i >= 0; i--) {
        let powerUp = this.powerUps[i];
        powerUp.update();

        if (powerUp.isCollected(this.paddle)) {
            // activatePowerUp(powerUp.type); // 若有道具功能可加上
            this.powerUps.splice(i, 1);
        } else if (powerUp.isOutOfBounds()) {
            this.powerUps.splice(i, 1);
        }
        }

        if (this.balls.length === 0) {
        this.isStageFailed = true;
        }

        if (this.bricks.length === 0) {
        this.isStageCleared = true;
        }
    }

    display() {
        background(this.bgImage);

        this.paddle.display();

        for (let ball of this.balls) {
        ball.display();
        }

        for (let brick of this.bricks) {
        brick.display();
        }

        for (let powerUp of this.powerUps) {
        powerUp.display();
        }

        if (this.isStageFailed) {
        fill(255, 0, 0);
        textSize(32);
        textAlign(CENTER, CENTER);
        text('Game Over', width / 2, height / 2);
        }

        if (this.isStageCleared) {
        fill(0, 255, 0);
        textSize(32);
        textAlign(CENTER, CENTER);
        text('You Win!', width / 2, height / 2);
        }
    }

    handleKeyPress(key) {
        if (key === ' ') {
        this.balls.push(new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10));
        }
    }

    isCleared() {
        return this.isStageCleared;
    }

    isGameOver() {
        return this.isStageFailed;
    }
}