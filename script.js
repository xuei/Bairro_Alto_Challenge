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
    bgMusic.src = "music.mp3";
    bgMusic.loop = true;
    bgMusic.load();
    bgMusic.play(); }

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
    if (myGameArea.frames % 1160 === 0) {
       myObstacles.push(new obstacle(1200, 400, 0, 4, "./images/dealer2.png")) 
          }
              for (i = 0; i < myObstacles.length; i++) {
         myObstacles[i].x += -1;
         myObstacles[i].move();
       }
           if (myGameArea.frames % 380 === 0) {
        myObstacles.push(new obstacle(Math.floor(Math.random() * 900) + 600, Math.floor(Math.random() * 400) + 100, 4, 4, "./images/teen2.png"))
           }
               for (i = 0; i < myObstacles.length; i++) {
          myObstacles[i].x += -1;
          myObstacles[i].move();
        }    
        if (myGameArea.frames > 1000 && myGameArea.frames % 150 === 0) {
            myObstacles.push(new obstacle(Math.floor(Math.random() * 900) + 600, Math.floor(Math.random() * 400) + 100, 4, 4, "./images/teen2.png"))
               }
                   for (i = 0; i < myObstacles.length; i++) {
              myObstacles[i].x += -1;
              myObstacles[i].move();
            }           }
        
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
    points += 10;
    myCollectables.splice(i,1);
    thisCollectablehasCollect = false;       } } };
        
function checkGameOver() {
    let hasCrashed = false;
    myObstacles.forEach( obs => {
    let thisObstacleHasCrashed = myplayer.checkCollision(obs);
    if (thisObstacleHasCrashed === true) { hasCrashed = true;  } });
    if (hasCrashed === true) {myGameArea.gameLoop = false; alert("Game over!" + " Your Score was " + points)     
        drawGameOver() }  }

function drawGameOver() {
         document.getElementById("intro").style.display = "none";
         document.getElementById("game").style.display = "none";
         document.getElementById("gameOver").style.display = "block";  }

document.onkeydown = function(e) {
        if(e.keyCode == 32) {
        myplayer.userPull = 3;
    } };

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        myplayer.userPull = 0;
    } };



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

    drawAll(); 
    playMusic();
    updateAll(); }



