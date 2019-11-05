myplayer = new Player ();
mybackground = new Background();

let myObstacles;
let myCollectables = [];
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gameArea;
let points;

function playMusic() {
    const bgMusic = new Audio();
    bgMusic.src = "gametheme.wav";
    // bgMusic.loop = true;
    bgMusic.volume = 0.1;
    bgMusic.load();
    bgMusic.play(); }

function playDie() {
    const sfxDie = new Audio();
    sfxDie.src = "died.mp3";
    sfxDie.volume = 0.3;
    sfxDie.play(); }

function playImperial() {
    const sfxImperial = new Audio();
    sfxImperial.src = "imperial.mp3";
    sfxImperial.volume = 0.3;
    sfxImperial.play(); }

function playStart() {
    const sfxStart = new Audio();
    sfxStart.src = "start.mp3";
    sfxStart.volume = 0.3;
    sfxStart.play(); }



function drawAll(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mybackground.draw();
    myplayer.draw();
    myGameArea.score();
    drawObstacles();
    drawCollectables(); }

function updateAll(){
if (myGameArea.gameLoop ===true) {
    myplayer.update();
    mybackground.move();
    updateObstacles();
    updateCollectables();
    checkGameOver();
    checkCollectable();
    myGameArea.score();
    myGameArea.frames += 1;
    drawAll()
    window.requestAnimationFrame(updateAll); } }

function updateObstacles(){
    if (myGameArea.frames % 260 === 0) {
       myObstacles.push(new obstacle(1200, 400, 0, 5, "./images/dealer2.png")) 
          }
              for (i = 0; i < myObstacles.length; i++) {
         myObstacles[i].x += -1;
         myObstacles[i].move();
       }
           if (myGameArea.frames % 480 === 0) {
        myObstacles.push(new obstacle(Math.floor(Math.random() * 900) + 900, Math.floor(Math.random() * 400) + 150, 2, 2, "./images/teen2.png"))
           }
               for (i = 0; i < myObstacles.length; i++) {
          myObstacles[i].x += -1;
          myObstacles[i].move();
        }    
        if (myGameArea.frames > 1000 && myGameArea.frames % 150 === 0) {
            myObstacles.push(new obstacle(Math.floor(Math.random() * 900) + 900, Math.floor(Math.random() * 400) + 150, 2, 2, "./images/teen2.png"))
               }
                   for (i = 0; i < myObstacles.length; i++) {
              myObstacles[i].x += -1;
              myObstacles[i].move();
            }          
     }
        
function drawObstacles(){
        for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1;
        myObstacles[i].draw();        }         }

function updateCollectables(){
    if (myGameArea.frames % 220 === 0) {
       myCollectables.push(new collectable() )
          }
              for (i = 0; i < myCollectables.length; i++) {
         myCollectables[i].x += -1;
         myCollectables[i].move();
       }

       if (myGameArea.frames % 1220 === 0) {
        myCollectables.push(new collectable2() )}  }
        
function drawCollectables(){
   for (i = 0; i < myCollectables.length; i++) {
        myCollectables[i].x += -1;
        myCollectables[i].draw(); } }

function checkCollectable() {
    let thisCollectablehasCollect = false;
    for (i = 0; i < myCollectables.length; i++) {
    thisCollectablehasCollect = myplayer.checkCollisionCollectable(myCollectables[i]);
    if (thisCollectablehasCollect === true) {
        playImperial(), 
        points += 10;
    myCollectables.splice(i,1);
    thisCollectablehasCollect = false;       } } };
        
function checkGameOver() {
    let hasCrashed = false;
    myObstacles.forEach( obs => {
    let thisObstacleHasCrashed = myplayer.checkCollision(obs);
    if (thisObstacleHasCrashed === true) { hasCrashed = true; playDie() } }
    );
    if (hasCrashed === true) {myGameArea.gameLoop = false; alert("Game over!" + " Your Score was " + points)     
    playDie()    
    drawGameOver() }  }

function drawGameOver() {
         document.getElementById("intro").style.display = "none";
         document.getElementById("game").style.display = "none";
         document.getElementById("gameOver").style.display = "block";  }

document.onkeydown = function(e) {
        if(e.keyCode == 32) {
        myplayer.userPull = 4;
    }
    if(e.keyCode === 39) {
        myplayer.x += 20;
    }
    else if(e.keyCode === 37) {
        myplayer.x -= 20;
    }
};

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        myplayer.userPull = 0;
    } 
    if(e.keyCode == 39 || e.keyCode === 37) {
        myplayer.vx = 0;
    }
};



function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("game").style.display = "block";
    myObstacles = [];
    points = 0;
     myGameArea = {
    frames: 0,
    gameLoop: true, 
    start: function() {
      this.canvas.width = 1900;
      this.canvas.height = 500; },
    score: function() {
        ctx.font = "bolder 40px serif";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + points, 50, 50);
        if (this.frames % 500 ===0) 
        points += 1;    }    };

        playStart();
        drawAll(); 
    playMusic();
    updateAll(); }



