Game.update = ()=>{
    //update the player and enemies
    player.update();
    player.updateBullet();
    for(let i = 0; i<enemies.length; i++){
        enemies[i].update();
        enemies[i].updateBullet();
    }
    
    //Check for collisions
    for(let i = 0; i<enemies.length; i++){
        //between players bullet and enemies
        if(player.bullets[0].isInside(enemies[i]) && !player.bullets[0].isAvailable){
            blastSound.play();
            player.bullets[0].isAvailable = true;
            enemies[i].move(new Vec2(WIDTH, HEIGHT));
            enemies[i].velocity = new Vec2(0,0);
        }
        //between player and enemy bullets
        if(enemies[i].bullets[0].isInside(player) && !enemies[i].bullets[0].isAvailable){
            blastSound.play();
            enemies[i].bullets[0].isAvailable = true;
            playerIsAlive = false;
            
        }
    }
    //controlling the player
    controlPlayer(player);
}


Game.draw = ()=>{
    //clearing the canvas each frame
    tankCtx.clearRect(0,0,WIDTH,HEIGHT);
    bulletCtx.clearRect(0,0,WIDTH,HEIGHT);

    //rendering players and enemies
    player.draw(tankCtx);
    if(!player.bullets[0].isAvailable)
        player.bullets[0].draw(bulletCtx); 
    for(let i = 0; i<enemies.length; i++){
        enemies[i].draw(tankCtx);
        if(!enemies[i].bullets[0].isAvailable)
            enemies[i].bullets[0].draw(tankCtx);
    }

    //Ending the game
    if(!playerIsAlive) 
        Game.pause();
}