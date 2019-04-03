//Defines the Keyboard controls of the player
function controlPlayer(player){
    if(keyPressed.UP){
        player.velocity = Up.scale(PLAYER_SPEED); 
        player.angle = 0; 
    }
    if(keyPressed.LEFT){
        player.velocity = Left.scale(PLAYER_SPEED); 
        player.angle = 3 * PI/2; 
    }
    if(keyPressed.RIGHT){
        player.velocity = Right.scale(PLAYER_SPEED); 
        player.angle = PI/2; 
    }
    if(keyPressed.DOWN){
        player.velocity = Down.scale(PLAYER_SPEED);  
        player.angle = PI; 
    }
    if(keyPressed.SPACE){
       player.fireBullet();         
    }

}
