class SettingDialog {
    /**
     * @param {*} 
     */
    constructor(welcomeView, keyboardController) {
        this.welcomeView = welcomeView;
        this.keyboardController = keyboardController;
        this.awaitingKeyPress = false;
        this.currentRebindAction = null;
        this.updateScale();
        this.dialogOn = false;
        this.displayOption = 0;
        this.popupVisible = false; // setting
        this.infoVisible = false; //info
        this.settingOption = 0;
        this.infoOption = 0;
        this.leftOptions =  ["Sound\nEffects", "Keyboards"];
        this.leftOptions_info = ["Team\n Members", "Game\n Intro"];
        this.bgMusic = bgMusic;
        this.paddlePowerUpSound = paddlePowerUpSound;
        this.slider_bgMusic = createSlider(0, 100, 50);
        this.slider_soundEffect = createSlider(0, 100, 50);
        this.slider_bgMusic.hide();
        this.slider_soundEffect.hide();
        this.selectedSliderIndex = 0;
        this.selectedBtnIndex = -1;
        this.isInRightContent = false;
        this.warntext = "P, C, M, Enter, Tab, Shift \n can't be control keys \n No duplicate keys allowed";
        if (keyboardController) {
            const controllerBindings = keyboardController.getKeyBindings();
            this.keyBindings = {
                shootBall: controllerBindings.shootBall || 'SPACE',
                moveLeft: controllerBindings.moveLeft || 'ArrowLeft',
                moveRight: controllerBindings.moveRight || 'ArrowRight',
                togglePaddle: controllerBindings.togglePaddle || 'ArrowUp'
            };
            this.keyDisplay = {
                shootBall: this.formatKey(this.keyBindings.shootBall),
                moveLeft: this.formatKey(this.keyBindings.moveLeft),
                moveRight: this.formatKey(this.keyBindings.moveRight),
                togglePaddle: this.formatKey(this.keyBindings.togglePaddle)
            };
        }
        
        this.teamImg = teamImg;
        this.teamNames = ["Areta", "Daisy", "Elle", "Erik",  "Lucas", "Mikas"];
        this.scrollOffset = 0;
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
            if (!this.isInRightContent) {
                if (key === 'ArrowUp') {
                    this.settingOption = (this.settingOption - 1 + 2) % 2;
                } else if (key === 'ArrowDown') {
                    this.settingOption = (this.settingOption + 1) % 2;
                } else if (key === 'Escape') {
                    this.popupVisible = false;
                    this.slider_bgMusic.hide();
                    this.slider_soundEffect.hide();
                    this.closeDialog();
                } else if (key === 'ArrowRight') {
                    this.isInRightContent = true;
                    if (this.settingOption === 1) {
                        this.selectedBtnIndex = 0; // Select the first button
                    }
                }
            } else{
                if (this.settingOption === 1) {
                    this.handleSettingKeyboard(key);
                } else if (this.settingOption === 0) {
                    this.handleSettingSoundKeyPress(key);
                } else if (key === 'Escape') {
                    this.isInRightContent = false;
                }
            }
        } else {
            this.display();
        }
    }

    formatKey(key) {
        const specialKeys = {
            'ArrowLeft': '←',
            'ArrowRight': '→',
            'ArrowUp': '↑',
            'ArrowDown': '↓',
            ' ': 'SPACE'
        };
        return specialKeys[key] || key.toUpperCase();
    }

    handleSettingKeyboard(key) {
        if (this.awaitingKeyPress) {
            if (key.toUpperCase() === 'P' || key.toUpperCase() === 'C' || key.toUpperCase() === 'M' || key.toUpperCase() === 'ENTER' || key.toUpperCase() === 'TAB' || key.toUpperCase() === 'SHIFT') {
                this.awaitingKeyPress = false;
                this.currentRebindAction = null;
                return;
            }
            const alreadyBoundAction = Object.keys(this.keyBindings).find(action => 
                this.keyBindings[action].toUpperCase() === key.toUpperCase()
            );
            if (alreadyBoundAction) {
                this.awaitingKeyPress = false;
                this.currentRebindAction = null;
                return;
            }
            globalKeyBindings[this.currentRebindAction] = key;
            const displayMap = {
                shootBall: 'shootBall',
                moveLeft: 'moveLeft',
                moveRight: 'moveRight',
                togglePaddle: 'togglePaddle'
            };
            this.keyDisplay[displayMap[this.currentRebindAction]] = this.formatKey(key);
            this.keyBindings[this.currentRebindAction] = key;
            this.awaitingKeyPress = false;
            this.currentRebindAction = null;
        } else {
            if (key === 'ArrowUp') {
                this.selectedBtnIndex = (this.selectedBtnIndex - 1 + 4) % 4;
            } else if (key === 'ArrowDown') {
                this.selectedBtnIndex = (this.selectedBtnIndex + 1) % 4;
            } else if (key === 'Escape') {
                this.selectedBtnIndex = -1;
                this.isInRightContent = false;
            } else if (key === 'Enter' && this.selectedBtnIndex >= 0) {
                this.awaitingKeyPress = true;
                const actions = ['shootBall', 'moveLeft', 'moveRight', 'togglePaddle'];
                this.currentRebindAction = actions[this.selectedBtnIndex];
            }
        }
    }

    handleSettingSoundKeyPress(key) {
        if (key === 'ArrowUp' || key === 'ArrowDown') {
            this.selectedSliderIndex = 1 - this.selectedSliderIndex; 
        } else if (key === 'ArrowLeft') {
            if (this.selectedSliderIndex === 0) {
                let newValue = constrain(this.slider_bgMusic.value() - 10, 0, 100);
                this.slider_bgMusic.value(newValue);
                this.bgMusic.setVolume(newValue / 100);
            } else if (this.selectedSliderIndex === 1){
                let newValue = constrain(this.slider_soundEffect.value() - 10, 0, 100);
                this.slider_soundEffect.value(newValue);
                this.paddlePowerUpSound.setVolume(newValue / 100);
                this.paddlePowerUpSound.play();
            }
        } else if (key === 'ArrowRight') {
            if (this.selectedSliderIndex === 0) {
                let newValue = constrain(this.slider_bgMusic.value() + 10, 0, 100);
                this.slider_bgMusic.value(newValue);
                this.bgMusic.setVolume(newValue / 100);
            } else if (this.selectedSliderIndex === 1){
                let newValue = constrain(this.slider_soundEffect.value() + 10, 0, 100);
                this.slider_soundEffect.value(newValue);
                this.paddlePowerUpSound.setVolume(newValue / 100);
                this.paddlePowerUpSound.play();
            }
        } else if (key === 'Escape') {
            this.selectedSliderIndex = 0;
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
        if (this.displayOption === 0 ) {
            textSize(20 * this.scaleFactor);
            text('Press ESC to return to left menu or close dialog\n Press ENTER to change key bindings and Arrow Keys to control', this.dialogX + this.dialogWidth / 2, this.dialogY - 50); 
            this.showSettingPopup(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight);
        }
        else if (this.displayOption === 1) {
            textSize(23 * this.scaleFactor);
            text('Press ESC to return to left menu and/or close dialog\n Press arrow keys to control', this.dialogX + this.dialogWidth / 2, this.dialogY - 50); 
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
            const optionsY = y + i * height / this.leftOptions_info.length + height / 5;
            if (this.infoOption === i) {
                textStyle(NORMAL);
                stroke("pink");
                textSize(35 * this.scaleFactor);
                text(this.leftOptions_info[i], x + width / 6, optionsY);
            } else {
                textStyle(NORMAL);
                noStroke();
                textSize(30 * this.scaleFactor);
                text(this.leftOptions_info[i], x + width / 6, optionsY);
            }
          }
          if (this.infoOption === 0) {
                this.showInfoTeamImg(x + width / 12 * 5, y, width / 12 * 7, height);
          } else {
                this.showInfoIntro(x + width / 12 * 5, y, width / 12 * 7, height);
          }
        
    }

    showInfoIntro(x, y, width, height) {
        let introText = `
        Greetings young explorer!\n
        Welcome to Zodiac Land, where according to legend, the twelve fabled creatures of the Chinese zodiac calendar reside. 
        Many have come to these sacred lands in search of these mythological beings, but few have succeeded, and fewer have been able to complete the ultimate quest of taming them all.\n
        I must warn you that the path you are about to take is treacherous. \n
        Each animal is able to harness immense power, and will do anything to deter your efforts. \n
        While some effects do you harm, others may be used to your benefit, and use them wisely. \n
        After all, time is of the essence! \n
        Please also beware of the all-mighty black holes, where one wrong slip could prove disastrous for your efforts.\n
        Choose the beast with the greatest affinity (in accordance with your birth year), or start wherever your wish - the choice is up to you.\n
        Best of luck, young one.`;
        height -= height / 10;
        y += height / 10;
        width -= width / 10;
        fill(255);
        textAlign(LEFT, TOP);
        strokeWeight(0.5);
        textSize(18 * this.scaleFactor);
        push();
        const lines = introText.split('\n').map(line => line.trim());;
        const wrappedLines = [];
        for (let line of lines) {
            let words = line.split(' ');
            let currentLine = words[0];
            for (let i = 1; i < words.length; i++) {
                let word = words[i];
                if (textWidth(currentLine + ' ' + word) <= width) {
                    currentLine += ' ' + word; 
                } else {
                    wrappedLines.push(currentLine);
                    currentLine = word;
                }
            }
            wrappedLines.push(currentLine);
        }
        const lineHeight = 24 * this.scaleFactor;
        const textHeight = wrappedLines.length * lineHeight;
        const maxScrollOffset = max(textHeight - height, 0);
        this.scrollOffset = constrain(this.scrollOffset, 0, maxScrollOffset);
        const startLine = floor(this.scrollOffset / lineHeight);
        const verticalOffset = this.scrollOffset % lineHeight;
        for (let i = startLine; i < wrappedLines.length; i++) {
            const lineY = y + (i - startLine) * lineHeight - verticalOffset;
            if (lineY + lineHeight < y || lineY > y + height - 20) {
                continue;
            }
            fill(255);
            text(wrappedLines[i], x, lineY);
        }
        pop();      
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
            let aspectRatio = img.width / img.height;
            if(this.teamImg[i]){
                let circleMask = createGraphics(imgSize, imgSize);
                circleMask.ellipse(imgSize / 2, imgSize / 2, imgSize, imgSize);
                img.mask(circleMask);
                if (aspectRatio > 1) {
                    image(img, imgX, imgY, imgSize, imgSize / aspectRatio);
                } else {
                    image(img, imgX, imgY, imgSize * aspectRatio, imgSize);
                }
                text(this.teamNames[i], imgX + imgSize / 2, imgY + imgSize + 20);
            }
        }
    }

    showSettingPopup(x, y, width, height) {
        stroke('white'); // draw a line to seperate the leftbar and content
        strokeWeight(5);
        line(x + width / 3, y + 30, x + width / 3, y + height- 30); //leftbar-menu outline
        textAlign(CENTER, CENTER); 
        noStroke();
        fill(255);
        for(let i = 0; i < this.leftOptions.length; i++) {
            const optionsY = y + i * height / this.leftOptions.length + height / 5;
            if(this.settingOption === i) {
                textStyle(NORMAL);
                stroke("pink");
                textSize(35 * this.scaleFactor);
                text(this.leftOptions[i], x + width / 6, optionsY);
            }
            else {
                textStyle(NORMAL);
                noStroke();
                textSize(25 * this.scaleFactor);
                text(this.leftOptions[i], x + width / 6, optionsY);
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
            text("Background\n Music", x + width / 6, y + height / 4);
            if (this.selectedSliderIndex === 1) {
                fill("yellow");
            } else {
                fill(255);
            }
            text("Sound\n Effects", x + width / 6, y + height / 4 * 3);
        } else {
            text("Background\n Music", x + width / 6, y + height / 4);
            text("Sound\n Effects", x + width / 6, y + height / 4 * 3);

        }
        this.slider_bgMusic.size(width / 4);
        this.slider_bgMusic.position(x + width / 2, y + height / 4);
        this.slider_soundEffect.size(width / 4);
        this.slider_soundEffect.position(x + width / 2 , y + height / 4 * 3);
        this.slider_bgMusic.show();
        this.slider_soundEffect.show();

    }

    showSettingKeyboard(x, y , width, height) {
        let actions = ["SHOOT\nBALL", "MOVE\nLEFT", "MOVE\nRIGHT", "TOGGLE\nPADDLE"];
        let action_cons = ["shootBall", "moveLeft", "moveRight", "togglePaddle"];
        textAlign(CENTER, CENTER);
        textSize(25 * this.scaleFactor);
        for (let i = 0; i < actions.length; i++) {
            let actionX = x + width / 6;
            let btnX = x + width / 5 * 3;
            let actionY = y + height / actions.length * i + height / 10;
            let warnX = x + width / 5 * 3;
            let warnY = actionY + 25 * this.scaleFactor;
            noStroke();
            if(this.selectedBtnIndex === i) {
                fill("yellow");
                if(this.awaitingKeyPress) {
                    text(" ", btnX, actionY);
                    textSize(18 * this.scaleFactor);
                    text(this.warntext, btnX, actionY);
                } else {
                    text(this.keyDisplay[action_cons[i]], btnX, actionY);
                }
            } else{
                fill(255);
                text(this.keyDisplay[action_cons[i]], btnX, actionY);
            }
            textSize(25 * this.scaleFactor);
            text(actions[i], actionX, actionY);
        }
    }

    handleInfoKeyPress(key) {
        if(!this.isInRightContent) {
            if (key === 'ArrowUp') {
                this.infoOption = (this.infoOption - 1 + 2) % 2;
            } else if (key === 'ArrowDown') {
                this.infoOption = (this.infoOption + 1) % 2;
            } else if (key === 'Escape') {
                this.dialogOn = false;
                this.infoVisible = false;
                this.scrollOffset = 0;
                this.closeDialog();
            } else if (key === 'ArrowRight' && this.infoOption == 1) {
                this.isInRightContent = true;
            }
        } else {
            if (key === 'ArrowUp') {
                this.scrollOffset -= 20;
            } else if (key === 'ArrowDown') {
                this.scrollOffset += 20;
            } else if (key === 'Escape') {
                this.isInRightContent = false;
            }
        }
    }
}