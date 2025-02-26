class WelcomeView {
  constructor(controller) {
    this.controller = controller;
    this.selectedIndex = 0;
    this.roadAnimation = new RoadAnimation();
    this.animalAnimation = new AnimalAnimation(this.roadAnimation.imgHeight);
    this.cloudAnimation1 = new CloudAnimation(1, 30);
    this.createText(); 
    //this.cloudAnimation2 = new CloudAnimation(2, 110, 130, 0.5);
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
        alert("under construction ...");
      } else if (selectedOption === "INFORMATION") {
        alert("under construction ...");
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
  