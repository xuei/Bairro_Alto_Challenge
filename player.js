
let gravity = 1;
let friction = -0.5;
let img2 = new Image();
img2.src = "images/player6.png";
class Player {
    constructor(){
        this.img2=img2,
        this.x= 150,
        this.y= 100,
        this.vx= 30,
        this.vy= 30,

        this.userPull= 0,
        this.radius= 60,
        this.color = "green"
      }

    draw()  {     
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.restore();   
        ctx.save();
        ctx.translate(this.x, this.y)
       let ratio = 1.0;
       ctx.drawImage(
       this.img2,
       -ratio * this.radius,
       -ratio * this.radius,
       2 * ratio * this.radius,
       2 * ratio * this.radius);
      ctx.restore();  }

    update (){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myplayer.draw();
        this.hitBottom();
        this.vy = this.vy + (gravity - friction- this.userPull);
        this.y += this.vy;  
            if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
            this.vy *= -0.1;
          }
          if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
            this.vx *= -0.1;
          }    
    }
    
    checkCollision(obstacle){
        let dx = obstacle.x - this.x;
        let dy = obstacle.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let crash = (distance < obstacle.radius + this.radius) ;
        
    return  crash;
    }


    checkCollisionCollectable(collectable){
        let fx = collectable.x - this.x;
        let fy = collectable.y - this.y;
        let distance = Math.sqrt(fx * fx + fy * fy);
         let collect = (distance < collectable.radius + this.radius) ;
      
  console.log(collect)
    return  collect;
    }


     hitBottom() {
        let rockBottom = canvas.height - this.radius;
        if (this.y > rockBottom) {
            this.y = rockBottom;
            this.vy = 0;
        }
     }

        selling() {
            let selling = canvas.height-this.radius;
            if (this.y  > selling) {
                this.y = selling;
                this.vy = 0;
            }
        }


    }
