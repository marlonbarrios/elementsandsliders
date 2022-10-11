

 let presets =
  {
    minimumRadious: 50,
    maximumRadious: 320,
    rotationSpeed: 0.09,
    lineWeight: 20,
    numberOfParts: 7,
    numberOfElements: 8,
    numberOfFragments: 19,
    colorObject: [255, 255, 255],
    colorObjectBG:[143, 119, 119], 

  
  }



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  let gui = new dat.GUI();

  gui.add(presets, 'numberOfElements', 1, 10, 1);  //p1
  gui.add(presets, 'numberOfParts', 1, 12);  //p2
  gui.add(presets, 'numberOfFragments', 1,30) //p3
  gui.add(presets, 'minimumRadious', 0, 240);  //p4
  gui.add(presets, 'maximumRadious', 5, height * 0.60);  //p5
  gui.add(presets, 'rotationSpeed', -0.1, 0.1, 0.001);  //p6
  gui.add(presets, 'lineWeight', 1, 30);  //p7

  // gui.addColor(presets, 'colorObject', 'color');
  gui.addColor(presets, 'colorObjectBG', 'color');

  gui.close();
  

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  background(presets.colorObjectBG, 5);
  
  translate(width/2, height/2);

  noFill();

  strokeWeight(presets.lineWeight);
  for(var n = 0; n < presets.numberOfElements; n++) {
    // stroke(presets.color);
  
  beginShape();

  for (var i = 0; i < 360; i += presets.numberOfFragments) {
    let r = map(sin(i + frameCount ), -1, 1, 15, 255);
    let g = map(cos(i + frameCount ), -1, 1, 15, 255)
    let b = map(cos(i + frameCount ), -1, 1, 20, 255)
    
 let color = [r,g,b]
    stroke(color);
    circle(x, y, 10);
    var rad = map(sin(i * presets.numberOfParts + frameCount), -1, 1, presets.minimumRadious, presets.maximumRadious);
    var x = rad * cos(i);
    var y = rad * sin(i);
    noStroke();
    vertex(x, y);
    
   
  
   
  }
  endShape(CLOSE);
  
  rotate(frameCount* presets.rotationSpeed);
}
}
