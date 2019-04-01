//Defines the Keyboard controls of the player
function controlPlayer(player){
    if(keyPressed[Key.UP]){
        player.velocity = Up.scale(PLAYER_SPEED); 
        player.angle = 0; 
    }
    if(keyPressed[Key.LEFT]){
        player.velocity = Left.scale(PLAYER_SPEED); 
        player.angle = 3 * PI/2; 
    }
    if(keyPressed[Key.RIGHT]){
        player.velocity = Right.scale(PLAYER_SPEED); 
        player.angle = PI/2; 
    }
    if(keyPressed[Key.DOWN]){
        player.velocity = Down.scale(PLAYER_SPEED); 
        player.angle = PI; 
    }
    if(keyPressed[Key.SPACE]){
       player.fireBullet();         
    }

}
