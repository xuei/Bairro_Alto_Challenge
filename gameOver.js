let img8 = new Image();
img8.src = "images/gameOver.jpg";
class GameOver {
    constructor(){
this.img8=img8,
this.x= 800,
this.y= 400
    }
   
    draw() {
        ctx.drawImage(
            this.img8, this.x, 0)
        
    }

}

