class Position {
    constructor(x = 0, y = 0, velocity = new Velocity(0, 0)) {
        this.addVelocity = (velocity) => {
            this.velocity = velocity;
            this.hasVelocity = true;
        };
        this.removeVelocity = () => {
            this.velocity = new Velocity(0, 0);
            this.hasVelocity = false;
        };
        this.update = (delta, velocity = this.velocity) => {
            this.x += velocity.velX * (delta / 1000);
            this.y += velocity.velY * (delta / 1000);
        };
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.hasVelocity = false;
    }
}
//# sourceMappingURL=position.js.map