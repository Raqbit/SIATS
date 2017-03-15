function Laser(pos, heading) {
    this.pos = pos;
    this.vel = p5.Vector.fromAngle(heading).mult(15);

    this.update = function () {
        this.pos.add(this.vel);
    }

    this.render = function () {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    this.offscreen = function () {
        if (this.pos.x > width || this.pos.x < 0) {
            return true;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            return true;
        }
        return false;
    }
}