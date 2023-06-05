var y = 40;
var incremento = 4;

function setup() {
  createCanvas(300, 300);
  background(150);
}
function draw() {
  background(150);
  fill(200, 0, 0);
  noStroke(0);

  rect(40, y, 80, 40);
  y = y + incremento;

  rect(20, 180, 20, 80);

  rect(80, 100, 130, 10);
  rect(260, 240, 30, 30);

  //amarillo

  fill(252, 255, 0);
  rect(125, 150, 10, 100);
  rect(40, 213, 60, 30);
  rect(mouseX, 100, mouseX, 30);
  rect(y, 40, 10, 80);

  //azul
  fill(10, 10, 90);
  rect(50, 200, 30, 20);

  rect(y, y, 40, 20);
  y = y + incremento;

  rect(150, 270, 50, 10);
  rect(170, 170, 10, 70);

  if (y > 300 || y < -1) {
    incremento = incremento * -1;
  }
}
