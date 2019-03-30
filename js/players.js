let bullet,tank1;
let enemies = [];


const playerImage  = ImageLoader.load('res/images/Tanks/tankBlue.png');
const enemyImageBlack  = ImageLoader.load('res/images/Tanks/tankBlack.png');
const bulletImage  = ImageLoader.load('res/images/Bullets/bulletBlue.png');
const enemyImageRed  = ImageLoader.load('res/images/Tanks/tankRed.png');

ImageLoader.onEveryImageLoaded = ()=>{
    //bullet = new Bullet(bulletImage,new Vec2(0,0),new Vec2(0,0))
    tank1 = new Tank(playerImage, new Vec2(122, 100),new Vec2(0,0));
    tank1.loadBullet(bulletImage);
    tank1.bullets[0].friction = 1;
    enemies  = [];
    for(let i = 0; i<4; i++){
        enemies[i] = new Enemy(enemyImageBlack,new Vec2(200*i + 200 ,100),new Vec2(0,0)) ;
    }
    for(let i = 4; i<8; i++){
        enemies[i] = new Enemy(enemyImageRed,new Vec2(100*i,200),new Vec2(0,0)) ;
    }
    var loop;
    Game.start();
    
}

Game.update = ()=>{
    tank1.update();
    for(let i = 0; i<enemies.length; i++){
        enemies[i].update();
    }

    tank1.bullets[0].update();
    //tank1.bullets[0].move(tank1.bullets[0].velocity);
    if(!tank1.bullets[0].isInside(WorldSpace)){
        tank1.bullets[0].isAvailable = true;
    }

    for(let i = 0; i<enemies.length; i++){
        if(tank1.bullets[0].isInside(enemies[i]) && !tank1.bullets[0].isAvailable){
        const blast = audioloader.load('res/sounds/blast.mp3');
        blast.play();
        tank1.bullets[0].isAvailable = true;
        enemies[i].move(new Vec2(WIDTH, HEIGHT));
        enemies[i].velocity = new Vec2(0,0);
        }
    }
    
    controlPlayer();
}
Game.draw = ()=>{
    ctx1.clearRect(0,0,WIDTH,HEIGHT);
    ctx2.clearRect(0,0,WIDTH,HEIGHT);
    tank1.draw(ctx1);

    for(let i = 0; i<enemies.length; i++){
        enemies[i].draw(ctx2);
    }
    tank1.bullets[0].drawBullet(ctx1); 
}