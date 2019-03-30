class Enemy extends Tank{
    constructor(sprite, position, velocity){
    super(sprite, position, velocity);
    }
    update(){
        this.counter++;
        
        if(this.counter > this.directioChangeTimeout){
        let a = Math.floor(Math.random()*Direction.length);
        this.velocity = Direction[a].scale(3.2);
        this.angle = Direction[a].getAngle()*(-1) + PI/2;
        this.counter = 0;
        }

        if(this.position.x + this.width >= WIDTH || this.position.x <= 0){
        this.velocity.x = -this.velocity.x ;
        }

        if(this.position.y + this.height >=HEIGHT || this.position.y <= 0){
            this.velocity.y = -this.velocity.y;
        }

        this.position = this.position.add(this.velocity) ;
        this.anchorPoint = this.anchorPoint.add(this.velocity) ;
    }
}