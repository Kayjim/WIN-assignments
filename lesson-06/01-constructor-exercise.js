function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.velocity = {x: 0, y: 0};
}

/*
class Particle {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y: 0};
    }
}
*/

var particles = [];
for(var i = 0; i < 100; i++) {
    particles.push(new Particle(i, Math.random() * 500));
}