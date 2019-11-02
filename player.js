
let gravity = 0.5;
let friction = 0.3;
let img2 = new Image();
img2.src = "images/player5.png";
class Player {
    constructor(){
        this.img2=img2,
        this.x= 150,
        this.y= 100,
        this.vx= 4,
        this.vy= 4,
        this.userPull= 0,
        this.radius= 70,
        this.color = "green",
        this.speedX = 0;
        this.speedY = 0
    }

    draw()  {
     
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        // ctx.fill()
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
      ctx.restore();
     
    }

    update (){
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.hitBottom();
        this.vy = this.vy + (gravity + friction- this.userPull);
        this.y += this.vy;
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
