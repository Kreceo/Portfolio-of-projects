var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var leftPressed = false;
var rightPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc( x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {

    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
   
    if (x + dx > canvas.height-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if(rightPressed) {
        paddleX +=7;
    }
    else if(leftPressed) {
        paddleX -=7;
    }

    x += dx;
    y += dy;

}

document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key =="ArrowLeft") {
        leftPressed == true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key =="ArrowLeft") {
        leftPressed == false;
    }
}


setInterval(draw, 10);
