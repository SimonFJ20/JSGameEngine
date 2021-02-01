
class Sprite {

    public image: HTMLImageElement;
    public position: Position;
    public dimensions: Dimensions;

    constructor(image: HTMLImageElement, position: Position, dimensions: Dimensions) {
        this.image = image;
        this.position = position;
        this.dimensions = dimensions;
    }

}