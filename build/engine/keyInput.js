class KeyInput {
}
KeyInput.init = () => {
    KeyInput.pressed = new Array(256);
    KeyInput.key = '';
    KeyInput.char = '';
    for (let i = 0; i < KeyInput.pressed.length; i++) {
        KeyInput.pressed[i] = false;
    }
    window.addEventListener('keydown', KeyInput.keyDownEvent, true);
    window.addEventListener('keyup', KeyInput.keyUpEvent, true);
};
KeyInput.keyDownEvent = (e) => {
    if (e.defaultPrevented) {
        return;
    }
    KeyInput.pressed[e.keyCode] = true;
    if (e.key.length === 1) {
        KeyInput.char = e.key;
    }
    KeyInput.key = e.key;
    e.preventDefault();
};
KeyInput.keyUpEvent = (e) => {
    if (e.defaultPrevented) {
        return;
    }
    KeyInput.pressed[e.keyCode] = false;
    e.preventDefault();
};
KeyInput.keyAvailable = () => {
    if (KeyInput.key !== '') {
        return true;
    }
    else {
        return false;
    }
};
KeyInput.charAvailable = () => {
    if (KeyInput.char !== '') {
        return true;
    }
    else {
        return false;
    }
};
KeyInput.getKey = () => {
    if (KeyInput.keyAvailable()) {
        let key = KeyInput.key;
        KeyInput.key = '';
        return key;
    }
    else {
        return null;
    }
};
KeyInput.getChar = () => {
    if (KeyInput.charAvailable()) {
        let char = KeyInput.char;
        KeyInput.char = '';
        return char;
    }
    else {
        return null;
    }
};
//# sourceMappingURL=keyInput.js.map