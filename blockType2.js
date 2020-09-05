class Block2 {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0,
            'friction': 1.2,
            'density': 2.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;

        World.add(world, this.body);
    }
    score() {
        if (this.Visiblity >= 0 && this.Visiblity <= 100) {
            score = score + 10;
        }
    }
    display() {
        if (this.body.speed < 3) {

            var pos = this.body.position;

            rectMode(CENTER);
            stroke(0);
            strokeWeight(1);
            fill("blue");
            rect(pos.x, pos.y, this.width, this.height);

        } else {
            push();
            World.remove(world, this.body);
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            pop();
        }
    }
};