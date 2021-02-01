class Canvas {
    constructor(htmlDivId) {
        this.checkIfResized = () => {
            if (this.getDimensions() !== this.dimensions) {
                this.reloadCanvasSize();
                return true;
            }
            return false;
        };
        this.reloadSize = () => {
            this.dimensions = this.getDimensions();
        };
        this.reloadCanvasSize = () => {
            this.dimensions = this.getDimensions();
            this.htmlCanvas.width = this.dimensions.width;
            this.htmlCanvas.height = this.dimensions.height;
        };
        this.getDimensions = () => {
            return new Dimensions(window.innerWidth, window.innerHeight);
        };
        this.setFillStyle = (color) => {
            this.canvasGraphics.fillStyle = `rgb(${color.getRed()},${color.getGreen()},${color.getBlue()},${color.getAlpha()})`;
        };
        this.drawPixel = (position, pixel) => {
            this.setFillStyle(pixel.color);
            this.canvasGraphics.fillRect(position.x, position.y, 1, 1);
        };
        this.drawRect = (rectangle, color) => {
            this.setFillStyle(color);
            this.canvasGraphics.fillRect(rectangle.position.x, rectangle.position.y, rectangle.dimensions.width, rectangle.dimensions.height);
        };
        this.drawImage = (image, rectangle) => {
            this.canvasGraphics.drawImage(image, rectangle.position.x, rectangle.position.y, rectangle.dimensions.width, rectangle.dimensions.height);
        };
        this.drawImage2 = (image, position, dimensions) => {
            this.canvasGraphics.drawImage(image, position.x, position.y, dimensions.width, dimensions.height);
        };
        this.htmlDivId = htmlDivId;
        this.htmlDiv = document.getElementById(htmlDivId);
        this.htmlDiv.innerHTML = "";
        this.reloadSize();
        let newHtmlCanvas = document.createElement("canvas");
        newHtmlCanvas.width = this.dimensions.width;
        newHtmlCanvas.height = this.dimensions.height;
        newHtmlCanvas.id = 'game';
        newHtmlCanvas.style.margin = '0px';
        this.htmlDiv.append(newHtmlCanvas);
        this.htmlCanvas = document.getElementById('game');
        this.canvasGraphics = this.htmlCanvas.getContext('2d');
        this.canvasGraphics.imageSmoothingEnabled = false;
        this.reloadCanvasSize();
    }
}
//# sourceMappingURL=canvas.js.map