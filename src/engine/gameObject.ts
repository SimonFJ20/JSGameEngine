
abstract class GameObject {
    
    public handler: Handler;
    public id: ID;
    public handlerId: number;

    constructor(id: ID) {
        this.id = id;
    }

    abstract update(delta: number): void;
    abstract draw(render: Render): void;

}