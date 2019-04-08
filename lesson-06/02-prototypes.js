time = 0;
gravity = 0.5;

function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.velocity = {x: 0, y: 0};
}

Particle.prototype = {
    getVelocity() {
        return time * gravity;
    },
    move() {
        this.y += this.getVelocity();
        if(this.y < 500) {
            console.log('bottom');
        }
    }
}

/*
class Particle {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y: 0};
    }

    getVelocity() {
        return time * gravity;
    }

    move() {
        if(this.y < 500) {
            this.y += this.getVelocity();
        } else {
            console.log('bottom');
        }
    }
}
*/

var particles = [];
for(var i = 0; i < 100; i++) {
    particles.push(new Particle(i, Math.random() * 500));
}

var interval = setInterval(function() {
    time++;
    for(var p of particles) {
        console.log(p.x);
    }
    var falling = particles.filter(p => p.y < 500);
    falling.forEach(p => p.move());
    if(falling.length == 0) clearInterval(interval);
}, 100);