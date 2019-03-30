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
        if(tank1.bullets[0].isAvailable){
            tank1.bullets[0].move(tank1.position.subtract(tank1.bullets[0].position));
            tank1.bullets[0].move(new Vec2(tank1.width/2 , tank1.height/2)); 
            tank1.bullets[0].move( new Vec2(-tank1.bullets[0].width/2, -tank1.bullets[0].height/2));
            tank1.fireBullet(tank1.bullets[0]) ; 
        }
              
    }

}
