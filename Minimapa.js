function desenhaMinimapa(){
	
	ctx.save();
	ctx.translate(canvas.width-200, canvas.height-100);
	ctx.scale(0.15,0.15)

	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.lineWidth = 10;
	ctx.strokeRect(0,0,canvas.width,canvas.height);
	ctx.strokeRect(-400,0,canvas.width+800,canvas.height);
	ctx.fillRect(pc.x,pc.y,pc.raio,pc.raio);

	ctx.fillStyle = "red";
	for(var i in inimigos){
		if(inimigos[i].x>-400)
		ctx.fillRect(inimigos[i].x,inimigos[i].y,inimigos[i].raio,inimigos[i].raio);
	}

	ctx.fillStyle = "red";
	for(var i in cenario.pedras){
		if(cenario.pedras[i].x>-400 && cenario.pedras[i].x<canvas.width+400)
		ctx.fillRect(cenario.pedras[i].x,cenario.pedras[i].y,pedraraio,pedraraio);
	}

	ctx.drawImage(pc.img, 0, 0, 128, 128,
        0, 0, 50, 50);
	ctx.restore();

}