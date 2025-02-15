class BasicStage {
    constructor(bgImage) {
        this.bgImage = bgImage;
        this.paddle = new Paddle();
        this.balls = [new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10)];
        this.bricks = [];
        this.powerUps = [];

        this.isStageCleared = false;
        this.isStageFailed = false;
        this.showingDialog = false;

        this.rows = 5;
        this.cols = 8;
        this.brickWidth = width / this.cols;
        this.brickHeight = 20;

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
        if (this.showingDialog) return;

        this.paddle.move();

        for (let ball of this.balls) {
        ball.update();
        ball.checkCollision(this.paddle, this.bricks);
        }

        this.balls = this.balls.filter(ball => !ball.isOutOfBounds());

        this.bricks = this.bricks.filter(brick => !brick.isDestroyed);

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

        if (this.showingDialog) {
        this.displayDialog();
        }
    }

    handleKeyPress(key) {
        if (key === ' ') {
        this.balls.push(new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10));
        }

        // 處理對話框選擇
        if (this.showingDialog) {
        if (key === 'Y') {
            this.onYes();
        } else if (key === 'N') {
            this.onNo();
        }
        }
    }

    isCleared() {
        return this.isStageCleared;
    }

    isGameOver() {
        return this.isStageFailed;
    }

    showWinDialog() {
        this.showingDialog = true;
        this.dialogText = this instanceof Stage01
        ? 'You Win! Go to Stage 02? (Y/N)'
        : 'You Win! Congratulations! (Press N to return)';
        this.onYes = () => {
        currentScene = this instanceof Stage01 ? new Stage02(this.bgImage) : new WelcomePage();
        };
        this.onNo = () => {
        currentScene = new WelcomePage();
        };
    }

    showLoseDialog() {
        this.showingDialog = true;
        this.dialogText = 'Game Over. Retry? (Y/N)';
        this.onYes = () => {
        currentScene = this instanceof Stage01 ? new Stage01(this.bgImage) : new Stage02(this.bgImage);
        };
        this.onNo = () => {
        currentScene = new WelcomePage();
        };
    }

    displayDialog() {
        fill(0, 0, 0, 200);
        rect(100, 200, width - 200, 200, 20);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(24);
        text(this.dialogText, width / 2, height / 2);
        textSize(18);
        text("Press Y: Yes / Press N: No", width / 2, height / 2 + 40);
    }
}
