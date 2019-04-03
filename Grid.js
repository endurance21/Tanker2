class Grid {
  constructor( row = 0, column = 0, cellWidth = 0){
    this.row = row ;
    this.column = column ;
    this.cellWidth = cellWidth ;
    this.cell = [];
    for (let i = 0; i < this.row ; i++) {
      this.cell[i] = [];
    }


    this.intitializeCell();
  }

  intitializeCell(){
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        let position = new Vec2(j*this.cellWidth,i*this.cellWidth);
        this.cell[i][j] = new Cell ( i, j, position , this.cellWidth);
      }
    }
  }

  drawGrid( ctx, a=0, b=0) {
    let x = a ;
    let y = b ;
    ctx.strokeRect( x, y, this.column*this.cellWidth , this.row*this.cellWidth);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        this.cell[i][j].x = x + this.cellWidth/2;
        this.cell[i][j].y = y + this.cellWidth/2;
        //ctx.strokeRect( x, y, this.cellWidth , this.cellWidth);
        if(this.cell[i][j].value > 0){
          this.cell[i][j].colorBox(ctx);
        }
        x = x + this.cellWidth;
      }
      x = 0;
      y = y + this.cellWidth;
    }
  }

}
