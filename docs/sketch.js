// reminder:
// reset mouse mode by pressing key with no functionality


let value = 0;

function setup() {
  createCanvas(1000, 700);
  background(65,65,58);
  textSize(20);
  fill(255, 244, 254);
  text("Abstraction Simulator 101", 30, 30);
  text("Pressed `e` for an eraser", 30, 50);
  text("Pressed `s` for saving an image.", 30, 70);
  text("Pressed `c` for clear", 30, 90);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    // Create a p5.Color object.
    let c = color(255, 128, 128);
    noStroke();

    // if any key is pressed, turns into eraser
    if (value == 255) {
      let c = color(65,65,58);
      fill(c);
      ellipse(mouseX, mouseY, 60, 60);
    }
    
    // if you press 's' key and click mouse once, it will save an image (or 10) of your masterpieces
    else if (value == 250) {
      save('millionDollarArt.jpg');
    }
    
    // clears the whole canvas
    else if (value == 200) {
      setup();
    }
    
    // drawing tool that changes stroke weight based on mouse speed
    else {
      c.setAlpha(180);
      strokeWeight(1);
      fill(c);
      distanceMoved = abs(mouseX - pmouseX);
      ellipse(mouseX, mouseY, distanceMoved);
      //ellipse(mouseX, mouseY, 35, 60);
    }
  }
}


// detects whether a key is being pressed
function keyPressed() {
  if (key === 'e') {
    value = 255;
  } else if (key === 's') {
    value = 250;
  } else if (key === 'c') {
    value = 200;
  } else {
    value = 0;
  }
}