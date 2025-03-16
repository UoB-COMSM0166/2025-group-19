class SettingDialog {
    /**
     * @param {*} 
     */
    constructor(welcomeView) {
        this.welcomeView = welcomeView;
        this.updateScale();
        this.dialogOn = false;
        this.displayOption = 0;
        this.popupVisible = false; // setting
        this.infoVisible = false; //info
        this.settingOption = 0;
        this.infoOption = 0;
        this.leftOptions =  ["Sound\nEffects", "Keyboards"];
        this.leftOptions_info = ["Team\n Members", "Game\n Intro"];
        this.slider_bgMusic = createSlider(0, 255, 128);
        this.slider_soundEffect = createSlider(0, 255, 128);
        this.slider_bgMusic.hide();
        this.slider_soundEffect.hide();
        this.selectedSliderIndex = 0;
        this.selectedBtnIndex = 0;
        this.isInRightContent = false;
        this.keyboard_btns = {
            shortBall: createButton("SHORT\nBALL"),
            moveLeft: createButton("MOVE\nLEFT"),
            moveRight: createButton("MOVE\nRIGHT"),
            bounce: createButton("BOUNCE"),
        };
        Object.values(this.keyboard_btns).forEach(btn => btn.hide());
        this.teamImg = teamImg;
        this.teamNames = ["Areta", "Mikas", "Elle", "Daisy", "Erik", "Lukas"];
        
    }

    display(){
        if(this.dialogOn){
            this.displayDialog();
        }
    }

    openDialog(num){
        this.dialogOn = true;
        this.popupVisible = true;
        this.displayOption = num;
    }

    closeDialog(){
        this.dialogOn = false;
        this.popupVisible = false;
        this.isInRightContent = false;
        this.settingOption = 0;
        this.infoOption = 0;
        this.welcomeView.dialogOn = false;
    }
    
    resizeWindow() {
        this.updateScale();
        if(this.dialogOn){
            this.displayDialog();
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

    handleSettingKeyPress(key) {
        if(this.dialogOn) {
            if (!this.isInRightContent) {// check in leftBar or rightContent
                if (key === 'ArrowUp') {
                    this.settingOption = (this.settingOption - 1 + 2) % 2;
                } else if (key === 'ArrowDown') {
                    this.settingOption = (this.settingOption + 1) % 2;
                } else if (key === 'q') {
                    this.popupVisible = false;
                    this.slider_bgMusic.hide();
                    this.slider_soundEffect.hide();
                    Object.values(this.keyboard_btns).forEach(btn => btn.hide());
                    this.closeDialog();
                } else if (key === 'Enter') {
                    this.isInRightContent = true;
                }
            } else{
                if (this.settingOption === 1) {
                    this.handleSettingKeyboard(key);
                } else if (this.settingOption === 0) {
                    this.handleSettingSoundKeyPress(key);
                } else if (key === 'q') {
                    this.isInRightContent = false;
                }
            }
        } else {
            this.display();
        }
    }

    handleSettingKeyboard(key) {
        if (key === 'ArrowUp') {
            this.selectedBtnIndex = (this.selectedBtnIndex - 1 + 4) % 4;
        } else if (key === 'ArrowDown') {
            this.selectedBtnIndex = (this.selectedBtnIndex + 1) % 4;

        } else if (key === 'q') {
            this.isInRightContent = false;
        }
    }

    handleSettingSoundKeyPress(key) {
        if (key === 'ArrowUp' || key === 'ArrowDown') {
            this.selectedSliderIndex = 1 - this.selectedSliderIndex; 
        } else if (key === 'ArrowLeft') {
            if (this.selectedSliderIndex === 0) {
                this.slider_bgMusic.value(this.slider_bgMusic.value() - 10);
            } else {
                this.slider_soundEffect.value(this.slider_soundEffect.value() - 10);
            }
        } else if (key === 'ArrowRight') {
            if (this.selectedSliderIndex === 0) {
                this.slider_bgMusic.value(this.slider_bgMusic.value() + 10);
            } else {
                this.slider_soundEffect.value(this.slider_soundEffect.value() + 10);
            }
        } else if (key === 'q') {
            this.isInRightContent = false;
        }
    
    }

    displayDialog() {
        this.dialogWidth = 800 * this.scaleFactor;
        this.dialogHeight = 500 * this.scaleFactor;
        this.dialogX = this.canvasX + (this.scaledWidth - this.dialogWidth) / 2;
        this.dialogY = this.canvasY + (this.scaledHeight - this.dialogHeight) / 2;
        fill(0, 0, 0, 200);
        rect(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight, 20 * this.scaleFactor); 
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(25 * this.scaleFactor);
        text('Press q to close dialog and Enter to control', this.dialogX + this.dialogWidth / 2, this.dialogY - 25); 
        if (this.displayOption === 0 ) {
            this.showSettingPopup(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight);
        }
        else if (this.displayOption === 1) {
            this.showInfoPopup(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight);
        }
        
    }

    showInfoPopup (x, y, width, height) {
        stroke('white');
        strokeWeight(5);
        line(x + width / 3, y + 30, x + width / 3, y + height- 30);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(255);
        for(let i = 0; i < this.leftOptions_info.length; i++) {
            const optionsY = y + i * height / 2;
            if(this.infoOption === i) {
                textStyle(NORMAL);
                stroke("pink");
                textSize(35 * this.scaleFactor);
                text(this.leftOptions_info[i], x + width / 6, optionsY + 60);
            } else {
                textStyle(NORMAL);
                noStroke();
                textSize(30 * this.scaleFactor);
                text(this.leftOptions_info[i], x + width / 6, optionsY + 70);
            }
          }
          if (this.infoOption === 0) {
                this.showInfoTeamImg(x + width / 12 * 5, y, width / 12 * 7, height);
          } else {
                this.showInfoIntro(x + width / 12 * 5, y, width / 12 * 7, height);
          }
        
    }

    showInfoIntro(x, y, width, height) {
        let introText = `Greetings young explorer!\n\nWelcome to Zodiac Land, where according to legend, the twelve fabled creatures of the Chinese zodiac calendar reside. Many have come to these sacred lands in search of these mythological beings, but few have succeeded, and fewer have been able to complete the ultimate quest of taming them all.\n\nI must warn you that the path you are about to take is treacherous. Each animal is able to harness immense power, and will do anything to deter your efforts. While some effects do you harm, others may be used to your benefit, and use them wisely. After all, time is of the essence! Please also beware of the all-mighty black holes, where one wrong slip could prove disastrous for your efforts.\n\nChoose the beast with the greatest affinity (in accordance with your birth year), or start wherever your wish - the choice is up to you.\n\nBest of luck, young one.`;
        fill(255);
        textAlign(LEFT, TOP);
        strokeWeight(0.5);
        textSize(18 * this.scaleFactor);
        text(introText, x, y + height / 10, width * 0.8, height * 0.8);
        this.scrollY += this.scrollSpeed;
        this.scrollY = constrain(scrollY, 0, height / 5 * 4);
    }

    showInfoTeamImg(x, y, width, height) {
        let cols = 3;
        let rows = 2;
        let imgSize = min(width / cols, height / rows) * 0.8;
        let paddingX = (width - cols * imgSize) / (cols + 1);
        let paddingY = (height - rows * imgSize) / (rows + 1);
        textAlign(CENTER, CENTER);
        textSize(16);
        fill(255);
        for (let i = 0; i < this.teamImg.length; i++) {
            let col = i % cols;
            let row = floor(i / cols);
            let imgX = x + paddingX + col * (imgSize);
            let imgY = y + paddingY + row * (imgSize + paddingY);
            let img = this.teamImg[i];
            if(this.teamImg[i]){
                image(img, imgX, imgY, imgSize, imgSize);
                text(this.teamNames[i], imgX + imgSize / 2, imgY + imgSize + 20)
            }
            
        }
        /**  for circle img
        let img = this.teamImg1;
        let circle = createGraphics(imgSize, imgSize);
        //circle.ellipse(imgX + imgSize / 2, imgY + imgSize / 2, imgSize, imgSize);
        circle.ellipse(imgSize, imgSize, imgX + imgSize / 2, imgY + imgSize / 2);
        img.mask(circle);
        image(img, imgX, imgY, imgSize, imgSize);
        */

    }

    showSettingPopup(x, y, width, height) {
        stroke('white'); // draw a line to seperate the leftbar and content
        strokeWeight(5);
        line(x + width / 3, y + 30, x + width / 3, y + height- 30); //leftbar-menu outline
        textAlign(CENTER, CENTER); //
        noStroke();
        fill(255);
        for(let i = 0; i < this.leftOptions.length; i++) {
            const optionsY = y + i * height / 2;
            if(this.settingOption === i) {
                textStyle(NORMAL);
                stroke("pink");
                textSize(35 * this.scaleFactor);
                text(this.leftOptions[i], x + width / 6, optionsY + 60);
            }
            else {
                textStyle(NORMAL);
                noStroke();
                textSize(25 * this.scaleFactor);
                text(this.leftOptions[i], x + width / 6, optionsY + 70);
            }
        }
        switch (this.settingOption) {
            case 0: 
                this.showSettingSound(x + width / 12 * 5, y, width / 12 * 7, height);
                break;
            case 1: 
                this.showSettingKeyboard(x + width / 12 * 5, y, width / 12 * 7, height);
                break;
            default: 
                this.showSettingSound(x + width / 12 * 5, y, width / 12 * 7, height);
                break;
        }
        if(this.settingOption !== 0) {
            this.slider_bgMusic.hide();
            this.slider_soundEffect.hide();
        }
        if(this.settingOption !== 1){
            Object.values(this.keyboard_btns).forEach(btn => btn.hide());
        }
        
    }
    showSettingSound(x, y, width, height) {
        textAlign(CENTER, CENTER);
        textSize(25 * this.scaleFactor);
        if (this.isInRightContent) {
            if (this.selectedSliderIndex === 0) {
                fill("yellow");
            } else {
                fill(255);
            }
            text("Background\n Music", x + 30, y + height / 4);
            if (this.selectedSliderIndex === 1) {
                fill("yellow");
            } else {
                fill(255);
            }
            text("Sound\n Effects", x + 30, y + height / 4 * 3);
        } else {
            text("Background\n Music", x + 30, y + height / 4);
            text("Sound\n Effects", x + 30, y + height / 4 * 3);

        }
        this.slider_bgMusic.size(width / 4);
        this.slider_bgMusic.position(x + width / 2, y + height / 4);
        this.slider_soundEffect.size(width / 4);
        this.slider_soundEffect.position(x + width / 2 , y + height / 4 * 3);
        this.slider_bgMusic.show();
        this.slider_soundEffect.show();

    }

    showSettingKeyboard(x, y , width, height) {
        let actions = ["SHORT\nBALL", "MOVE\nLEFT", "MOVE\nRIGHT", "BOUNCE"];
        let action_cons = ["shortBall", "moveLeft", "moveRight", "bounce"];
        textAlign(CENTER, CENTER);
        textSize(25 * this.scaleFactor);
        for (let i = 0; i < actions.length; i++) {
            let actionX = x + 30;
            let btnX = x + width / 3;
            let actionY = y + height / actions.length * i + height / 10;
            let btn = this.keyboard_btns[action_cons[i]];
            if(this.selectedBtnIndex === i) {
                fill("yellow");
            } else {
                fill(255);
            }
            btn.position(btnX, actionY);
            btn.show();
            text(actions[i], actionX, actionY);
        }
    }

    handleInfoKeyPress(key) {
        if (key === 'ArrowUp') {
            this.infoOption = (this.infoOption - 1 + 2) % 2;
        } else if (key === 'ArrowDown') {
            this.infoOption = (this.infoOption + 1) % 2;
        } else if (key === 'q') {
            this.dialogOn = false;
            this.infoVisible = false;
            this.closeDialog();
        }
    }
}
  