class Player extends GameObject {
    constructor(position, id) {
        super(id);
        this.update = (delta) => {
            this.position.velocity.stop();
            if (KeyInput.pressed[38] && !KeyInput.pressed[40]) {
                this.position.velocity.velY = -1000;
            }
            else if (KeyInput.pressed[40] && !KeyInput.pressed[38]) {
                this.position.velocity.velY = 1000;
            }
            if (KeyInput.pressed[37] && !KeyInput.pressed[39]) {
                this.position.velocity.velX = -1000;
            }
            else if (KeyInput.pressed[39] && !KeyInput.pressed[37]) {
                this.position.velocity.velX = 1000;
            }
            this.position.update(delta);
        };
        this.draw = (render) => {
            render.background(new Color(80, 80, 80));
            render.image(this.image, new Rectangle(this.position, new Dimensions(64, 64)));
        };
        this.position = position;
        this.position.addVelocity(new Velocity());
        this.image = new Image();
        this.image.src = 'assets/testimage.png';
    }
}
//# sourceMappingURL=player.js.map