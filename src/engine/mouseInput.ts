
enum MouseButton {
    left = 0,
    middle = 1,
    right = 2
}

enum MouseWheel {
    up = -3,
    down = 3
}

class MouseInput {

    private static render: Render;

    public static position: Position;

    public static leftDown: boolean;
    public static middleDown: boolean;
    public static rightDown: boolean;

    private static canPress: boolean[] = [];
    private static pressedButton: MouseButton;
    private static pressedPosition: Position;

    private static clickActive: boolean;
    private static hasClicked: boolean;
    private static clickedButton: MouseButton;
    private static clickedPressPosition: Position;
    private static clickedReleasePosition: Position;

    private static hasScrolled: boolean;
    private static scrollDirection: MouseWheel;

    public static init = (render: Render): void => {
        MouseInput.render = render;
        MouseInput.position = new Position(0, 0);

        MouseInput.leftDown = false;
        MouseInput.middleDown = false;
        MouseInput.rightDown = false;

        MouseInput.canPress[MouseButton.left] = true;
        MouseInput.canPress[MouseButton.middle] = true;
        MouseInput.canPress[MouseButton.right] = true;
        MouseInput.pressedButton = 0;
        MouseInput.pressedPosition = new Position(0, 0);

        MouseInput.clickActive = false;
        MouseInput.hasClicked = false;
        MouseInput.clickedButton = 0;
        MouseInput.clickedPressPosition = new Position(0, 0);
        MouseInput.clickedReleasePosition = new Position(0, 0);

        MouseInput.hasScrolled = false;
        MouseInput.scrollDirection = MouseWheel.up;

        window.addEventListener('mousemove', MouseInput.moveEvent);
        window.addEventListener('mousedown', MouseInput.pressEvent);
        window.addEventListener('mouseup', MouseInput.releaseEvent);
        window.addEventListener('contextmenu', MouseInput.contextMenuEvent);
        window.addEventListener('wheel', MouseInput.wheelEvent);
    }

    private static moveEvent = (e: MouseEvent): void => {
        MouseInput.position.x = ((e.x * MouseInput.render.dimensions.width) / MouseInput.render.htmlDimensions.width);
        MouseInput.position.y = ((e.y * MouseInput.render.dimensions.height) / MouseInput.render.htmlDimensions.height);
    }

    private static pressEvent = (e: MouseEvent): void => {
        switch(e.button) {
            case 0:
                MouseInput.leftDown = true;
                break;
            case 1:
                MouseInput.middleDown = true;
                break;
            case 2:
                MouseInput.rightDown = true;
                break;
        }
        MouseInput.pressedButton = e.button;
        MouseInput.pressedPosition = MouseInput.position;

        MouseInput.clickActive = true;
        MouseInput.clickedButton = e.button;
        MouseInput.clickedPressPosition.x = MouseInput.position.x;
        MouseInput.clickedPressPosition.y = MouseInput.position.y;
    }

    private static releaseEvent = (e: MouseEvent): void => {
        switch(e.button) {
            case MouseButton.left:
                MouseInput.leftDown = false;
                break;
            case MouseButton.middle:
                MouseInput.middleDown = false;
                break;
            case MouseButton.right:
                MouseInput.rightDown = false;
                break;
        }
        MouseInput.canPress[e.button] = true;
        if(e.button === MouseInput.clickedButton && MouseInput.clickActive) {
            MouseInput.clickedReleasePosition.x = MouseInput.position.x;
            MouseInput.clickedReleasePosition.y = MouseInput.position.y;
            MouseInput.hasClicked = true;
            MouseInput.clickActive = false;
        }
    }

    private static contextMenuEvent = (e: MouseEvent): void => {
        e.preventDefault();
    }

    private static wheelEvent = (e: WheelEvent): void => {
        MouseInput.scrollDirection = e.deltaY;
        MouseInput.hasScrolled = true;
    }

    public static isDown = (button: MouseButton) => {
        switch(button) {
            case MouseButton.left:
                return MouseInput.leftDown;
            case MouseButton.middle:
                return MouseInput.middleDown;
            case MouseButton.right:
                return MouseInput.rightDown;
        }
    }

    public static checkMouseOnRect = (position: Position, areaWidth: number, areaHeight: number): boolean => {
        if(MouseInput.position.x > position.x 
            && MouseInput.position.x < position.x + areaWidth 
            && MouseInput.position.y > position.y 
            && MouseInput.position.y < position.y + areaHeight) {
            return true;
        }else{
            return false;
        }
    }

    public static pressed = (button: MouseButton, position: Position, areaWidth: number, areaHeight: number): boolean => {
        if(MouseInput.isDown(button)
        && MouseInput.canPress[button]
        && button === MouseInput.pressedButton 
        && MouseInput.pressedPosition.x > position.x 
        && MouseInput.pressedPosition.x < position.x + areaWidth 
        && MouseInput.pressedPosition.y > position.y 
        && MouseInput.pressedPosition.y < position.y + areaHeight) {
            MouseInput.canPress[button] = false;
            return true;
        }else{
            return false;
        }
    }
    
    public static clicked = (button: MouseButton, position: Position, areaWidth: number, areaHeight: number): boolean => {
        if(MouseInput.hasClicked
        && MouseInput.clickedButton === button
        && MouseInput.clickedPressPosition.x > position.x && MouseInput.clickedPressPosition.x < position.x + areaWidth
        && MouseInput.clickedPressPosition.y > position.y && MouseInput.clickedPressPosition.y < position.y + areaHeight
        && MouseInput.clickedReleasePosition.x > position.x && MouseInput.clickedReleasePosition.x < position.x + areaWidth
        && MouseInput.clickedReleasePosition.y > position.y && MouseInput.clickedReleasePosition.y < position.y + areaHeight) {
            console.log(MouseInput.clickedPressPosition, MouseInput.clickedReleasePosition)
            MouseInput.hasClicked = false;
            return true;
        }else{
            return false;
        }
    }

    public static scrolled = (direction: MouseWheel): boolean => {
        if(MouseInput.hasScrolled && MouseInput.scrollDirection === direction) {
            MouseInput.hasScrolled = false;
            return true;
        }else{
            return false;
        }
    }

}