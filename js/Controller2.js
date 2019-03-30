const Key = {
    SPACE : 0,
    LEFT : 1,
    RIGHT : 2,
    UP  : 3,
    DOWN : 4,
};

let keyPressed = [false, false, false, false, false];

function handleKeyDown(e){
    switch(e.key){
        case 'w': case 'ArrowUp' :
            keyPressed[Key.UP] = true;
            break;
        case 'a': case 'ArrowLeft' :
            keyPressed[Key.LEFT] = true;
            break;
        case 's': case 'ArrowDown' :
            keyPressed[Key.DOWN] = true;
            break;
        case 'd': case 'ArrowRight' :
            keyPressed[Key.RIGHT] = true;
            break;
        case ' ':
            keyPressed[Key.SPACE] = true;
            break;
    }
    

}
function handleKeyUp(e){
    switch(e.key){
        case 'w': case 'ArrowUp' :
            keyPressed[Key.UP] = false;
            break;
        case 'a': case 'ArrowLeft' :
            keyPressed[Key.LEFT] = false;
            break;
        case 's': case 'ArrowDown' :
            keyPressed[Key.DOWN] = false;
            break;
        case 'd': case 'ArrowRight' :
            keyPressed[Key.RIGHT] = false;
            break;
        case ' ': 
            keyPressed[Key.SPACE] = false;
            break;
        
    }
}
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);