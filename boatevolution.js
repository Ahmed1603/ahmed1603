
function drawShapes()
{
    drawBackground();
    drawBoat();

}


function drawBoat()

{
    //var canvas = document.getElementById("myCanvas");
    //var ctx = canvas.getContext("2d");
    var ctx = document.getElementById("myCanvas").getContext("2d");


    //boat
    ctx.beginPath();
    ctx.strokeStyle = "#da8f8f";
    ctx.arc(250,250,50,0,(21/21)*Math.PI);
    ctx.fillStyle = "#da8f8f";
    ctx.fill();
    ctx.stroke();

    //flag
    ctx.fillStyle = "#3c64ac";
    ctx.fillRect(250,190,50,30);

    //flag stick
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineWidth=3;
    ctx.lineTo(250,190);
    ctx.strokeStyle="#8fb699";
    ctx.stroke();

}

var a; //reference the animation function
var rX = 70;
var rY = 250;
var rW = 50;
var rH = 50;

function initialize() //sets up the animation
{
    drawBackground();
    var ctx = document.getElementById("myCanvas").getContext("2d");
    rX = rX + moveAmountX; //move 4 px every refresh


    //boat
    ctx.beginPath();
    ctx.strokeStyle = "#da8f8f";
    ctx.arc(70,250,50,0,(21/21)*Math.PI);
    ctx.fillStyle = "#da8f8f";
    ctx.fill();
    ctx.stroke();

    //flag
    ctx.fillStyle = "#ac2e6f";
    ctx.fillRect(70,190,50,30);

    //flag stick
    ctx.beginPath();
    ctx.moveTo(70,250);
    ctx.lineWidth=3;
    ctx.lineTo(70,190);
    ctx.strokeStyle="#8fb699";
    ctx.stroke();

}

function drawBackground()
{
    //var canvas = document.getElementById("myCanvas");
    //var ctx = canvas.getContext("2d");
    var ctx = document.getElementById("myCanvas").getContext("2d");

    //water
    ctx.fillStyle = "#31947e";
    ctx.fillRect(0,300,500,100);

    //sun
    ctx.beginPath();
    ctx.strokeStyle = "#fded59";
    ctx.arc(0,0,120,0, 2*Math.PI);
    ctx.fillStyle = "#fded59";
    ctx.fill();
    ctx.stroke();

}

function startAnimation()
{
    animate();
}

function stopAnimation()
{
    cancelAnimationFrame(a);
}

function animate() //list of things that will animate (in order)
{
    a = requestAnimationFrame(animate); //function that enables animation in js
    drawBackground(); //nothing in this function changes, so every time it is redrawn it will not appear to move
    moveBoatRight();
    //checkBoat();
}

var moveAmountX = 4; //the x is referring to the x coord. and which direction it moves in (left to right)


function  moveBoatRight()
{

    var ctx = document.getElementById("myCanvas").getContext("2d");
    //ctx.style.left = parseInt(ctx.style.left) + moveAmountX + 'px';
    rX = rX + moveAmountX;//move 4 px every refresh

    //boat
    ctx.beginPath();
    ctx.strokeStyle = "#da8f8f";
    ctx.arc(70,250,50,0,(21/21)*Math.PI);
    ctx.fillStyle = "#da8f8f";
    ctx.fill();
    ctx.stroke();



    //flag stick
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineWidth=3;
    ctx.lineTo(250,250);
    ctx.strokeStyle="#8fb699";
    ctx.stroke();
    ctx.fillRect(rX, rY, rW, rH);



    //flag
    ctx.fillStyle = "#ac2e6f";
    ctx.fillRect(70,190,50,30);


}
moveBoatRight();
function checkBoat()
{
    if (rX > 450) {
        moveAmountX = moveAmountX * (-1);
    }
    if (rX < 0) {
        moveAmountX = moveAmountX * (-1);
    }

}
