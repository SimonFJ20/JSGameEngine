class Render {
    constructor(canvas, virtualDimensions = new Dimensions(2000, 1000)) {
        this.convertX = (x) => {
            return ((x / this.dimensions.width) * this.htmlDimensions.width);
        };
        this.convertY = (y) => {
            return ((y / this.dimensions.height) * this.htmlDimensions.height);
        };
        this.convertPosition = (position) => {
            return new Position(this.convertX(position.x), this.convertY(position.y));
        };
        this.convertDimensions = (dimensions) => {
            return new Dimensions(this.convertX(dimensions.width), this.convertY(dimensions.height));
        };
        this.convertRectangle = (rectangle) => {
            return new Rectangle(this.convertPosition(rectangle.position), this.convertDimensions(rectangle.dimensions));
        };
        this.loadSize = () => {
            this.htmlDimensions = this.canvas.dimensions;
            ;
        };
        this.setGraphicColor = (color) => {
            this.canvas.setFillStyle(color);
        };
        this.fill = (color, enable = true) => {
            this.fillEnable = enable;
            this.fillColor = color;
            this.setGraphicColor(color);
        };
        this.stroke = (color, enable = true) => {
            this.strokeEnable = enable;
            this.strokeColor = color;
            this.setGraphicColor(color);
        };
        this.noFill = () => {
            this.fillEnable = false;
        };
        this.noStroke = () => {
            this.strokeEnable = false;
        };
        this.rect = (rectangle, fillColor = this.fillColor, strokeColor = this.strokeColor, fillEnable = this.fillEnable, strokeEnable = this.strokeEnable, strokeWeight = this.strokeWeight) => {
            if (strokeEnable) {
                this.canvas.drawRect(this.convertRectangle(rectangle), strokeColor);
                if (fillEnable) {
                    this.canvas.drawRect(this.convertRectangle(new Rectangle(new Position(rectangle.position.x + strokeWeight, rectangle.position.y + strokeWeight), new Dimensions(rectangle.dimensions.width - strokeWeight * 2, rectangle.dimensions.height - strokeWeight * 2))), fillColor);
                }
            }
            else if (fillEnable) {
                this.canvas.drawRect(this.convertRectangle(rectangle), fillColor);
            }
        };
        this.background = (color = this.backgroundColor) => {
            this.canvas.drawRect(new Rectangle(new Position(0, 0), this.convertDimensions(this.dimensions)), color);
        };
        this.image = (image, rectangle) => {
            this.canvas.drawImage(image, this.convertRectangle(rectangle));
        };
        this.sprite = (sprite) => {
            this.canvas.drawImage2(sprite.image, sprite.position, sprite.dimensions);
        };
        this.draw = () => { };
        this.canvas = canvas;
        this.loadSize();
        this.dimensions = virtualDimensions;
        this.fillEnable = true;
        this.fillColor = new Color(60, 60, 60);
        this.strokeEnable = true;
        this.strokeColor = new Color(255, 255, 255);
        this.strokeWeight = 1;
        this.backgroundColor = new Color(200, 200, 200);
        this.screenBuffer = [];
        for (let x = 0; x < this.dimensions.width; x++) {
            this.screenBuffer[x] = [];
            for (let y = 0; y < this.dimensions.height; y++) {
                this.screenBuffer[x][y] = new Pixel(this.backgroundColor);
            }
        }
    }
}
//# sourceMappingURL=render.js.map