class GameView {
    constructor(stage) {
        this.stage = stage;
        this.canvas = createGraphics(800, 600);
    }

    display() {
        this.canvas.background(this.stage.bgImage);

        this.stage.paddle.display(this.canvas);

        for (let ball of this.stage.balls) {
            ball.display(this.canvas);
        }

        for (let brick of this.stage.bricks) {
            brick.display(this.canvas);
        }

        for (let tool of this.stage.tools) {
            tool.display(this.canvas);
        }

        image(this.canvas, 0, 0);
    }
}
