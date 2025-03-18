class GodView {
    constructor(pageController) {
        this.pageController = pageController;
        this.scaleFactor = 1;
        this.animationProgress = 0;
        this.animationSpeed = 0.008;
        this.dialogVisible = false;
        this.waveOffset = 0;
        this.waveSpeed = 0.1;
        this.waveAmplitude = 5;
        this.typingSpeed = 3;
        this.dialogText = dialogData.greeting;
        this.secondText = dialogData.warning;
        this.typedText = "";
        this.charIndex = 0;
        this.scrollY = 0;

        this.positionSetting();
        this.godSetting();
        this.dialogPicSetting();

        this.dialogContainer = createDiv('');
        this.dialogContainer.style('width', this.dialogPic.width + 'px');
        this.dialogContainer.style('height', this.dialogPic.height + 'px');
        this.dialogContainer.style('overflow-y', 'auto');
        this.dialogContainer.style('position', 'absolute');
        this.dialogContainer.style('top', this.dialogPic.y + 'px');
        this.dialogContainer.style('left', this.dialogPic.x + 'px');

        this.continueCount = 0;
    }

    update() {
        this.growAnimation();

        if (this.dialogVisible && this.charIndex < this.dialogText.length) {
            if (frameCount % this.typingSpeed === 0) {
                this.charIndex++;
                this.typedText = this.dialogText.substring(0, this.charIndex);
            }
        }
    }

    display() {
        background('#6EB6FF');
        let floatY = this.god.y + sin(this.waveOffset) * this.waveAmplitude;
        // display a God with a floating effect
        push();
        translate(this.god.x + this.god.width / 2, floatY + this.god.height / 2);
        scale(this.animationScale);
        imageMode(CENTER);
        image(this.god.img, 0, 0, this.god.width, this.god.height);
        pop();
        if (this.dialogVisible) {
            image(this.dialogPic.img, this.dialogPic.x, this.dialogPic.y, this.dialogPic.width, this.dialogPic.height);
            fill(0);
            textSize(32);
            textAlign(LEFT, TOP);
            let textX = this.dialogPic.x + 36;
            let textY = this.dialogPic.y + 30 + this.scrollY;
            // show dialog text
            text(this.typedText, textX, textY, this.dialogPic.width - 40, this.dialogPic.height - 40);
            this.displayInstruction();
        }
    }

    resizeWindow() {
        this.positionSetting();
        this.godSetting();
        this.dialogPicSetting();
    }

    growAnimation() {
        if (this.animationProgress < 1) {
            this.animationProgress += this.animationSpeed;
            this.animationProgress = constrain(this.animationProgress, 0, 1);
            this.animationScale = lerp(0.2, 1, this.animationProgress);
            this.waveOffset += this.waveSpeed;
        } else {
            this.dialogVisible = true;
        }
    }

    positionSetting() {
        this.initialY = windowHeight * 0.1;
        this.targetHeight = windowHeight * 0.2;
        this.baseY = windowHeight / 2;
        this.baseX = windowWidth / 2;
    }

    godSetting() {
        if (!godImg) return;
        this.god = {
            img: godImg,
            y: this.baseY,
            amplitude: 5,
            speed: 0.23,
            height: this.targetHeight
        };
        this.god.width = (this.god.img.width / this.god.img.height) * this.god.height;
        this.god.x = (windowWidth - this.god.width) / 2;
        this.god.y = (windowHeight - this.god.height - 400) / 2;
    }

    dialogPicSetting() {
        this.dialogPic = {
            img: dialogImg,
            height: 320
        };
        this.dialogPic.width = 1540;
        this.dialogPic.x = (windowWidth - this.dialogPic.width) / 2;
        this.dialogPic.y = (windowHeight - this.dialogPic.height - 100);
    }

    displayInstruction(){
        fill(255);
        noStroke();
        textSize(36 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Press Space to continue, or press Enter to start the game.", windowWidth  / 2,  windowHeight -  80);
    }

    handleKeyPress() {
        if (key === ' ') {
            this.dialogText = this.secondText;
            this.charIndex = 0;  
            this.typedText = "";  
            this.continueCount++;
        }else if (key === 'Enter') {
            this.pageController.switchToNewStageMap();
        }

        if(this.continueCount == 2){
            this.pageController.switchToNewStageMap();
        }
    }
}
