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
        for(let j = i + 1; j < enemies.length; j++){
            let cData = RectangleCollision(enemies[i],enemies[j]);
            if(cData.collided==true){
                console.log(cData);
                let swap = enemies[i].velocity;
                enemies[i].velocity = enemies[j].velocity;
                enemies[j].velocity = swap;
                
            }
        }
        cData = RectangleCollision(player, enemies[i]);
        if(cData.collided){
            enemies[i].move(new Vec2(0,0));
        }
        //between players bullet and enemies
        if(player.bullets[0].isInside(enemies[i]) && !player.bullets[0].isAvailable){
            //blastSound.play();
            player.bullets[0].isAvailable = true;
            enemies[i].move(new Vec2(WIDTH, HEIGHT));
            enemies[i].velocity = new Vec2(0,0);
        }
        //between player and enemy bullets
        if(enemies[i].bullets[0].isInside(player) && !enemies[i].bullets[0].isAvailable){
            // blastSound.play();
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

const grid = new Grid(15,30,window.innerWidth/30);
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 30; j++) {
    grid.cell[i][j].value = 3;
  }
}

grid.drawGrid(backGroundCtx);

const grassGrid = new Grid(8,16,window.innerWidth/16);

let numberofgrass = 3 + Math.floor(Math.random()*4) ;

for (let i = 0; i < numberofgrass ; i++) {
grassGrid.cell[Math.floor(Math.random()*7)][Math.floor(Math.random()*16)].value = 4;
}

grassGrid.drawGrid(grassCtx);

