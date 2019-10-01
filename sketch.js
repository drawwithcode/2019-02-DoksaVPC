var palette = ["DarkCyan", "Tan", "IndianRed"];
//main size
var a = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(40);
  ellipseMode(CENTER);
  rectMode(CENTER);
  strokeCap(ROUND);
  //generate the grid
  for (var x = a; x < width; x += a * 2) {
    for (var y = a; y < height; y += a * 2) {
      //refresh button in the middle of the grid
      if (x >= width / 2 - a && x <= width / 2 + a && y >= height / 2 - a && y <= height / 2 + a) {
        push();
        fill(220);
        noStroke();
        translate(x, y);
        square(0, 0, 70, 20, 20, 20, 20);
        pop();
        push();
        noFill();
        stroke(60);
        strokeWeight(5);
        strokeCap(SQUARE);
        translate(x, y);
        arc(0, 0, 40, 40, 0, 340);
        pop();
        push();
        fill(60);
        noStroke();
        translate(x + 8, y - 20);
        triangle(0, 15, 15, 0, 15, 15)
        pop();
      } else {
        //two couples of variable shapes inside every unit of the grid
        var rot = 90 * (Math.round(random() * 4));
        for (var i = -a, r = 0; i <= a; i += a * 2, r += 180) {
          push();
          translate(x, y);
          rotate(rot);
          noFill();
          strokeWeight(15);
          stroke(color(palette[Math.round(random() * 2)]));
          arc(i, i, a * 2, a * 2, r, r + 90);
          pop();

          push();
          translate(x, y);
          rotate(rot);
          noStroke();
          fill(color(palette[Math.round(random() * 2)]));
          arc(i, i, a, a, r, r + 90);
          pop();
        }
      }
    }
  }
  noLoop();
}
//changing the cursor
function mouseMoved() {
  if (mouseX >= width / 2 - 80 && mouseX <= width / 2 + 40 && mouseY >= height / 2 - 80 && mouseY <= height / 2 + 40) {
    cursor('pointer');
  } else {
    cursor('default')
  }
}
//refreshing the pattern
function mousePressed() {
  if (mouseX >= width / 2 - 80 && mouseX <= width / 2 + 40 && mouseY >= height / 2 - 80 && mouseY <= height / 2 + 40) {
    loop();
  } else {
    noLoop();
  }
}
