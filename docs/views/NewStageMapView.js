class NewStageMapView {
    constructor(pageController) {
        this.pageController = pageController;
        this.positionSetting();
        this.updateScale();
        this.roadAnimation = new RoadAnimation(0.3, 20, false);
        this.cloudAnimation1 = new CloudAnimation(1, 30);
        this.animalSetting();
        this.renderAnimal();
        this.zodiacSigns = [
            "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
            "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
        ];
        this.selectedAnimalIndex = 0; // rat first
    }

    update() {
        this.roadAnimation.update();
        this.cloudAnimation1.update();
        this.displayText();
        for (let animal of this.animals) {
            animal.y = animal.baseY;
        }
    }
    
    display() {
        background('#6EB6FF'); // blue
        this.roadAnimation.display();
        this.cloudAnimation1.display();
        this.displayText();
        for (let animal of this.animals) {
            if (animal.img) {
                image(animal.img, animal.x, animal.y, animal.width, animal.height);
            }
        }
        this.renderPointer();
    }

    resizeWindow(){
        this.updateScale();
        this.removeAllAnimals();
        this.roadAnimation.resizeWindow();
        this.positionSetting();
        this.animalSetting();
        this.renderAnimal();
        this.renderPointer();
    }

    updateScale() {
        let availableHeight = windowHeight * 0.9; //  5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600); 
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2; // center
    }

    displayText(){
        this.displayTitle();
        this.displayInstruction();
    }

    displayTitle(){
        this.titleX = (windowWidth / 2) ;
        this.titleY = windowHeight / 4;
        this.titleHeight = 0;
        fill('#f7e428'); // yellow
        stroke('#f7e428');
        strokeWeight(6 * this.scaleFactor); 
        textSize(80 * this.scaleFactor); 
        textAlign(CENTER, CENTER);
        text("SELECT YOUR STAGE", this.titleX, this.titleY);
    }

    displayInstruction(){
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Use the left and right arrow keys to select a stage,", this.titleX,  this.titleY + 90 * this.scaleFactor);
        text("then press Enter to enter the chosen stage.", this.titleX,  this.titleY + 130 * this.scaleFactor);
    }

    positionSetting(){
        this.initialY = windowHeight* 0.1;
        this.targetHeight = windowHeight * 0.10; // set a uniform height for all animals.
        this.baseY = windowHeight - this.initialY - this.targetHeight; // Use the provided initialY to adjust baseY
        this.baseX = windowWidth / 2;
    }

    animalSetting(){
        this.animals = [
            { img: mouseImg, y: this.baseY + (7 * this.scaleFactor)},
            { img: cowImg, y: this.baseY + (4 * this.scaleFactor) },
            { img: tigerImg, y: this.baseY + (0 * this.scaleFactor) },
            { img: rabbitImg, y: this.baseY + (7 * this.scaleFactor) },
            { img: dragonImg, y: this.baseY + (7 * this.scaleFactor) },
            { img: snakeImg, y: this.baseY + (8 * this.scaleFactor) },
            { img: horseImg, y: this.baseY + (6 * this.scaleFactor) },
            { img: goatImg, y: this.baseY + (5 * this.scaleFactor) },
            { img: monkeyImg, y: this.baseY + (6 * this.scaleFactor) },
            { img: roosterImg, y: this.baseY + (8 * this.scaleFactor) },
            { img: dogImg, y: this.baseY + (7 * this.scaleFactor) },
            { img: pigImg, y: this.baseY + (6 * this.scaleFactor) }
        ];   
    }

    renderAnimal(){
        for (let animal of this.animals) {
            animal.height = this.targetHeight; 
            animal.width = (animal.img.width / animal.img.height) * animal.height; 
            animal.baseY = animal.y;
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


    renderPointer(){
        let selectedAnimal = this.animals[this.selectedAnimalIndex];
        if (!selectedAnimal) return;

        // Centered：rat(1), rabbit(4), snake(6), monkey(9), pig(12)
        // Slightly to the right：ox(2), tiger(3), dragon(5), horse(7), goat(8), rooster(10), dog(11)
        let pointerX;
        if(selectedAnimal == 1 || selectedAnimal == 4 || selectedAnimal == 6 || selectedAnimal == 9 || selectedAnimal == 12 ){
            pointerX = (selectedAnimal.x )+ selectedAnimal.width / 2; 
        }else{
            pointerX = (selectedAnimal.x - (6 *  this.scaleFactor))+ selectedAnimal.width / 2; 
        }
       
        let pointerY = selectedAnimal.y - (20 * this.scaleFactor ); 
        let pointerSize = 8 * this.scaleFactor; 

        fill(255);
        noStroke();
        triangle(pointerX, pointerY, 
            pointerX - pointerSize, pointerY - (pointerSize * 1.5), 
            pointerX + pointerSize, pointerY - (pointerSize * 1.5));
    }

    removeAllAnimals() {
        this.animals = []; 
    }

    handleKeyPress(key) {
        if (key === 'ArrowLeft') {
            this.selectedAnimalIndex = max(0, this.selectedAnimalIndex - 1); 
        } else if (key === 'ArrowRight') {
            this.selectedAnimalIndex = min(this.animals.length - 1, this.selectedAnimalIndex + 1); 
        }

        if (key === 'Enter') {
            const selectedStage = this.zodiacSigns[this.selectedAnimalIndex];
            this.pageController.setStageName(selectedStage);
            this.pageController.switchToMode();
        }
    }


}