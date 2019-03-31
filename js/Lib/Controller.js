const Key = {
    SPACE : 0,
    LEFT : 1,
    RIGHT : 2,
    UP  : 3,
    DOWN : 4,
};

let keyPressed = [false, false, false, false, false];

function handleKeyDown(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed[Key.UP] = true;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed[Key.LEFT] = true;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed[Key.DOWN] = true;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed[Key.RIGHT] = true;
            break;
        case 'Space':
            keyPressed[Key.SPACE] = true;
            break;
    }
    

}
function handleKeyUp(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed[Key.UP] = false;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed[Key.LEFT] = false;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed[Key.DOWN] = false;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed[Key.RIGHT] = false;
            break;
        case 'Space': 
            keyPressed[Key.SPACE] = false;
            break;
        
    }
}
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);