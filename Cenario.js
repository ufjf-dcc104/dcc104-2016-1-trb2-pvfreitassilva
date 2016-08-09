var cenario = new Cenario();

function Cenario(){
	this.passo = 0;
}

Cenario.prototype.desenhar = function(){
	ctx.drawImage(chao, -this.passo, 0);
	ctx.drawImage(chao, -this.passo+800, 0);
	ctx.drawImage(chao, -this.passo+1600, 0);
	this.passo += dt*800;
	if(this.passo > 800)
		this.passo = 0;
}