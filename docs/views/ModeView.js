class ModeView {
    constructor(pageController) {
      this.pageController = pageController;
      this.modes = ["Easy", "Hard"];
      this.selectedIndex = 0;
    }

    update() {}
  
    display() {
      document.body.style.cursor = "none";
      background(0);
      textAlign(CENTER, CENTER);

      fill(255);
      textSize(60);
      text("Select Mode", width / 2, height / 4);

      textSize(40);
  
      for (let i = 0; i < this.modes.length; i++) {
        if (i === this.selectedIndex) {
          fill(255);
          textSize(50);
        } else {
          fill(150);
          textSize(40);
        }
        text(this.modes[i], width / 2, height / 2 + i * 60);
      }
    }
  
    handleKeyPress() {
      if (keyCode === UP_ARROW) {
        this.selectedIndex = (this.selectedIndex - 1 + this.modes.length) % this.modes.length;
      } else if (keyCode === DOWN_ARROW) {
        this.selectedIndex = (this.selectedIndex + 1) % this.modes.length;
      } else if (keyCode === ENTER) {
        this.selectMode();
      }
    }
  
    selectMode() {
      let mode = this.modes[this.selectedIndex].toLowerCase();
      this.pageController.setMode(mode)
      this.pageController.switchToStage();
    }
}
