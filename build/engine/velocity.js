class Velocity {
    constructor(velX = 0, velY = 0) {
        this.stop = () => {
            this.velX = 0;
            this.velY = 0;
        };
        this.reverse = () => {
            this.velX = -(this.velX);
            this.velY = -(this.velY);
        };
        this.reverseX = () => {
            this.velX = -(this.velX);
        };
        this.reverseY = () => {
            this.velY = -(this.velY);
        };
        this.velX = velX;
        this.velY = velY;
    }
}
//# sourceMappingURL=velocity.js.map