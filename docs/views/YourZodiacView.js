class YourZodiacView {
    constructor(pageController) {
        this.pageController = pageController;
        this.updateScale();
        this.displayText();

        this.silhouettes= [ratSilhouette, oxSilhouette, tigerSilhouette, rabbitSilhouette, dragonSilhouette, snakeSilhouette,
            horseSilhouette, goatSilhouette, monkeySilhouette, roosterSilhouette, dogSilhouette, pigSilhouette];

        this.zodiac = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake','horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
        this.index = 0;         
        this.interval = 8;     
        this.x = 200;
        this.y = 200;           
    }   

    update() {
        if (frameCount % this.interval === 0) {
            this.index = (this.index + 1) % this.silhouettes.length;
        }
    }

    display() {
        background('#6EB6FF');
        if (this.silhouettes.length > 0) {
            image(this.silhouettes[this.index], this.x, this.y, 300, 300);
            fill(0);
            textSize(32);
            textAlign(CENTER, CENTER);
            text(this.zodiac[this.index], this.x, this.y + 500);
        }
    }

    resizeWindow() {
        this.updateScale();
        this.positionSetting();
    }

    positionSetting() {
        this.initialY = windowHeight * 0.1;
        this.targetHeight = windowHeight * 0.2;
        this.baseY = windowHeight / 2;
        this.baseX = windowWidth / 2;
    }

    displayText() {
        this.displayYear();
    }

    displayYear() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Year: ", windowWidth / 2, windowHeight * 0.2 * this.scaleFactor);
    }

    displayInstruction() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Enter your birthday!", windowWidth / 2, windowHeight - 80 * this.scaleFactor);
    }

    handleKeyPress() {
        if (key === ' ') {
            
        } else if (key === 'Enter') {
            
        }
    }

    updateScale() {
        let availableHeight = windowHeight * 0.9;  // 5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600);
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2; 
    }
}
