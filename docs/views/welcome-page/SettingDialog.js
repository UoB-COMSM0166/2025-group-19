class SettingDialog {
    /**
     * @param {*} 
     */
    constructor() {
        this.updateScale();
        this.dialogOn = false;
    }

    display(){
        if(this.dialogOn){
            this.displayDialog();
        }
    }

    openDialog(){
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
        this.dialogText = 'setting';
        this.dialogWidth = 800 * this.scaleFactor;
        this.dialogHeight = 500 * this.scaleFactor;
        this.dialogX = this.canvasX + (this.scaledWidth - this.dialogWidth) / 2;
        this.dialogY = this.canvasY + (this.scaledHeight - this.dialogHeight) / 2;
        fill(0, 0, 0, 200);
        rect(this.dialogX, this.dialogY, this.dialogWidth, this.dialogHeight, 20 * this.scaleFactor); 
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(24 * this.scaleFactor);
        text(this.dialogText, this.dialogX + this.dialogWidth / 2, this.dialogY + this.dialogHeight / 4); 
        textSize(18 * this.scaleFactor);
        text('Press c to close the setting dialog', this.dialogX + this.dialogWidth / 2, this.dialogY + this.dialogHeight / 1.5); 
    }
   
}
  