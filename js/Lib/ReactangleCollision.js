function RectangleCollision(rect1, rect2){
  let nearToOrigin = rect1.position.x < rect2.position.x ? rect1:rect2 ;
  let farToOrigin = rect1.position.x < rect2.position.x ? rect2 :rect1 ;
  if(farToOrigin.position.x - nearToOrigin.position.x <= nearToOrigin.width &&farToOrigin.position.y - nearToOrigin.position.y<= nearToOrigin.height)
  return true 
  else return false
}
alert();