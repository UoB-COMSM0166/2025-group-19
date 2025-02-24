class StageMapView {
  constructor(pageController) {
    this.pageController = pageController;
    this.title = "Enter Your Birthday !";
    this.yearInput = "";
    this.monthInput = "";
    this.dayInput = "";
    this.zodiacSigns = [
      "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
      "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];
    this.selectedIndex = 0;
    this.images = {};
    this.loadImages();
  }

  loadImages() {
    for (let i = 0; i < this.zodiacSigns.length; i++) {
      this.images[this.zodiacSigns[i]] = loadImage(`assets/images/characters/${this.zodiacSigns[i]}.png`);
    }
  }

  calculateZodiac(year) {
    if (!year || isNaN(year)) return;
    this.selectedIndex = (year - 4) % 12; // zodiac calculation rule
  }

  update() {}

  display() {
    background(0);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);

    // Topic
    text(this.title, width / 2, height / 6);

    // Birthday
    textSize(40);
    text(`Year: ${this.yearInput}  Month: ${this.monthInput}  Day: ${this.dayInput}`, width / 2, height / 4);
    text("Press Enter after typing your birth year", width / 2, height / 3);

    // Show Image
    image(this.images[this.zodiacSigns[this.selectedIndex]], width / 2 - 125, height / 2.6, 250, 250);

    // Selection Button
    fill(0, 255, 0);
    textSize(40);
    text("<", width / 4, height / 2);
    text(">", (3 * width) / 4, height / 2);

    // Show Zodiac Name
    fill(255);
    textSize(40);
    text(this.zodiacSigns[this.selectedIndex], width / 2, (height / 2) + 120);

    // Confirm Button
    fill(0, 200, 200);
    rect(width / 2 - 100, height * 0.75, 200, 50, 10);
    fill(255);
    textSize(30);
    text("Confirm", width / 2, height * 0.75 + 20);

    // Back Button
    fill(200, 0, 0);
    rect(width / 2 - 100, height * 0.85, 200, 50, 10);
    fill(255);
    textSize(30);
    text("Back", width / 2, height * 0.85 + 20);
  }

  handleKeyPress(key) {
    if (key >= '0' && key <= '9') {
      if (this.yearInput.length < 4) {
        this.yearInput += key;
      } else if (this.monthInput.length < 2) {
        this.monthInput += key;
      } else if (this.dayInput.length < 2) {
        this.dayInput += key;
      }
    } else if (key === 'Backspace') {
      if (this.dayInput.length > 0) {
        this.dayInput = this.dayInput.slice(0, -1);
      } else if (this.monthInput.length > 0) {
        this.monthInput = this.monthInput.slice(0, -1);
      } else if (this.yearInput.length > 0) {
        this.yearInput = this.yearInput.slice(0, -1);
      }
    } else if (key === 'Enter' && this.yearInput.length === 4) {
      this.calculateZodiac(parseInt(this.yearInput));
    } else if (key === 'ArrowLeft') {
      this.selectedIndex = (this.selectedIndex - 1 + this.zodiacSigns.length) % this.zodiacSigns.length;
    } else if (key === 'ArrowRight') {
      this.selectedIndex = (this.selectedIndex + 1) % this.zodiacSigns.length;
    }
  }

  handleMousePressed() {
    // Check if Confirm button is clicked
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
        mouseY > height * 0.75 && mouseY < height * 0.75 + 50) {
        const selectedStage = this.zodiacSigns[this.selectedIndex];
        console.log(selectedStage);
        this.pageController.switchToStage(selectedStage);
    }

    // Check if Back button is clicked
    console.log(mouseX, mouseY);
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
        mouseY > height * 0.85 && mouseY < height * 0.85 + 50) {
        this.pageController.switchToWelcome();
    }
  }
}
