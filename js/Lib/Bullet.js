class Bullet extends GameObject{
    constructor(sprite, position, velocity){
        super(sprite, position, velocity);
        this.maxSpeed = BULLET_SPEED ;
        this.isAvailable = true ;
    }

    fire(vector,angle){
        this.angle = angle;
        this.velocity = vector.normalize();
        this.velocity = this.velocity.scale(BULLET_SPEED);
        this.isAvailable = false;
    }
}