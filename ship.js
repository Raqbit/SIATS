let lasers = [];

function Ship() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 25;
    this.vel = createVector(0, 0);
    this.heading = 0;

    this.update = function () {
        if (keyIsDown(87)) {
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }

    this.boost = function () {
        const force = p5.Vector.fromAngle(this.heading).mult(0.2);
        this.vel.add(force);
    }

    this.shoot = function () {
        lasers.push(new Laser(createVector(ship.pos.x, ship.pos.y), ship.heading))
    }

    this.render = function () {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI * 0.5);
        fill(0);
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
        pop();
    }

    this.pointAtMouse = function () {
        this.heading = Math.atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    }

    this.edges = function () {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
}