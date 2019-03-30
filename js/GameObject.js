class GameObject{
    constructor( sprite = new Image(), position = new Vec2(), velocity = new Vec2()){
        this.position = position;
        this.velocity = velocity;
        this.sprite = sprite;
        this.maxSpeed = 0;
        this.angle = 0;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
        this.anchorPoint = new Vec2(this.position.x + this.width/2, this.position.y + this.height/2); 
        this.counter = 0;
        this.directioChangeTimeout = Math.random()*40 + 60;
        this.friction = 0.90 ;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.anchorPoint.x, this.anchorPoint.y);
        ctx.rotate(this.angle);
        ctx.translate(-this.anchorPoint.x, -this.anchorPoint.y);
        ctx.translate(this.position.x, this.position.y);
        ctx.drawImage(this.sprite, 0, 0, this.width, this.height);       
        ctx.restore();  
    } 
    move(displacement){
       this.position = this.position.add(displacement);
       this.anchorPoint = new Vec2(this.position.x + this.width/2, this.position.y + this.height/2);
    }
    rotate(angle){
        this.angle += angle;
    }
    scale(factor){
        this.width *= factor;
        this.height *= factor; 
    }
    update(){     
        this.velocity = this.velocity.scale(this.friction);
        this.move(this.velocity);
    }
   
    isInside(Rectangle){
        let x1 = this.position.x;
        let y1 = this.position.y;
        let w1 = this.width;
        let h1 = this.height;
        let x2 = Rectangle.position.x;
        let y2 = Rectangle.position.y;
        let w2 = Rectangle.width;
        let h2 = Rectangle.height;
        if(x1 > x2 && x1 < x2 + w2){
            if(y1 > y2 && y1 < y2 + h2){
                return true;
            }
        }
        return false;
    }
}