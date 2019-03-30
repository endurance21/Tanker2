class Tank extends GameObject{
    constructor(sprite, position, velocity){
       super(sprite, position, velocity);
       this.bullets = [];
    }

    loadBullet(image){
      var bullet = new Bullet(image);
      this.bullets.push(bullet);
    }

    fireBullet(bullet){
      const fire = audioloader.load('res/sounds/fire.wav');
      fire.play();
      var direction = new Vec2(0,0);
      if(this.angle == 0){
        direction = Up ;
      }
      else if (this.angle == PI/2) {
        direction = Right ;
      }
      else if (this.angle == PI) {
        direction = Down ;
      }
      else if (this.angle == PI*3/2) {
        direction = Left ;
      }
      let angle = this.angle;
      this.bullets[0].fire(direction,angle);
    }
}

