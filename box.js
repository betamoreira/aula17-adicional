class Box {

  constructor(x, y, w, h, vx, vy){
    this.x1 = x;
    this.y1 = y;
    this.w1 = w;
    this.h1 = h;
    this.vx = vx;
    this.vy = vy;
  }

  show(){
    rect(this.x1, this.y1, this.w1, this.h1);
  }

  moveX(){
    this.x1 = this.x1 + this.vx;
  }

  moveY(){
    this.y1 = this.y1 + this.vy;
  }


}
  
