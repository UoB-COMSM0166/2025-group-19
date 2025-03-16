class WelcomeView {
  constructor(controller) {
    textFont(boutiqueBitmaFont);
    this.controller = controller;
    this.selectedIndex = 0;
    this.updateScale();
    this.roadAnimation = new RoadAnimation();
    this.animalAnimation = new AnimalAnimation();
    this.cloudAnimation1 = new CloudAnimation(1, 30);
    this.dialogOn = false;
    this.settingDialog = new SettingDialog(this);
    this.isInRightContent = false;
    this.dialogOption = 0;
    
  }

  update() {
    this.roadAnimation.update();
    this.animalAnimation.update();
    this.cloudAnimation1.update();
  }
  
  display() {
    background('#6EB6FF'); // blue
    this.roadAnimation.display();
    this.animalAnimation.display();
    this.cloudAnimation1.display();
    document.body.style.cursor = "none";
    this.displayText();
    this.settingDialog.display();  // must after displayText
  }

  resizeWindow(){
    this.updateScale();
    this.roadAnimation.resizeWindow();
    this.animalAnimation.resizeWindow();
    this.displayText();
    this.settingDialog.resizeWindow(); // must after displayText
  }

  displayText(){
    this.displayTitle();
    this.displayInstruction();
    this.displayVersion();
    this.displayOption();
  }

  displayTitle(){
    this.titleX = windowWidth / 2;
    this.titleY = windowHeight / 4;
    this.titleHeight = 0;
    fill('#f7e428'); // yellow
    stroke('#f7e428');
    strokeWeight(6 * this.scaleFactor); 
    textSize(100 * this.scaleFactor); 
    textAlign(CENTER, CENTER);
    text("ZODIAC CATCH", this.titleX, this.titleY);
  }

  displayInstruction(){
    fill(255);
    noStroke();
    textSize(20 * this.scaleFactor);
    textAlign(CENTER, TOP);
    text("Use the arrow keys and Enter to control the game", this.titleX,  this.titleY + 90 * this.scaleFactor);
  }

  displayVersion(){
    fill(255);
    noStroke();
    textSize(16 * this.scaleFactor);
    textAlign(CENTER, TOP);
    text("Version 1.0", this.titleX,  this.titleY + 124 * this.scaleFactor);
  }

  displayOption(){
    this.options = ["START", "YOUR ZODIAC", "SETTING", "INFORMATION"];
    textSize(28 * this.scaleFactor);
    for (let i = 0; i < this.options.length; i++) {
      if (i === this.selectedIndex) {
        fill('#DD4C03'); //red
        noStroke();
      } else {
        fill(255);
        noStroke();
      }
      textAlign(CENTER, TOP);
      text(this.options[i], this.titleX, (this.titleY + 160 * this.scaleFactor) + i * 50 * this.scaleFactor);
    }
  }

  handleKeyPress(key) {
    if (this.dialogOn) {
      if (this.dialogOption === 0){
        this.settingDialog.handleSettingKeyPress(key);
      }
      else if (this.dialogOption === 1){
        this.settingDialog.handleInfoKeyPress(key);
      }
    }
    else if (!this.dialogOn){
      if (key === 'ArrowUp') {
        this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
      } else if (key === 'ArrowDown') {
        this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
      } else if (key === 'Enter') {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption === "START") {
          this.controller.switchToNewStageMap();
        } else if (selectedOption === "YOUR ZODIAC") {
          this.controller.switchToStageMap();
        } else if (selectedOption === "SETTING") {
          this.dialogOption = 0;
          this.settingDialog.openDialog(this.dialogOption);
          this.dialogOn = true;
        } else if (selectedOption === "INFORMATION") {
          this.dialogOption = 1;
          this.settingDialog.openDialog(this.dialogOption);
          this.dialogOn = true;
        }
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
  