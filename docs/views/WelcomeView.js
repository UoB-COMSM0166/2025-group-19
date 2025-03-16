class WelcomeView {
  constructor(controller) {
    this.controller = controller;
    this.textSettings();
    this.selectedIndex = 0;
    this.roadAnimation = new RoadAnimation();
    this.animalAnimation = new AnimalAnimation(this.roadAnimation.imgHeight);
    this.cloudAnimation1 = new CloudAnimation(1, 30);
    //this.cloudAnimation2 = new CloudAnimation(2, 110, 130, 0.5);
  }

  update() {
    this.roadAnimation.update();
    this.animalAnimation.update();
    this.cloudAnimation1.update();
    //this.cloudAnimation2.update();
  }
  
  display() {
    createCanvas(windowWidth, windowHeight); // full size screen
    background('#6EB6FF'); // blue
    this.roadAnimation.display();
    this.animalAnimation.display();
    this.cloudAnimation1.display();
    //this.cloudAnimation2.display();
    //this.displayTitleImg();
    this.displayTitle();
    //this.displaySubtitle();
    this.displayVersionDescription();
    this.displayOption();   
  }
  
  handleKeyPress(key) {
    if (key === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
    } else if (key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
    } else if (key === 'Enter') {
      const selectedOption = this.options[this.selectedIndex];
      if (selectedOption === "START") {
        this.controller.switchToStageMap();
      } else if (selectedOption === "SETTING") {
        alert("under construction ...");
      } else if (selectedOption === "INFORMATION") {
        alert("under construction ...");
      }
    }
  }

  textSettings(){
    this.title = "ZODIAC CATCH";
    this.subtitle = "(HALF)";
    this.versionDescription = "Version 0.5";
    this.options = ["START", "SETTING", "INFORMATION"];
    this.titleX = windowWidth / 2;
    this.titleY = windowHeight / 4;
    this.titleHeight = 0;
    this.versionDescriptionY = 0;
    this.versionDescriptionHeight = 0;
    this.optionY = 0;
  }

  displayTitle(){
    fill('#f7e428'); // yellow
    //stroke('#e79724'); // orange stroke
    stroke('#f7e428');
    strokeWeight(6); 
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.title, this.titleX, this.titleY);
    this.titleHeight =  textAscent();
    this.versionDescriptionY = this.titleY + this.titleHeight;
  }

  displaySubtitle(){
    fill(255);
    noStroke();
    textSize(40);
    textAlign(LEFT, BOTTOM);
    text(this.subtitle, this.titleX + textWidth(this.title), this.titleY - textAscent());
  }

  displayVersionDescription(){
    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER, TOP);
    this.versionDescriptionHeight =  textAscent();
    this.optionY = this.versionDescriptionY + this.versionDescriptionHeight;
    text(this.versionDescription, this.titleX,  this.versionDescriptionY);
  }

  displayOption(){
    textSize(32);
    for (let i = 0; i < this.options.length; i++) {
      if (i === this.selectedIndex) {
        fill('#DD4C03'); //red
        noStroke();
      } else {
        fill(255);
        noStroke();
      }
      textAlign(CENTER, TOP);
      text(this.options[i], width / 2, (this.optionY + 30) + i * 60);
    }
  }

<<<<<<< feature/docs
  // will delete this function
  displayTitleImg(){
    // use the tiltle image
    this.titleImg = zodiacCatchImg;
    image(this.titleImg, width / 2 - this.titleImg.width / 2, windowHeight / 4 - this.titleImg.height / 2, this.titleImg.width, this.titleImg.height);
=======
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
          this.controller.switchToStageMap();
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
>>>>>>> local
  }
}
  