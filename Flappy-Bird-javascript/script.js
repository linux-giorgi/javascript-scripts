var cvs = document.getElementById('canvas');
var ctx =cvs.getContext("2d");
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeup = new Image();
var pipeBottom = new Image();
bird.src="img/bird.png";	
bg.src="img/bg.png";	
fg.src="img/fg.png";	
pipeup.src="img/pipeUp.png";	
pipeBottom.src="img/pipeBottom.png";
var gap = 90;
document.addEventListener("keydown",moveUp);
function moveUp(){yPos -= 25;}
var pipe = [];
pipe[0]={x:cvs.width,y:0}
var xPos = 10;
var yPos = 150;
var grav = 1.5;
var score = 0; 
function draw(){
	ctx.drawImage(bg,0,0);
	for (var i=0; i<pipe.length; i++){
		ctx.drawImage(pipeup, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeup.height + gap);
		pipe[i].x--;
		if (pipe[i].x == 125){pipe.push({x:cvs.width,y:Math.floor(Math.random()* pipeup.height) - pipeup.height});}
		if(xPos +bird.width>= pipe[i].x && xPos <=pipe[i].x +pipeup.width && (yPos <=pipe[i].y +pipeup.width 
		   || yPos + bird.height>= pipe[i].y + pipeup.height+ gap)|| yPos+bird.height >= cvs.height - fg.height){
			location.reload();}
	if(pipe[i].x == 5){score++;}
	}
	ctx.drawImage(fg, 0,cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);
	yPos+=grav;
	ctx.fillStyle ="#000";
	ctx.font ="24px mono";
	ctx.fillText("score: " + score, 10, cvs.height - 20);
	requestAnimationFrame(draw);
}	
pipeBottom.onload=draw;
