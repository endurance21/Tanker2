var keyPressed = {
    SPACE : false,
    LEFT : false,
    RIGHT : false,
    UP  : false,
    DOWN : false,
};

function handleKeyDown(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed.UP = true;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed.LEFT = true;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed.DOWN = true;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed.RIGHT= true;
            break;
        case 'Space':
            keyPressed.SPACE = true;
            break;
    }
}

function handleKeyUp(e){
    switch(e.code){
        case 'KeyW': case 'ArrowUp' :
            keyPressed.UP= false;
            break;
        case 'KeyA': case 'ArrowLeft' :
            keyPressed.LEFT = false;
            break;
        case 'KeyS': case 'ArrowDown' :
            keyPressed.DOWN = false;
            break;
        case 'KeyD': case 'ArrowRight' :
            keyPressed.RIGHT = false;
            break;
        case 'Space': 
            keyPressed.SPACE = false;
            break;
        
    }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);