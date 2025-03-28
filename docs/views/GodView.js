class GodView {
    constructor(pageController) {
        this.pageController = pageController;
        this.updateScale();
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
        this.dialogContainerSetting();
        this.continueCount = 0;
    }

    dialogContainerSetting(){
        this.dialogContainer.style('width', this.dialogPic.width + 'px');
        this.dialogContainer.style('height', this.dialogPic.height + 'px');
        this.dialogContainer.style('overflow-y', 'auto');
        this.dialogContainer.style('position', 'absolute');
        this.dialogContainer.style('top', this.dialogPic.y + 'px');
        this.dialogContainer.style('left', this.dialogPic.x + 'px');
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
            this.displayText();
        }
    }

    resizeWindow() {
        this.updateScale();
        this.dialogContainerSetting();
        this.positionSetting();
        this.godSetting();
        this.dialogPicSetting();
    }

    growAnimation() {
        if (this.forceAnimationComplete) {
            this.animationProgress = 1;
            this.animationScale = 1;  
            this.waveOffset += this.waveSpeed;  
            this.dialogVisible = true;  
            this.forceAnimationComplete = false;
        } else if (this.animationProgress < 1) {
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
        this.god.y = (windowHeight - this.god.height - 400* this.scaleFactor) / 2;
    }

    dialogPicSetting() {
        let newWidth = windowWidth * 0.9;
        let newHeight = 320  * this.scaleFactor 
        this.dialogPic = {
            img: dialogImg,
            width: newWidth,
            height: newHeight,
            x: (windowWidth - newWidth) / 2, 
            y: windowHeight - newHeight - 100 * this.scaleFactor 
        };    
    }

    displayText(){
        this.displayStory()
        this.displayInstruction()
    }

    displayStory(){
        fill(0);
        textSize(28 * this.scaleFactor); 
        textAlign(LEFT, TOP);
        let textX = this.dialogPic.x + 36;
        let textY = this.dialogPic.y + 30 + this.scrollY;
        // show dialog text
        text(this.typedText, textX, textY, this.dialogPic.width - 40, this.dialogPic.height - 40);
    }

    displayInstruction(){
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Press Enter to proceed, or begin the game.", windowWidth  / 2,  windowHeight -  80* this.scaleFactor);
    }

    handleKeyPress() {
        if (key === 'Enter') {
            if (this.continueCount === 0) {
                this.forceAnimationComplete = true;
                this.continueCount++;
            } else if (this.continueCount === 1) {
                this.dialogText = dialogData.warning;
                this.charIndex = 0;
                this.typedText = "";
                this.continueCount++;
            } else if (this.continueCount === 2) {
                this.dialogContainer.remove();
                this.pageController.switchToNewStageMap();
            }
        }
    }

    updateScale() {
        let availableHeight = windowHeight * 0.9; //  5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
    }
}
