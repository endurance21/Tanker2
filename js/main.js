Game.update = ()=>{
    tank1.update();
    for(let i = 0; i<enemies.length; i++){
        enemies[i].update();
        enemies[i].updateBullet();
    }
    tank1.updateBullet();

    tank2.update();
    tank2.updateBullet();
    // tank1.bullets[0].update();
    // if(!tank1.bullets[0].isInside(WorldSpace)){
    //     tank1.bullets[0].isAvailable = true;
    // }
  
    for(let i = 0; i<enemies.length; i++){
        if(tank1.bullets[0].isInside(enemies[i]) && !tank1.bullets[0].isAvailable){
            blast.play();
            tank1.bullets[0].isAvailable = true;
            enemies[i].move(new Vec2(WIDTH, HEIGHT));
            enemies[i].velocity = new Vec2(0,0);
        }
        if(enemies[i].bullets[0].isInside(tank1) && !enemies[i].bullets[0].isAvailable){
            blast.play();
            enemies[i].bullets[0].isAvailable = true;
            alert("Mar Gaya Madarchod. Isi liye paida kiye the");
            Game.pause();
            
        }
    }
    controlPlayer();
}
Game.draw = ()=>{
    ctx1.clearRect(0,0,WIDTH,HEIGHT);
    ctx2.clearRect(0,0,WIDTH,HEIGHT);
    tank1.draw(ctx2);
    for(let i = 0; i<enemies.length; i++){
        enemies[i].draw(ctx2);
        if(!enemies[i].bullets[0].isAvailable)
            enemies[i].bullets[0].draw(ctx1);
    }
    if(!tank1.bullets[0].isAvailable)
        tank1.bullets[0].draw(ctx1); 
}