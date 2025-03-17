class GodView {
    constructor(pageController) {
        this.pageController = pageController;
        this.scaleFactor = 1;
        this.animationProgress = 0;  //controls animation progress (0 ~ 1)
        this.animationSpeed = 0.008; 
        this.dialogVisible = false;  
        this.waveOffset = 0;  // initial wave position
        this.waveSpeed = 0.1;  
        this.waveAmplitude = 5; 
        this.positionSetting();
        this.godSetting();
        this.dialogPicSetting();
    }

    update() {
        this.growAnimation();
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
        // only display the dialog box after the animation ends.
        if (this.dialogVisible) {
            image(this.dialogPic.img, this.dialogPic.x, this.dialogPic.y, this.dialogPic.width, this.dialogPic.height);
        }
    }

    resizeWindow(){
        this.positionSetting();
        this.godSetting();
        this.dialogPicSetting();
    }

    growAnimation() {
        if (this.animationProgress < 1) {
            this.animationProgress += this.animationSpeed;
            this.animationProgress = constrain(this.animationProgress, 0, 1);
            this.animationScale = lerp(0.2, 1, this.animationProgress);
            this.waveOffset += this.waveSpeed; // update the wave offset.
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
            height: 420
        };
        this.dialogPic.width = 1540;
        this.dialogPic.x = (windowWidth - this.dialogPic.width) / 2;
        this.dialogPic.y = (windowHeight - this.dialogPic.height - 30);
    }
}
