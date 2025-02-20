class CloudAnimation {
    constructor(cloudType = 1, positionY, spacing = 80, speed = 0.3, numImages = 20, ) {
      if(cloudType == 1){
        this.img = cloudImg1;
      }else if(cloudType == 2){
        this.img = cloudImg2;
      }
      
      this.positionY = positionY;
      this.speed = speed;
      this.numImages = numImages;
      this.spacing = spacing;
      this.x = [];
      this.imgWidth = 0;
      this.imgHeight = 0;
  
      // Calculate the size for the image
      this.imgHeight = windowHeight * 0.1; // if use height, its setting will come from main.js's createCanvas(1000, 600);. 
      this.imgWidth = (this.img.width / this.img.height) * this.imgHeight; // Maintain the original aspect ratio
  
      // Make the first image start from the far right of the canvas
      for (let i = 0; i < this.numImages; i++) {
        if (i === 0) {
          this.x[i] = width; 
        } else {
          this.x[i] = this.x[i - 1] + this.imgWidth + this.spacing;
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
          this.x[i] = this.x[(i + this.numImages - 1) % this.numImages] - (this.imgWidth + this.spacing);
        }
      }
    }
  
    display() {
      // Draw the background images
      for (let i = 0; i < this.numImages; i++) {
        image(this.img, this.x[i], this.positionY, this.imgWidth, this.imgHeight);
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
          this.x[i] = this.x[i - 1] + this.imgWidth + this.spacing; 
        }
      }
    }
  }
  