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

    //Starting the game
    Game.start();   
}
