class Bubble {
    constructor(x,y,r,b,a) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = b;
        this.alpha = a;
    }
    show() {
       stroke(0);
       strokeWeight(4)
        fill(this.col, 255 , 255);
        image(mole, this.x, this.y, this.r)
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r / 2) {
          return true;
        } else {
          return false;
        }
      }
}