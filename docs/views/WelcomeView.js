class WelcomeView {
  constructor(controller) {
    this.controller = controller;
    this.selectedIndex = 0;
    this.roadAnimation = new RoadAnimation();
    this.animalAnimation = new AnimalAnimation(this.roadAnimation.imgHeight);
    this.cloudAnimation1 = new CloudAnimation(1, 30);
    this.createText(); 
    //this.cloudAnimation2 = new CloudAnimation(2, 110, 130, 0.5);
    this.popupVisible = false; // for setting popup
    this.infoVisible = false; // for infor popup
    this.infoOption = 1;
    this.settingOption = 0;
    this.teamImg = teamImg;
    this.scrollY = 0;
    this.scrollSpeed = 1;
    this.isHardMode = false;
    this.isInRightContent = false;
    this.slider_bgMusic = createSlider(0, 255, 128);
    this.slider_soundEffect = createSlider(0, 255, 128);
    this.slider_bgMusic.hide();
    this.slider_soundEffect.hide();
    this.selectedSliderIndex = 0;
    this.keyboard_btns = {
      shortBall: createButton("SHORT\nBALL"),
      moveLeft: createButton("MOVE\nLEFT"),
      moveRight: createButton("MOVE\nRIGHT"),
      bounce: createButton("BOUNCE"),
    };
    Object.values(this.keyboard_btns).forEach(btn => btn.hide());
  }

  update() {
    this.roadAnimation.update();
    this.animalAnimation.update();
    this.cloudAnimation1.update();
    //this.cloudAnimation2.update();
  }
  
  display() {
    //createCanvas(windowWidth, windowHeight); // full size screen
    background('#6EB6FF'); // blue
    this.roadAnimation.display();
    this.animalAnimation.display();
    this.cloudAnimation1.display();
    //this.cloudAnimation2.display();  
    if(this.popupVisible) {
      this.showSettingPopup();
    }
    if(this.infoVisible) {
      this.showInfoPopup();
    }
  }

  resizeWindow(){
    this.roadAnimation.resizeWindow();
    this.animalAnimation.resizeWindow();
  }

  createText() {
    // create container
    this.welcomePageContainer = createElement('div');
    this.welcomePageContainer.class('welcome-page-container'); 
    // title
    this.testTitle = createDiv('ZODIAC CATCH'); 
    this.testTitle.class('title'); 
    // version
    this.testGameVersion = createDiv('Version 0.5');
    this.testGameVersion.class('game-version');
    // title and version add to container
    this.welcomePageContainer.child(this.testTitle);
    this.welcomePageContainer.child(this.testGameVersion);
    // menu option
    this.options = ["START", "SETTING", "INFORMATION"];
    this.menuOptions = []; 
    for (let i = 0; i < this.options.length; i++) {
        let option = createDiv(this.options[i]);
        option.class('menu-option');
        if (i === this.selectedIndex) {
            option.addClass('selected');
        }
        this.welcomePageContainer.child(option);
        this.menuOptions.push(option);
    }
  }
  
  handleKeyPress(key) {
    if (this.popupVisible) {
      this.handleSettingKeyPress();
    }
    if (this.infoVisible) {
      this.handleInfoKeyPress();
    }
    else if(!this.popupVisible && !this.infoVisible){
      if (key === 'ArrowUp') {
        this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
      } else if (key === 'ArrowDown') {
        this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
      } else if (key === 'Enter') {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption === "START") {
          this.welcomePageContainer.remove();
          this.controller.switchToStageMap();
        } else if (selectedOption === "SETTING") {
          this.popupVisible = true;
          this.display();
        } else if (selectedOption === "INFORMATION") {
          this.infoVisible = true;
          this.display();
        }
      }
      // update option style
      for (let i = 0; i < this.menuOptions.length; i++) {
        if (i === this.selectedIndex) {
            this.menuOptions[i].addClass('selected');
        } else {
            this.menuOptions[i].removeClass('selected');
        }
      }
    }
  }

  handleInfoKeyPress() {
    if (key === 'ArrowUp') {
      this.infoOption = (this.infoOption - 1 + 2) % 2;
    } else if (key === 'ArrowDown') {
      this.infoOption = (this.infoOption + 1) % 2;
    } else if (key === 'q') {
      this.infoVisible = false;
    }
  }

  handleSettingKeyPress() {
    if (!this.isInRightContent) {// check in leftBar or rightContent
      if (key === 'ArrowUp') {
        this.settingOption = (this.settingOption - 1 + 3) % 3;
      } else if (key === 'ArrowDown') {
        this.settingOption = (this.settingOption + 1) % 3;
      } else if (key === 'q') {
        console.log("press q!");
        this.popupVisible = false;
        this.slider_bgMusic.hide();
        this.slider_soundEffect.hide();
      } else if (key === 'Enter') {
        this.isInRightContent = true;
      }
    }
    else{
      if (this.settingOption === 2) {
        this.handleSettingDifficulty(key);
      } else if (this.settingOption === 1) {
        // tbh
      } else if (this.settingOption === 0) {
        this.handleSettingSoundKeyPress(key);
      } else if (key === 'q') {
        console.log("press q2222!");
        this.isInRightContent = false;
      }
    }

  }

  handleSettingDifficulty(key) {
    if (key === 'ArrowLeft') {
      this.isHardMode = false; // Switch to EASY mode
    } else if (key === 'ArrowRight') {
      this.isHardMode = true; // Switch to HARD mode
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
    }

  }

  showSettingPopup() {
    let dialogBox = {
      x: windowWidth / 3,
      y: windowHeight / 3,
      width: windowWidth / 2,
      height: windowHeight / 2,
    };
    let leftBar = {
      width : dialogBox.width / 4,
      height : dialogBox.height,
      x : dialogBox.x + 100,
      y : dialogBox.y,
      options : ["Sound\nEffects", "Keyboards", "Modes"],
    };
    let rightContent = {
      width : dialogBox.width / 12 * 7, // 1/6 for the line 
      height : dialogBox.height,
      x : dialogBox.x + dialogBox.width * 5 / 12,
      y : dialogBox.y + 30,
    };
    
    //for background of popup
    fill(0, 0, 0, 200);
    rect(dialogBox.x, dialogBox.y, 600, dialogBox.height, 20);
    fill(255);
    // draw a line to seperate the leftbar and content
    stroke('white');
    strokeWeight(5);
    line(dialogBox.x + dialogBox.width / 3, dialogBox.y + 30, dialogBox.x + dialogBox.width / 3, dialogBox.y + dialogBox.height- 30);
    //leftbar-menu outline
    textAlign(CENTER, CENTER);
    noStroke();
    for(let i = 0; i < leftBar.options.length; i++) {
      const optionsY = leftBar.y + i * leftBar.height / 3;
      if(this.settingOption === i) {
        textStyle(NORMAL);
        stroke("pink");
        textSize(35);
        text(leftBar.options[i], leftBar.x + 10, optionsY + 60);
      }
      else {
        textStyle(NORMAL);
        noStroke();
        textSize(30);
        text(leftBar.options[i], leftBar.x, optionsY + 70);
      }
    }
    // right content
    switch (this.settingOption) {
      case 0: 
        this.showSettingSound(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
        break;
      case 1: 
        this.showSettingKeyboard(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
        break;
      case 2: 
        this.showSettingModes(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
        break;
      default: 
        this.showSettingSound(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
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

  showSettingSound(x, y , width, height) {
    //for text
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    //for sliders
    if (this.isInRightContent) {
      if (this.selectedSliderIndex === 0) {
        fill("yellow");
      } else {
        fill(255);
      }
      text("Background\n Music", x + 30, y + height / 4);
      if (this.selectedSliderIndex === 1) {
        fill("yellow");  // Red highlight for Sound Effects
      } else {
        fill(255);
      }
      text("Sound\n Effects", x + 30, y + height / 4 * 3);
    }
    else {
      text("Background\n Music", x + 30, y + height / 4);
      text("Sound\n Effects", x + 30, y + height / 4 * 3);

    }
    this.slider_bgMusic.size(100);
    this.slider_bgMusic.position(x + width / 3, y + height / 4);
    this.slider_soundEffect.size(100);
    this.slider_soundEffect.position(x + width / 3 , y + height / 4 * 3);
    this.slider_bgMusic.show();
    this.slider_soundEffect.show();
    //if want to change the style of sliders need to change the css file
  }

  showSettingKeyboard(x, y , width, height) {
    let actions = ["SHORT\nBALL", "MOVE\nLEFT", "MOVE\nRIGHT", "BOUNCE"];
    let action_cons = ["shortBall", "moveLeft", "moveRight", "bounce"];
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    for (let i = 0; i < actions.length; i++) {
      let actionX = x + 30;
      let btnX = x + width / 3;
      let actionY = y + height / actions.length * i + 20;
      let btn = this.keyboard_btns[action_cons[i]];
      btn.position(btnX, actionY);
      btn.show();
      text(actions[i], actionX, actionY);
    }
  }

  showSettingModes(x, y , width, height) {
    let contentX = x + width / 5;
    let contentY = y + height / 3;
    fill(255);
    textSize(30);
    noStroke();
    text("Difficulty: ", contentX, contentY);
    if (this.isHardMode) {
      fill(255, 0, 0); // Red for selected
      text("HARD", contentX + width / 3, contentY + 50);
      fill(255);
      text("EASY", contentX, contentY + 50);
    } else {
      fill(0, 255, 0);
      text("EASY", contentX, contentY + 50);
      fill(255);
      text("HARD", contentX + width / 3, contentY + 50);
    }
  }

  showInfoPopup() {
    let dialogBox = {
      x: windowWidth / 3,
      y: windowHeight / 3,
      width: windowWidth / 2,
      height: windowHeight / 2,
    };
    let leftBar = {
      width : dialogBox.width / 4,
      height : dialogBox.height,
      x : dialogBox.x + 100,
      y : dialogBox.y,
      options : ["Team\n Members", "Game\n Intro"],
    };
    let rightContent = {
      width : dialogBox.width / 12 * 7, // 1/6 for the line 
      height : dialogBox.height,
      x : dialogBox.x + dialogBox.width * 5 / 12,
      y : dialogBox.y + 30,
    };
    fill(0, 0, 0, 200);
    rect(dialogBox.x, dialogBox.y, 600, dialogBox.height, 20);
    fill(255);
    stroke('white');
    strokeWeight(5);
    line(dialogBox.x + dialogBox.width / 3, dialogBox.y + 30, dialogBox.x + dialogBox.width / 3, dialogBox.y + dialogBox.height- 30);
    //leftbar-menu outline
    textAlign(CENTER, CENTER);
    noStroke();
    for(let i = 0; i < leftBar.options.length; i++) {
      const optionsY = leftBar.y + i * leftBar.height / leftBar.options.length + 20;
      if(this.infoOption === i) {
        textStyle(NORMAL);
        stroke("pink");
        textSize(35);
        text(leftBar.options[i], leftBar.x + 10, optionsY + 60);
      }
      else {
        textStyle(NORMAL);
        noStroke();
        textSize(30);
        text(leftBar.options[i], leftBar.x, optionsY + 70);
      }
    }
    if (this.infoOption === 0) {
      this.showInfoTeamImg(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
    } 
    else {
      this.showInfoIntro(rightContent.x, rightContent.y, rightContent.width, rightContent.height);
    }

  }

  showInfoTeamImg(x, y, width, height) {
    image(this.teamImg, x + 10, y + 10, width - 20, height - 20);
  }

  showInfoIntro(x, y, width, height) {
    let introText = `Greetings young explorer!\n\nWelcome to Zodiac Land, where according to legend, the twelve fabled creatures of the Chinese zodiac calendar reside. Many have come to these sacred lands in search of these mythological beings, but few have succeeded, and fewer have been able to complete the ultimate quest of taming them all.\n\nI must warn you that the path you are about to take is treacherous. Each animal is able to harness immense power, and will do anything to deter your efforts. While some effects do you harm, others may be used to your benefit, and use them wisely. After all, time is of the essence! Please also beware of the all-mighty black holes, where one wrong slip could prove disastrous for your efforts.\n\nChoose the beast with the greatest affinity (in accordance with your birth year), or start wherever your wish - the choice is up to you.\n\nBest of luck, young one.`;
    
    fill(255);
    textAlign(LEFT, TOP);
    strokeWeight(0.5);
    textSize(18);
    //text(introText, x, y + 10, width / 5 * 3, height / 5 * 4);
    text(introText, x, y - this.scrollY + 10, width / 5 * 3, height / 5 * 4);
    // auto scroll will be fixed later
    this.scrollY += this.scrollSpeed;
    this.scrollY = constrain(scrollY, 0, height / 5 * 4);

  }

  
}
  
