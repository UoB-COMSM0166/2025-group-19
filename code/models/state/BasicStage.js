class XXX {
    constructor(state, view, sidebar) {
        this.state = state;
        this.view = view;
        this.sidebar = sidebar;
        this.showingDialog = false;
        this.dialogText = '';
    }

    init() {
        this.state.initBricks();
    }

    update() {
        if (this.showingDialog) return;

        this.state.paddle.move();

        for (let ball of this.state.balls) {
            ball.update();
            ball.checkCollision(this.state.paddle, this.state.bricks, this.state.tools, this.sidebar);
        }

        for (let i = this.state.tools.length - 1; i >= 0; i--) {
            let tool = this.state.tools[i];
            tool.update();

            if (tool.hits(this.state.paddle)) {
                this.applyToolEffect(tool);
                this.state.tools.splice(i, 1);
            } else if (tool.isOutOfBounds()) {
                this.state.tools.splice(i, 1);
            }
        }

        this.state.balls = this.state.balls.filter(ball => !ball.isOutOfBounds());
        this.state.bricks = this.state.bricks.filter(brick => !brick.isDestroyed);

        if (this.state.balls.length === 0) {
            this.state.isStageFailed = true;
            this.showLoseDialog();
        }

        if (this.state.bricks.length === 0) {
            this.state.isStageCleared = true;
            this.showWinDialog();
        }

        this.sidebar.update();
    }

    display() {
        this.view.display();
        this.sidebar.display();
        if (this.showingDialog) {
            this.displayDialog();
        }
    }

    handleKeyPress(key) {
        if (key === ' ') {
            this.state.balls.push(new Ball(this.state.paddle.x + this.state.paddle.width / 2, this.state.paddle.y - 10));
        }

        if (this.showingDialog) {
            if (key === 'Y' || key === 'y') {
                this.onYes();
            } else if (key === 'N' || key === 'n') {
                this.onNo();
            }
        }
    }

    showWinDialog() {
        this.showingDialog = true;
        this.dialogText = this.state.stageName === 'Stage 01' ? 'You Win! Go to Stage 02? (Y/N)' : 'You Win! Congratulations! (Press N to return)';

        this.onYes = () => {
            currentScene = this.state.stageName === 'Stage 01' ? new Stage02(this.state.bgImage) : new WelcomePage();
        };
        this.onNo = () => {
            currentScene = new WelcomePage();
        };
    }

    showLoseDialog() {
        this.showingDialog = true;
        this.dialogText = 'Game Over. Retry? (Y/N)';

        this.onYes = () => {
            currentScene = this.state.stageName === 'Stage 01' ? new Stage01(this.state.bgImage) : new Stage02(this.state.bgImage);
        };
        this.onNo = () => {
            currentScene = new WelcomePage();
        };
    }

    displayDialog() {
        fill(0, 0, 0, 200);
        rect(100, 200, 600, 200, 20);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(24);
        text(this.dialogText, 400, 300);
        textSize(18);
        text('Press Y: Yes / Press N: No', 400, 340);
    }

    applyToolEffect(tool) {
        switch (tool.type) {
            case 'ballGrow':
                new BallSizeEffect('big').applyEffect(this.state.balls, this.state.paddle);
                break;
            case 'ballShrink':
                new BallSizeEffect('small').applyEffect(this.state.balls, this.state.paddle);
                break;
            case 'paddleGrow':
                new PaddleSizeEffect('long').applyEffect(this.state.balls, this.state.paddle);
                break;
            case 'paddleMax':
                new PaddleSizeEffect('max').applyEffect(this.state.balls, this.state.paddle);
                break;
            case 'paddleShrink':
                new PaddleSizeEffect('short').applyEffect(this.state.balls, this.state.paddle);
                break;
        }
    }
}