function setup() {
  createCanvas(600, 600);
  background(0);
  //
  fill("white");
  text('Left mouse button to draw; Right mouse button to erase', 50, 50);
  textSize(20);
  text('WARNING: DO NOT PLAY IF YOU HAVE EPILEPSY', 50, 70);
}

function draw() {
  if(mouseButton === LEFT){
    drawMarker();
  }
  if(mouseButton === RIGHT){
  //  let randomColor = random(255);
 //   background(randomColor);
    drawEraser();
  }
  //ellipse(mouseX, mouseY, 10, 10);
  //rect(0, 0, 30, 50);
}
function drawMarker(){
  if (mouseIsPressed){
    //fill(255,200);
    stroke(random(255),random(255),random(255));
    line(pmouseX, pmouseY, mouseX, mouseY);
    //ellipse(mouseX, mouseY, 10, 10);
    let speed = abs(mouseX - pmouseX);
    strokeWeight( speed + 2);
  }
}
function drawEraser(){
  let bgColor = color(random(360), random(100), random(100));
  background(bgColor);
  fill("white");
  text('Left mouse button to draw; Right mouse button to erase', 50, 50);
  textSize(20);
  text('WARNING: DO NOT PLAY IF YOU HAVE EPILEPSY', 50, 70);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  //noStroke();
  fill(bgColor);
}