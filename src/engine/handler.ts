
class Handler {

    private gameObjects: GameObject[] = [];
    private nextId: number;

    constructor() {
        this.nextId = -1;
    }

    public update = (delta: number): void => {
        for(let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update(delta);
        }
    }

    public draw = (render: Render): void => {
        for(let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw(render);
        }
    }

    public addObject = (gameObject: GameObject): number => {
        this.nextId++;
        gameObject.handlerId = this.nextId;
        gameObject.handler = this;
        this.gameObjects.push(gameObject);
        return this.nextId;
    }

    public removeObject = (id: number): void => {
        delete this.gameObjects[id];
    }

}