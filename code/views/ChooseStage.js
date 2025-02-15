class ChooseStage {
  constructor() {
    this.title = "Choose Your Stage";
    this.options = ["Stage01", "Stage02"];
    this.selectedIndex = 0;
  }

  update() {}

  display() {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(this.title, width / 2, height / 3);

    for (let i = 0; i < this.options.length; i++) {
      if (i === this.selectedIndex) {
        fill(0, 255, 0);
      } else {
        fill(255);
      }
      text(this.options[i], width / 2, height / 2 + i * 50);
    }
  }

  handleKeyPress(key) {
    if (key === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
    } else if (key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
    } else if (key === 'Enter') {
      if (this.options[this.selectedIndex] === "Stage01") {
        currentScene = new Stage01(skyBackground);
      } else if (this.options[this.selectedIndex] === "Stage02") {
        currentScene = new Stage02(skyBackground);
      }
    }
  }

  isCleared() {
    return false;
  }

  isGameOver() {
    return false;
  }
}