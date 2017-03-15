let ship;

function setup() {
  const canvas = createCanvas(windowWidth - 20, windowHeight - 20);

  ship = new Ship();
}

function draw() {
  background(0);
  ship.pointAtMouse();
  ship.update();
  ship.edges();

  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].update();
    lasers[i].render();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    }
  }
  ship.render();


  text("Move mouse for direction, W for boost & Click to shoot. Thanks to Daniel Shiffman for idea :)", 10, height - 20, 1000, height)
  fill(255);
}

function mousePressed() {
  ship.shoot();
}

