let img4 = new Image();
img4.src = "images/bifana3.png";
class collectable {
    constructor(){
this.img4=img4,
this.x= 1500,
this.y= 400,
this.vx= 0,
this.vy= 4,
this.radius= 60,
this.color = "red"
this.speed= -2.5    }
    move (){
        this.x += this.speed;  }

    draw()  {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
             ctx.restore();
        ctx.save();
        ctx.translate(this.x, this.y)
       let ratio = 1;
       ctx.drawImage(
       this.img4,
       -ratio * this.radius,
       -ratio * this.radius,
       2 * ratio * this.radius,
       2 * ratio * this.radius);
      ctx.restore();   } } 

let img5 = new Image();
img5.src = "images/imperial2.png";
class collectable2 {
    constructor(){
this.img5=img5,
this.x= 1800,
this.y= 200,
this.vx= 0,
this.vy= 4,
this.radius= 60,
this.color = "blue"
this.speed= -2.5     }
    move (){
        this.x += this.speed;    }
    draw()  {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.restore();
        ctx.save();
        ctx.translate(this.x, this.y)
       let ratio = 1;
       ctx.drawImage(
       this.img5,
       -ratio * this.radius,
       -ratio * this.radius,
       2 * ratio * this.radius,
       2 * ratio * this.radius);
      ctx.restore();   } } 

