let player;
let enemies = [];

ImageLoader.onEveryImageLoaded = () => {

    //Defining the players and enemies
    player = new Tank(playerImage, new Vec2(122, 100),new Vec2(0,0));
    player.loadBullet(bulletImage);
    player.friction = 0.90;

    for(let i = 0; i<4; i++){
        let x = Math.random()*WIDTH;
        let y = Math.random()*HEIGHT;
        enemies[i] = new Enemy(enemyImageBlack,new Vec2(x ,y),new Vec2(0,0));
        enemies[i].loadBullet(bulletImage);
    }
    for(let i = 4; i<10; i++){
        let x = Math.random()*WIDTH;
        let y = Math.random()*HEIGHT;
        enemies[i] = new Enemy(enemyImageRed,new Vec2(x, y),new Vec2(0,0)) ;
        enemies[i].loadBullet(bulletImage);
    }

    for(let i = 0; i<enemies.length; i++){
        for(let j = i + 1; j < enemies.length; j++){
            let cData = RectangleCollision(enemies[i],enemies[j]);
            while(cData.collided==true){
                cData = RectangleCollision(enemies[i],enemies[j]);
                if(enemies[i].position.x <= enemies[j].position.x){
                    enemies[i].move(new Vec2(-cData.collisionDistance.x, 0));
                }
                else{
                    enemies[j].move(new Vec2(-cData.collisionDistance.x, 0));
                }
                if(enemies[i].position.y <= enemies[j].position.y){
                    enemies[i].move(new Vec2(0,-cData.collisionDistance.y));
                }
                else{
                    enemies[j].move(new Vec2(0,-cData.collisionDistance.y));
                }  
            }
        }
    }
    //Starting the game
    Game.start();   
}
