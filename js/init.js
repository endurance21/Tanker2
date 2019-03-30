const container = new createDOMElement("div","container");
const canvas1 = document.getElementById("canvas1");
const canvas2 = new createDOMElement("canvas","canvas2",innerWidth, innerHeight);
container.appendChild(canvas1);
container.appendChild(canvas2);
container.style = "position:relative;";
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

 
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const BGCOLOR = "rgba(255, 255, 255, 1)";
const BULLET_SPEED = 10 ;
const PLAYER_SPEED = 5;
const PI = Math.PI ;
const PLAYER_HEALTH = 5;
const Up = new Vec2(0,-1);
const Down = new Vec2(0,1);
const Right = new Vec2(1,0);
const Left = new Vec2(-1,0);
const Direction = [Up,Down,Right,Left];

canvas1.width = WIDTH;
canvas1.height = HEIGHT;

let WorldSpace = {
    position : new Vec2(0, 0),
    width : WIDTH,
    height : HEIGHT,
}

const ImageLoader = new ImageLoaderClass();

