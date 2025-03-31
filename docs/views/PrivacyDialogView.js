class PrivacyDialogView {
    /**
     * @param {*} 
     */
    constructor(StageMapView, controller) {
        this.StageMapView = StageMapView;
        this.updateScale();
        this.dialogOn = true;
        this.displayOption = 0;
        this.selectedIndex = 0;
        this.controller = controller;
    }

    display(){
        if(this.dialogOn){
            this.displayDialog();
        }
    }

    openDialog(num){
        this.dialogOn = true;
    }

    closeDialog(){
        this.dialogOn = false;
    }
    
    resizeWindow() {
        this.updateScale();
        if(this.dialogOn){
            this.displayDialog();
        }
    }

    updateScale() {
        let availableHeight = windowHeight * 0.9; //  5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
    }

    displayDialog() {
        this.dialogWidth = 800 * this.scaleFactor;
        this.dialogHeight = 500 * this.scaleFactor;
        this.dialogX = this.canvasX + (this.scaledWidth - this.dialogWidth) / 2;
        this.dialogY = this.canvasY + (this.scaledHeight - this.dialogHeight) / 2;
        // fill(0, 0, 0, 200);
        fill(255, 255, 255 );
        rect(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight, 20 * this.scaleFactor); 
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(40 * this.scaleFactor);
        text('Privacy Policy', this.dialogX + this.dialogWidth / 2, this.dialogY +50  * this.scaleFactor);  
        textSize(25 * this.scaleFactor);
        text('We will need you to provide your date of birth next.'
            , this.dialogX + this.dialogWidth / 2, this.dialogY +160  * this.scaleFactor);     
        text('Since this involves personal data, if you do not agree,'
            , this.dialogX + this.dialogWidth / 2, this.dialogY +200  * this.scaleFactor);   
        text('please use the arrow keys to select "Back"'
            , this.dialogX + this.dialogWidth / 2, this.dialogY +240  * this.scaleFactor);   
        text('and return to the menu.'
            , this.dialogX + this.dialogWidth / 2, this.dialogY +280  * this.scaleFactor);      
        
        this.options = ["Accept", "Back"];
        textSize(30);
        for (let i = 0; i < this.options.length; i++) {
            if (i === this.selectedIndex) {
              fill('#DD4C03'); //red
              noStroke();
            } else {
              fill(0);
              noStroke();
            }
            text(this.options[i],  this.dialogX + this.dialogWidth / 2, (this.dialogY + 360 * this.scaleFactor) + i * 40 * this.scaleFactor);
        }
    }

    handleKeyPress(key) {
        if (this.dialogOn) {
            if (key === 'ArrowUp') {
                this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
              } else if (key === 'ArrowDown') {
                this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
              } else if (key === 'Enter') {
                const selectedOption = this.options[this.selectedIndex];
                if (selectedOption === "Accept") {
                  this.dialogOn = false;
                } else if (selectedOption === "Back") {
                  this.controller.switchToWelcome();
                }
              }
        }
    }
}
  