class Tank extends GameObject{
    constructor(sprite, position, velocity){
       super(sprite, position, velocity);
       this.bullets = [];
    }

    loadBullet(image){
      let bullet = new Bullet(image);
      bullet.move(new Vec2(this.width/2 , this.height/2)); 
      bullet.move(this.position.subtract(bullet.position));
      bullet.move( new Vec2(-bullet.width/2, -bullet.height/2));
      this.bullets.push(bullet);
    }

    fireBullet(){
      let soundFire = audioloader.load('res/sounds/fire.wav');
     
      let direction = new Vec2(0,0);
      if(this.angle == 0){
        direction = Up ;
      }
      else if (this.angle == PI/2) {
        direction = Right ;
      }
      else if (this.angle == PI) {
        direction = Down ;
      }
      else if (this.angle == 3 * PI/2) {
        direction = Left ;
      }
      
      let angle = this.angle;
      if(this.bullets[0].isAvailable){
        if(audioloader.allAudioLoaded)
        soundFire.play();
        this.bullets[0].move(this.position.subtract(this.bullets[0].position));
        this.bullets[0].move(new Vec2(this.width/2 , this.height/2)); 
        this.bullets[0].move( new Vec2(-this.bullets[0].width/2, -this.bullets[0].height/2));
        this.bullets[0].fire(direction,angle);
      }  
    }

    updateBullet(){
      if(!this.bullets[0].isInside(WorldSpace)){
        this.bullets[0].isAvailable = true;
      }
      this.bullets[0].update();
    }

}

