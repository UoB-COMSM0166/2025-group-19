class AnimalAnimation {
  /**
   * @param {*} 
   */
  constructor() {
    this.positionSetting();
    this.animalSetting();
    this.animation();
  }

  update() {
    for (let animal of this.animals) {
      animal.y = animal.baseY + sin(frameCount * animal.speed + animal.timeOffset) * animal.amplitude;
    }
  }

  display() {   
    for (let animal of this.animals) {
      image(animal.img, animal.x, animal.y, animal.width, animal.height);
    }
  }

  resizeWindow() {
    this.removeAllAnimals();
    this.positionSetting();
    this.animalSetting();
    this.animation();
  }

  animalSetting(){
    this.animals = [
      { img: mouseImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: cowImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: tigerImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: rabbitImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: dragonImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: snakeImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: horseImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: goatImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: monkeyImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: roosterImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: dogImg, y: this.baseY, amplitude: 5, speed: 0.09 },
      { img: pigImg, y: this.baseY, amplitude: 5, speed: 0.09 }
    ];
  }

  positionSetting(){
    this.initialY = windowHeight* 0.1;
    this.targetHeight = windowHeight * 0.10; // set a uniform height for all animals.
    this.baseY = windowHeight - this.initialY - this.targetHeight; // Use the provided initialY to adjust baseY
    this.baseX = windowWidth / 2;
  }

  animation(){
    // calculate width and height, and store the base Y value
    for (let animal of this.animals) {
      animal.height = this.targetHeight; 
      // calculate the width based on the original ratio
      animal.width = (animal.img.width / animal.img.height) * animal.height; 
      animal.baseY = animal.y;
      animal.timeOffset = random(0, TWO_PI); // make each animal's animation out of sync
    }

    // arrange the animals evenly
    const startX = windowWidth * 0.2; 
    const endX = windowWidth * 0.8;
    const totalWidth = endX - startX; // total width is 60%
    const totalSpacing = totalWidth / (this.animals.length - 1);

    let xPos = startX;
    for (let animal of this.animals) {
      animal.x = xPos;
      xPos += totalSpacing;
    }
  }

  removeAllAnimals() {
    this.animals = []; 
  }
}
