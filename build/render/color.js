class Color {
    constructor(red, green, blue, alpha = 1) {
        this.checkColorValue = (colorValue) => {
            if (colorValue < 0) {
                return 0;
            }
            else if (colorValue > 255) {
                return 255;
            }
            else {
                return colorValue;
            }
        };
        this.checkAlphaValue = (alphaValue) => {
            if (alphaValue < 0) {
                return 0;
            }
            else if (alphaValue > 1) {
                return 1;
            }
            else {
                return alphaValue;
            }
        };
        this.getRed = () => {
            return this.red;
        };
        this.getGreen = () => {
            return this.green;
        };
        this.getBlue = () => {
            return this.blue;
        };
        this.getAlpha = () => {
            return this.alpha;
        };
        this.getGrey = () => {
            return new Color((this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3);
        };
        this.getGreyAlpha = () => {
            return new Color((this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, this.alpha);
        };
        this.setRed = (red) => {
            this.red = this.checkColorValue(red);
        };
        this.setGreen = (green) => {
            this.green = this.checkColorValue(green);
        };
        this.setBlue = (blue) => {
            this.blue = this.checkColorValue(blue);
        };
        this.setAlpha = (alpha) => {
            this.alpha = this.checkAlphaValue(alpha);
        };
        this.red = this.checkColorValue(red);
        this.green = this.checkColorValue(green);
        this.blue = this.checkColorValue(blue);
        this.alpha = this.checkAlphaValue(alpha);
    }
}
//# sourceMappingURL=color.js.map