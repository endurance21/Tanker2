function controlPlayer(){
    if(keyPressed[Key.UP]){
        tank1.velocity = Up.scale(PLAYER_SPEED); 
        tank1.angle = 0; 
    }
    if(keyPressed[Key.LEFT]){
        tank1.velocity = Left.scale(PLAYER_SPEED); 
        tank1.angle = 3 * PI/2; 
    }
    if(keyPressed[Key.RIGHT]){
        tank1.velocity = Right.scale(PLAYER_SPEED); 
        tank1.angle = PI/2; 
    }
    if(keyPressed[Key.DOWN]){
        tank1.velocity = Down.scale(PLAYER_SPEED); 
        tank1.angle = PI; 
    }
    if(keyPressed[Key.SPACE]){
       tank1.fireBullet();         
    }

}
