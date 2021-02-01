
class KeyInput {

    public static pressed: Array<boolean>;
    public static key: string;
    public static char: string;

    public static init = (): void => {
        KeyInput.pressed = new Array(256);

        KeyInput.key = '';
        KeyInput.char = '';

        for(let i = 0; i < KeyInput.pressed.length; i++) {
            KeyInput.pressed[i] = false;
        }

        window.addEventListener('keydown', KeyInput.keyDownEvent, true);
        window.addEventListener('keyup', KeyInput.keyUpEvent, true);
    }

    public static keyDownEvent = (e: KeyboardEvent): void => {
        if (e.defaultPrevented) {
            return;
          }
      
          KeyInput.pressed[e.keyCode] = true;
          
          if(e.key.length === 1) {
              KeyInput.char = e.key;
          }

          KeyInput.key = e.key;

          e.preventDefault();
    }

    public static keyUpEvent = (e: KeyboardEvent): void => {
        if (e.defaultPrevented) {
            return;
          }
          
          KeyInput.pressed[e.keyCode] = false;
      
          e.preventDefault();
    }


    public static keyAvailable = (): boolean => {
        if(KeyInput.key !== '') {
            return true;
        }else{
            return false;
        }
    }

    public static charAvailable = (): boolean => {
        if(KeyInput.char !== '') {
            return true;
        }else{
            return false;
        }
    }

    public static getKey = (): string => {
        if(KeyInput.keyAvailable()) {
            let key = KeyInput.key;
            KeyInput.key = '';
            return key;
        }else{
            return null;
        }
    }

    public static getChar = (): string => {
        if(KeyInput.charAvailable()) {
            let char = KeyInput.char;
            KeyInput.char = '';
            return char;
        }else{
            return null;
        }
    }

}

/* Get keyboard input string 
if(KeyInput.keyAvailable()) {
    if(KeyInput.charAvailable()) {
        string += KeyInput.getChar();
    }else{
        if(KeyInput.getKey() === 'Enter') {
            console.log(string);
            string = '';
        }
    }
    
}
*/
