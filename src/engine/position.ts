
class Position {
    
    public x: number;
    public y: number;

    public velocity: Velocity;
    public hasVelocity: boolean;

    constructor(x: number = 0, y: number = 0, velocity: Velocity = new Velocity(0, 0)) {
        this.x = x;
        this.y = y;

        this.velocity = velocity;
        this.hasVelocity = false;
    }

    public addVelocity = (velocity: Velocity): void => {
        this.velocity = velocity;
        this.hasVelocity = true;
    }

    public removeVelocity = (): void => {
        this.velocity = new Velocity(0, 0);
        this.hasVelocity = false;
    }

    public update = (delta: number, velocity: Velocity = this.velocity): void => {
        this.x += velocity.velX * ( delta / 1000 );
        this.y += velocity.velY * ( delta / 1000 );
    }

}