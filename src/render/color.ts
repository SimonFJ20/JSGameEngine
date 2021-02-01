
class Color {

    private red: number;
    private green: number;
    private blue: number;
    private alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number = 1) {
        this.red = this.checkColorValue(red);
        this.green = this.checkColorValue(green);
        this.blue = this.checkColorValue(blue);
        this.alpha = this.checkAlphaValue(alpha);
    }

    private checkColorValue = (colorValue: number): number => {
        if(colorValue < 0) {
            return 0;
        }else if(colorValue > 255) {
            return 255;
        }else{
            return colorValue;
        }
    }

    private checkAlphaValue = (alphaValue: number): number => {
        if(alphaValue < 0) {
            return 0;
        }else if(alphaValue > 1) {
            return 1;
        }else{
            return alphaValue;
        }
    }

    public getRed = (): number => {
        return this.red;
    }

    public getGreen = (): number => {
        return this.green;
    }

    public getBlue = (): number => {
        return this.blue;
    }

    public getAlpha = (): number => {
        return this.alpha;
    }

    public getGrey = (): Color => {
        return new Color((this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3);
    }

    public getGreyAlpha = (): Color => {
        return new Color((this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, (this.red + this.green + this.blue) / 3, this.alpha);
    }

    public setRed = (red: number): void => {
        this.red = this.checkColorValue(red);
    }

    public setGreen = (green: number): void => {
        this.green = this.checkColorValue(green);
    }

    public setBlue = (blue: number): void => {
        this.blue = this.checkColorValue(blue);
    }

    public setAlpha = (alpha: number): void => {
        this.alpha = this.checkAlphaValue(alpha);
    }

}