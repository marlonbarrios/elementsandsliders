

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);


  s4 = createSlider(5, 240, 50, 1).position(520, 50);
  p4 = createP('Minimum Radius').position(520, 10);
  s5 = createSlider(5, 240, 200, 1).position(520, 100);
  p5 = createP('Maximum Radius').position(520, 60);
  s6 = createSlider(-1, 1, -0.1, 0.05).position(520, 150);
  p6 = createP('Rotation Speed').position(520, 110);
  s7 = createSlider(1, 12, 5, 1).position(520, 200);
  p7 = createP('Line Weight').position(520, 160);

  s2 = createSlider(0, 10, 5, 1).position(520, 250);
  p2 = createP('Number Of Parts').position(520, 210);
  s1 = createSlider(1, 10, 5, 1).position(520, 300);
  p1 = createP('Number Of Elements').position(520, 260);
  s3 = createSlider(3, 30, 3, 1).position(520, 350);
  p3 = createP('Number Of Fragments').position(520, 310);
  
 
}

function draw() {
  background(0, 80);
  
  translate(width/2, height/2);

  noFill();

  strokeWeight(s7.value());
  for(var n = 0; n < s1.value(); n++) {
    stroke(150 + n *20, 199 + n * 5, 50, 80);
  beginShape();

  for (var i = 0; i < 360; i += s3.value()) {
    var rad = map(sin(i * s2.value() + frameCount), -1, 1, s4.value(), s5.value());
    var x = rad * cos(i);
    var y = rad * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  rotate(frameCount* s6.value());
}
}
