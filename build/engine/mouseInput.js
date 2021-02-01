var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["left"] = 0] = "left";
    MouseButton[MouseButton["middle"] = 1] = "middle";
    MouseButton[MouseButton["right"] = 2] = "right";
})(MouseButton || (MouseButton = {}));
var MouseWheel;
(function (MouseWheel) {
    MouseWheel[MouseWheel["up"] = -3] = "up";
    MouseWheel[MouseWheel["down"] = 3] = "down";
})(MouseWheel || (MouseWheel = {}));
class MouseInput {
}
MouseInput.canPress = [];
MouseInput.init = (render) => {
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
};
MouseInput.moveEvent = (e) => {
    MouseInput.position.x = ((e.x * MouseInput.render.dimensions.width) / MouseInput.render.htmlDimensions.width);
    MouseInput.position.y = ((e.y * MouseInput.render.dimensions.height) / MouseInput.render.htmlDimensions.height);
};
MouseInput.pressEvent = (e) => {
    switch (e.button) {
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
};
MouseInput.releaseEvent = (e) => {
    switch (e.button) {
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
    if (e.button === MouseInput.clickedButton && MouseInput.clickActive) {
        MouseInput.clickedReleasePosition.x = MouseInput.position.x;
        MouseInput.clickedReleasePosition.y = MouseInput.position.y;
        MouseInput.hasClicked = true;
        MouseInput.clickActive = false;
    }
};
MouseInput.contextMenuEvent = (e) => {
    e.preventDefault();
};
MouseInput.wheelEvent = (e) => {
    MouseInput.scrollDirection = e.deltaY;
    MouseInput.hasScrolled = true;
};
MouseInput.isDown = (button) => {
    switch (button) {
        case MouseButton.left:
            return MouseInput.leftDown;
        case MouseButton.middle:
            return MouseInput.middleDown;
        case MouseButton.right:
            return MouseInput.rightDown;
    }
};
MouseInput.checkMouseOnRect = (position, areaWidth, areaHeight) => {
    if (MouseInput.position.x > position.x
        && MouseInput.position.x < position.x + areaWidth
        && MouseInput.position.y > position.y
        && MouseInput.position.y < position.y + areaHeight) {
        return true;
    }
    else {
        return false;
    }
};
MouseInput.pressed = (button, position, areaWidth, areaHeight) => {
    if (MouseInput.isDown(button)
        && MouseInput.canPress[button]
        && button === MouseInput.pressedButton
        && MouseInput.pressedPosition.x > position.x
        && MouseInput.pressedPosition.x < position.x + areaWidth
        && MouseInput.pressedPosition.y > position.y
        && MouseInput.pressedPosition.y < position.y + areaHeight) {
        MouseInput.canPress[button] = false;
        return true;
    }
    else {
        return false;
    }
};
MouseInput.clicked = (button, position, areaWidth, areaHeight) => {
    if (MouseInput.hasClicked
        && MouseInput.clickedButton === button
        && MouseInput.clickedPressPosition.x > position.x && MouseInput.clickedPressPosition.x < position.x + areaWidth
        && MouseInput.clickedPressPosition.y > position.y && MouseInput.clickedPressPosition.y < position.y + areaHeight
        && MouseInput.clickedReleasePosition.x > position.x && MouseInput.clickedReleasePosition.x < position.x + areaWidth
        && MouseInput.clickedReleasePosition.y > position.y && MouseInput.clickedReleasePosition.y < position.y + areaHeight) {
        console.log(MouseInput.clickedPressPosition, MouseInput.clickedReleasePosition);
        MouseInput.hasClicked = false;
        return true;
    }
    else {
        return false;
    }
};
MouseInput.scrolled = (direction) => {
    if (MouseInput.hasScrolled && MouseInput.scrollDirection === direction) {
        MouseInput.hasScrolled = false;
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=mouseInput.js.map