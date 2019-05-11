function RectangleCollision(rect1, rect2){
    let x1 = rect1.position.x;
    let x2 = rect2.position.x;
    let y1 = rect1.position.y;
    let y2 = rect2.position.y;
    let w1 = rect1.width;
    let w2 = rect2.width;
    let h1 = rect1.height;
    let h2 = rect2.height;
    let collisionData = {
        collided : false,
        collisionDistance : new Vec2(),
    };

    
    if(x2 + w2 > x1  && x2 < x1 + w1){
        if(y2 + h2 > y1  && y2 < y1 + h1){
            if(x1 < x2){
                collisionData.collisionDistance.x = x1 + w1 - x2;
            }
            else{
                collisionData.collisionDistance.x = x2 + w2 - x1;
            }
            if(y1 < y2){
                collisionData.collisionDistance.y = y1 + h1 - y2;
            }
            else{
                collisionData.collisionDistance.y = y2 + h2 - y1;
            }
            collisionData.collided = true;
        }
    }
    return collisionData;
}


