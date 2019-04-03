const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const PI = Math.PI ;

const tankCanvas = document.getElementById("tankCanvas");
const bulletCanvas = document.getElementById("bulletCanvas");
const backgroundCanvas = document.getElementById("backgroundCanvas");
const grassCanvas = document.getElementById("grassCanvas");

tankCanvas.width    =   bulletCanvas.width    =   backgroundCanvas.width  =  grassCanvas.width = WIDTH;
tankCanvas.height   =   bulletCanvas.height   =   backgroundCanvas.height  =  grassCanvas.height = HEIGHT;

const tankCtx = tankCanvas.getContext("2d");
const bulletCtx = bulletCanvas.getContext("2d");
const backGroundCtx = backgroundCanvas.getContext("2d");
const grassCtx = grassCanvas.getContext("2d");

const BGCOLOR = "rgba(255, 255, 255, 1)";
const BULLET_SPEED = 10 ;
const PLAYER_SPEED = 5;

//Direction Vectors
const Up = new Vec2(0,-1);
const Down = new Vec2(0,1);
const Right = new Vec2(1,0);
const Left = new Vec2(-1,0);
const Direction = [Up,Down,Right,Left];

let WorldSpace = {
    position : new Vec2(0, 0),
    width : WIDTH,
    height : HEIGHT,
}

const ImageLoader = new ImageLoaderClass();
const audioloader = new AudioLoader();
//const destroySound = audioloader.load('res/sounds/destroy.mp3');
const fireSound = audioloader.load('res/sounds/fire.wav');

let playerIsAlive = true;

const playerImage  = ImageLoader.load('res/images/Tanks/tankBlue.png');
const bulletImage  = ImageLoader.load('res/images/Bullets/bulletBlue.png');
const enemyImageRed  = ImageLoader.load('res/images/Tanks/tankRed.png');
const enemyImageBlack  = ImageLoader.load('res/images/Tanks/tankBlack.png');
