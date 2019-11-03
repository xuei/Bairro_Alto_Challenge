class obstacle {
    constructor(x, y, vx, vy, source){
this.x= x,
this.y= y,
this.vx= vx,
this.vy= vy,
this.radius= 40,
this.color = "red"
this.speed= -1
this.source = source,
this.img = new Image();     }
    move (){
        this.x += this.speed;    }

    draw()  {
      this.img.src = this.source;
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.restore();
        ctx.save();
        ctx.translate(this.x, this.y)
       let ratio = 2;
       ctx.drawImage(
       this.img,
       -ratio * this.radius,
       -ratio * this.radius,
       2 * ratio * this.radius,
       2 * ratio * this.radius);
      ctx.restore();      
    }
} 



