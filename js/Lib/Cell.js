class Cell {
  constructor( a, b, position, cellWidth){
    this.xIndex = a ;
    this.yIndex = b ;
    this.position = position ;
    this.value = 0 ;
    this.cellWidth = cellWidth ;
  }

  GetValue(){
    return this.value ;
  }

  SetValue(value){
    this.value = value ;
  }

  IncValue(){
    this.value = this.value + 1 ;
  }

  colorBox(ctx){
    let image = new Image();
    switch (this.value) {
      case 1 :
            image.src = "./res/images/Environment/dirt.png";
        break;
      case 2 :
            image.src = "./res/images/Environment/grass.png";
        break;
      case 3 :
            image.src = "./res/images/Environment/sand.png";
        break;
      case 4 :
            image.src = "./res/images/Environment/treeLarge.png";
        break;
      case 5 :
            image.src = "./res/images/Environment/treeSmall.png";
        break;
      default:
            console.log("wrong input") ;
            console.log(this.value);
            console.log("("+this.yIndex+","+this.xIndex+")");
    }

    image.onload = ()=>{
      console.log(this.value);
      ctx.clearRect( this.position.x, this.position.y, this.cellWidth, this.cellWidth);
      ctx.drawImage( image, this.position.x, this.position.y, this.cellWidth, this.cellWidth);
    }

  }
}
