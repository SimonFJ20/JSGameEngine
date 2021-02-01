
class Velocity {

    public velX: number;
    public velY: number;

    constructor(velX: number = 0, velY: number = 0) {
        this.velX = velX;
        this.velY = velY;
    }

    public stop = (): void => {
        this.velX = 0;
        this.velY = 0;
    }

    public reverse = (): void => {
        this.velX = -(this.velX);
        this.velY = -(this.velY);
    }

    public reverseX = (): void => {
        this.velX = -(this.velX);
    }

    public reverseY = (): void => {
        this.velY = -(this.velY);
    }
    

}