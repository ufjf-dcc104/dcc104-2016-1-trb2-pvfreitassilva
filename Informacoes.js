var tempo=0;
var inimigosDerrotados=0;

function desenhaInfos(){

	if(pc.saude>0)
		tempo=Math.floor((tempo+dt)*100)/100;

	//ctx.setLineDash([0,0]);
	ctx.font="30px Arial";
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.strokeText(tempo, 20, 40);
	ctx.fillText(tempo, 20, 40);
	ctx.strokeText("Derrotados: "+inimigosDerrotados, 120, 40);
	ctx.fillText("Derrotados: "+inimigosDerrotados, 120, 40);
	
	var posVida = 0;

	for(var i = 0; i<pc.vidas; i++){
		ctx.save();
    	ctx.translate(posVida*50+340,7);
		ctx.drawImage(pc.img, 0, 0, 128, 128,
            0, 0, 50, 50);
		ctx.restore();
		posVida++;
	}

	if(pc.vidas<=0){
		ctx.font="60px Arial";
		ctx.fillStyle = "red";
		ctx.fillText("Game over!", canvas.width/2-200, canvas.height/2);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 1;
		ctx.strokeText("Game over!", canvas.width/2-200, canvas.height/2);
	}
}