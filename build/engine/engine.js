class Game {
    constructor(htmlDivId) {
        this.loop = (timestamp) => {
            let delta = timestamp - this.lastRender;
            if (this.canvas.checkIfResized()) {
                this.render.loadSize();
            }
            this.handler.update(delta);
            this.handler.draw(this.render);
            this.render.draw();
            if (this.countFPS) {
                if (Date.now() - this.timeBefore >= 1000) {
                    this.timeBefore = Date.now();
                    this.FPS = this.framesInSecond;
                    this.framesInSecond = 0;
                    if (this.logFPS) {
                        console.log('FPS', this.FPS);
                    }
                }
                this.framesInSecond++;
            }
            this.lastRender = timestamp;
            if (this.runState) {
                window.requestAnimationFrame(this.loop);
            }
        };
        this.start = () => {
            this.framesInSecond = 0;
            this.timeBefore = Date.now();
            this.runState = true;
            window.requestAnimationFrame(this.loop);
        };
        this.stop = () => {
            this.runState = false;
        };
        this.handler = new Handler();
        this.canvas = new Canvas(htmlDivId);
        this.render = new Render(this.canvas);
        KeyInput.init();
        MouseInput.init(this.render);
        this.runState = false;
        this.lastRender = 0;
        this.countFPS = true;
        this.logFPS = true;
    }
}
//# sourceMappingURL=engine.js.map