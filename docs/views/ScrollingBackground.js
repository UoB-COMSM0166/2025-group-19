class ScrollingBackground {
  constructor(img, speed = 0.3, numImages = 20) {
    this.img = img;
    this.speed = speed;
    this.numImages = numImages;
    this.x = [];
    this.imgWidth = 0;
    this.imgHeight = 0;

    // Calculate the size for the image
    this.imgHeight = height * 0.1; 
    this.imgWidth = (this.img.width / this.img.height) * this.imgHeight; // Maintain the original aspect ratio
  
    // Make the first image start from the far right of the canvas
    for (let i = 0; i < this.numImages; i++) {
      if (i === 0) {
        this.x[i] = width; 
      } else {
        this.x[i] = this.x[i - 1] + this.imgWidth;
      }
    }
  }

  update() {
    // Move the images to the right
    for (let i = 0; i < this.numImages; i++) {
      this.x[i] += this.speed;
    }

    // seamless scrolling
    for (let i = 0; i < this.numImages; i++) {
      if (this.x[i] >= width) {
        // If the image has completely moved off the canvas, reset it to the left side
        this.x[i] = this.x[(i + this.numImages - 1) % this.numImages] - this.imgWidth;
      }
    }
  }

  display() {
    // Draw the background images
    for (let i = 0; i < this.numImages; i++) {
      image(this.img, this.x[i], height - this.imgHeight, this.imgWidth, this.imgHeight);
    }
  }

  resize() {
    this.imgHeight = height * 0.1;
    this.imgWidth = (this.img.width / this.img.height) * this.imgHeight;

    // Recalculate the x coordinates
    for (let i = 0; i < this.numImages; i++) {
      if (i === 0) {
        this.x[i] = width;
      } else {
        this.x[i] = this.x[i - 1] + this.imgWidth; 
      }
    }
  }
}
