class RoadAnimation {
    constructor() {
      this.imgSrc = "assets/images/welcome-page/road.png"; 
      this.imgElements = [];
      this.numImages = Math.ceil(windowWidth / 100) + 1; 
      this.roadContainer = createDiv();
      this.roadContainer.class('road-container'); 
  
      for (let i = 0; i < this.numImages; i++) {
        let imgElement = createImg(this.imgSrc);
        imgElement.class('road-image'); 
        this.roadContainer.child(imgElement); 
        this.imgElements.push(imgElement);
      }
    }
  
    resize() {
      this.numImages = Math.ceil(windowWidth / 100) + 1; 
  
      for (let i = 0; i < this.imgElements.length; i++) {
        this.imgElements[i].remove();
      }
      this.imgElements = [];
  
      for (let i = 0; i < this.numImages; i++) {
        let imgElement = createImg(this.imgSrc);
        imgElement.class('road-image'); 
        this.roadContainer.child(imgElement);
        this.imgElements.push(imgElement);
      }
    }
  
    remove() {
      for (let i = 0; i < this.imgElements.length; i++) {
        this.imgElements[i].remove();
      }
      this.imgElements = [];
      this.roadContainer.remove();
    }
  }
  
  
  