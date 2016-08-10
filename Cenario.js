var cenario = new Cenario();
var excluirPedras = [];

function Cenario(){
	this.passo = 0;
	this.pedras = [];
	this.tempoPedra = 0;
	this.tempoProxPedra = Math.random()*tempoMinProxPedra + tempoMinProxPedra;
}

function Pedra(x, y, raio){
	this.x = x;
	this.y = y;
	this.raio = raio;
	this.vx = -velocidadeCenario;
	this.efeitoPisca = 0;
}

Pedra.prototype.desenhar = function(){
	if(this.x > canvas.width){
		this.efeitoPisca+=dt;
			if(this.efeitoPisca*10%2>=0 && this.efeitoPisca*10%2 <= 1.0){
			ctx.save();
		    ctx.translate(canvas.width-this.raio/2,this.y);
		    ctx.drawImage(pedraImg, 0, 0, 182, 182,
		        -this.raio/2, -this.raio/2, this.raio/2, this.raio/2);
		    ctx.restore();
		}
	}else{
		ctx.save();
	    ctx.translate(this.x,this.y);
	    ctx.drawImage(pedraImg, 0, 0, 182, 182,
	        -this.raio, -this.raio, 2*this.raio, 2*this.raio);
	    ctx.restore();
	}
}

Pedra.prototype.mover = function(){
	this.x = this.x -velocidadeCenario*dt;
}

Cenario.prototype.desenhar = function(){
	ctx.drawImage(chao, -this.passo, 0);
	ctx.drawImage(chao, -this.passo+800, 0);
	ctx.drawImage(chao, -this.passo+1600, 0);
	this.passo += dt*velocidadeCenario;
	if(this.passo > 800)
		this.passo = 0;

	for(var i in this.pedras){
		this.pedras[i].desenhar();
	}


}

Cenario.prototype.criaPedra = function(){
	var pedra = new Pedra(pedraXInicial, Math.random()*(canvas.height - 400) + 200 - pedraraio, pedraraio);
	this.pedras.push(pedra);
}

Cenario.prototype.restricoes = function(){

	this.tempoPedra+=1000*dt;
	if(this.tempoPedra > this.tempoProxPedra){
		console.log("Criando pedra com "+this.tempoDisparo+"ms");
		this.tempoPedra = 0;
		this.tempoProxPedra = Math.random()*tempoMinProxPedra + tempoMinProxPedra;
		this.criaPedra();
	}

	for(var i in this.pedras){
		if (this.pedras[i].x < -1000){
			excluirPedras.push(this.pedras[i]);
		}
	}

	for(var i in excluirPedras){
		this.pedras.splice(this.pedras.indexOf(excluirPedras[i]),1);
	}

	excluirPedras = [];
}

