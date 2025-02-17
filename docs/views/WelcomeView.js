class WelcomeView {
    constructor(controller) {
      this.controller = controller;
      this.title = "Zodiac Catch (Half)";
      this.options = ["Start", "Setting", "Information"];
      this.selectedIndex = 0;
      this.roadAnimation = new ScrollingBackground(roadImg);
    }
  
    update() {
      this.roadAnimation.update();
    }
  
    display() {
      createCanvas(windowWidth, windowHeight); // full size screen
      background('#6EB6FF');
      this.roadAnimation.display();
      this.roadAnimation.update();
      fill(255);
      textSize(40);
      textAlign(CENTER, CENTER);
      text(this.title, width / 2, height / 4);
  
      textSize(32);
      for (let i = 0; i < this.options.length; i++) {
        if (i === this.selectedIndex) {
          fill(0, 255, 0);
        } else {
          fill(255);
        }
        text(this.options[i], width / 2, height / 2 + i * 60);
      }
    }
  
    handleKeyPress(key) {
      if (key === 'ArrowUp') {
        this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
      } else if (key === 'ArrowDown') {
        this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
      } else if (key === 'Enter') {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption === "Start") {
          this.controller.switchToChooseStage();
        } else if (selectedOption === "Setting") {
          alert("under construction ...");
        } else if (selectedOption === "Information") {
          alert("under construction ...");
        }
      }
    }
  }
  