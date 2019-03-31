let bullet,tank1;
let enemies = [];

const playerImage  = ImageLoader.load('res/images/Tanks/tankBlue.png');
const bulletImage  = ImageLoader.load('res/images/Bullets/bulletBlue.png');
const enemyImageRed  = ImageLoader.load('res/images/Tanks/tankRed.png');
const enemyImageBlack  = ImageLoader.load('res/images/Tanks/tankBlack.png');

ImageLoader.onEveryImageLoaded = () => {
    tank1 = new Tank(playerImage, new Vec2(122, 100),new Vec2(0,0));
    tank1.loadBullet(bulletImage);
    tank1.friction = 0.90;
    tank2 = new Tank(playerImage, new Vec2(122, 100),new Vec2(0,0));
    tank2.loadBullet(bulletImage);
    tank2.friction = 0.90;

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

    Game.start();   
}
