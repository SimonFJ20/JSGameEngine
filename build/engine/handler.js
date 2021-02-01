class Handler {
    constructor() {
        this.gameObjects = [];
        this.update = (delta) => {
            for (let i = 0; i < this.gameObjects.length; i++) {
                this.gameObjects[i].update(delta);
            }
        };
        this.draw = (render) => {
            for (let i = 0; i < this.gameObjects.length; i++) {
                this.gameObjects[i].draw(render);
            }
        };
        this.addObject = (gameObject) => {
            this.nextId++;
            gameObject.handlerId = this.nextId;
            gameObject.handler = this;
            this.gameObjects.push(gameObject);
            return this.nextId;
        };
        this.removeObject = (id) => {
            delete this.gameObjects[id];
        };
        this.nextId = -1;
    }
}
//# sourceMappingURL=handler.js.map