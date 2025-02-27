class GameView {
    constructor(stage, gameCanvas) {
        this.stage = stage;
        this.canvas = gameCanvas;
        this.updateScale();
    }

    display() {
        this.canvas.background('#6EB6FF'); // blue

        this.stage.paddle.display(this.canvas);

        for (let ball of this.stage.balls) {
            ball.display(this.canvas);
        }

        for (let brick of this.stage.bricks) {
            brick.display(this.canvas);
        }

        for (let border of this.stage.border) {
            border.display(this.canvas);
        }

        for (let tool of this.stage.tools) {
            tool.display(this.canvas);
        }

        image(this.canvas, this.canvasX, this.canvasY, 800 * this.scaleFactor, 600 * this.scaleFactor);
    }

    resizeWindow() {
       console.log("GameView");
       this.updateScale();
    }

    // Calculate the scaling factor and adjust the centering.
    updateScale() {
        console.log("GameView updateScale");
        let availableHeight = windowHeight * 0.9; //  5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
    }
}

