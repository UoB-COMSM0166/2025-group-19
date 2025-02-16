class BasicStage {
    constructor(bgImage, stageName) {
        this.bgImage = bgImage;
        this.stageName = stageName;

        this.paddle = new Paddle();
        this.balls = [new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10)];
        this.tools = [];
        this.bricks = [];
        this.powerUps = [];

        this.isStageCleared = false;
        this.isStageFailed = false;
        this.showingDialog = false;

        this.rows = 5;
        this.cols = 8;
        this.brickWidth = 800 / this.cols;
        this.brickHeight = 20;

        this.initBricks();

        this.sidebar = new Sidebar(stageName);
        this.gameView = new GameView(this);
    }

    initBricks() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                let isRedBrick = random(1) < 0.3;
                this.bricks.push(
                    new Brick(
                        c * this.brickWidth,
                        r * this.brickHeight,
                        this.brickWidth,
                        this.brickHeight,
                        isRedBrick
                    )
                );
            }
        }
    }

    update() {
        if (this.showingDialog) return;

        this.paddle.move();

        for (let ball of this.balls) {
            ball.update();
            ball.checkCollision(this.paddle, this.bricks, this.tools, this.sidebar);
        }

        for (let i = this.tools.length - 1; i >= 0; i--) {
            let tool = this.tools[i];
            tool.update();

            if (tool.hits(this.paddle)) {
                this.applyToolEffect(tool);
                this.tools.splice(i, 1);
            } else if (tool.isOutOfBounds()) {
                this.tools.splice(i, 1);
            }
        }

        this.balls = this.balls.filter(ball => !ball.isOutOfBounds());
        this.bricks = this.bricks.filter(brick => !brick.isDestroyed);

        if (this.balls.length === 0) {
            this.isStageFailed = true;
        }

        if (this.bricks.length === 0) {
            this.isStageCleared = true;
        }

        this.sidebar.update(/* 傳入分數、球數、時間等數據 */);
    }

    display() {
        this.gameView.display();
        this.sidebar.display();

        if (this.showingDialog) {
            this.displayDialog();
        }
    }

    handleKeyPress(key) {
        if (key === ' ') {
            this.balls.push(new Ball(this.paddle.x + this.paddle.width / 2, this.paddle.y - 10));
        }
        if (this.showingDialog) {
            if (key === 'Y' || key === 'y') {
                this.onYes();
            } else if (key === 'N' || key === 'n') {
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
            currentScene = this instanceof Stage01
                ? new Stage02(this.bgImage)
                : new WelcomePage();
        };
        this.onNo = () => {
            currentScene = new WelcomePage();
        };
    }

    showLoseDialog() {
        this.showingDialog = true;
        this.dialogText = 'Game Over. Retry? (Y/N)';

        this.onYes = () => {
            currentScene = this instanceof Stage01
                ? new Stage01(this.bgImage)
                : new Stage02(this.bgImage);
        };
        this.onNo = () => {
            currentScene = new WelcomePage();
        };
    }

    displayDialog() {
        fill(0, 0, 0, 200);
        rect(100, 200, 800 - 200, 200, 20);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(24);
        text(this.dialogText, 400, 300);
        textSize(18);
        text("Press Y: Yes / Press N: No", 400, 340);
    }

    applyToolEffect(tool) {
        switch (tool.type) {
            case 'ballGrow':
                new BallSizeEffect('big').applyEffect(this.balls, this.paddle);
                break;
            case 'ballShrink':
                new BallSizeEffect('small').applyEffect(this.balls, this.paddle);
                break;
            case 'paddleGrow':
                new PaddleSizeEffect('long').applyEffect(this.balls, this.paddle);
                break;
            case 'paddleMax':
                new PaddleSizeEffect('max').applyEffect(this.balls, this.paddle);
                break;
            case 'paddleShrink':
                new PaddleSizeEffect('short').applyEffect(this.balls, this.paddle);
                break;
        }
    }
}
