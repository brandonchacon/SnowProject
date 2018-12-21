
 /**
*Provide a description of this file here

This file creates snow in random locations.

*
*/

/**
*@author pluska
*@author Brandon C.
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snowArray = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/**
 * Constructor for a single snow flake 
 */

function snowFlake(x,y,r) {
  this.x = x;
  this.y = y;
  this.r = r;

    ctx.beginPath();
    ctx.arc(this.x,this.y, this.r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle="#FFFFFF";
    ctx.fill();
}

/** 
 * TODO: Complete the function below to make lots of snow.   
 * Create each snowflake using the snowFlake constructor and 
 * populate the snowArray with your snowflakes
 * Each snow flake must be of random sizes and populate
 * the screen randomly in the y and x directions
 * Feel free to add a parameter to specify the amount of snow
 */

function snow(){
    for (i = 0; i < 100; i++) {
      snowFlake(Math.floor(Math.random()*1500),Math.floor(Math.random()*1000),Math.floor(Math.random()*50));
    }
   
}

/**
 * TODO:  Make the snow appear randomly appear on the screen and move 
 * in a verticle direction add an additional variable to account for wind
 */

function drawSnow(){
  //The command below is needed to clear the screen between each movement
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
      
  //The command below is needed to animate the snow
  window.requestAnimationFrame(drawSnow);  
}

/**
 * TODO: Complete the function below to move each snow flake to the 
 * top of the screen once it has reached the bottom.
 */
function moveSnow(){
  
}


/**
 * TODO: Complete the drawScene function below.
 * Inside this function, call the additional functions needed to
 * complete your scene
 */
var  myVar;
function drawScene(){
snow()
myVar = setInterval(snow, 1000);
}

drawScene();
