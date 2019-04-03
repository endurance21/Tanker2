class Enemy extends Tank{
    constructor(sprite, position, velocity){
    super(sprite, position, velocity);
    }

    update(){ 
        this.counter++;
        if(this.counter > this.directioChangeTimeout){
            let a = Math.floor(Math.random()*Direction.length);
            if(a == 4)  a = 0;
            this.velocity = Direction[a].scale(PLAYER_SPEED);
            this.angle = (Direction[a].getAngle() + PI/2)%(2*PI);
            this.counter = 0;    
            this.fireBullet(); 
  
        }

        if(this.position.x + this.width >= WIDTH || this.position.x <= 0){
            this.velocity.x = -this.velocity.x ;
        }

        if(this.position.y + this.height >=HEIGHT || this.position.y <= 0){
            this.velocity.y = -this.velocity.y;
        }



        this.move(this.velocity);
    }
}