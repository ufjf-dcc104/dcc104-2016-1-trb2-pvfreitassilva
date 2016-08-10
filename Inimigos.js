function criaInimigo(regiao){

			var tamanhoRegiaoY = (canvas.height-100)/3;
			var regiaoY = tamanhoRegiaoY*regiao;

			var inimigo = new Sprite();
			inimigo.raio = inraio;
			inimigo.y = Math.random()*tamanhoRegiaoY + regiaoY + inraio;// - inraio + 200; //canvas.height/2;
			inimigo.x = xInicial + Math.random()*100;
			inimigo.tempoDisparo = 0;
			inimigo.proximoDispado = Math.random()*tempoMinProxDisparo + tempoMinProxDisparo;
			inimigo.img = inimigoImg;

			inimigo.restricoes = function(){

				//parada do inimigo
				if(this.saude <=0){
					this.ax = -2000;
				}
				else if(this.x < 0){
					this.vx = 300;
				}
				else{
					this.ax = 0;
					this.tempoDisparo+=1000*dt;
					if(this.tempoDisparo > this.proximoDispado){
						console.log("Atirando com "+this.tempoDisparo+"ms");
						this.tempoDisparo=0;
						this.proximoDispado = Math.random()*tempoMinProxDisparo + tempoMinProxDisparo;
						this.atirar(true);
					}
				}
			}

			inimigo.mover = function(){
				this.vx = this.vx + this.ax*dt - tracaoInimigo*this.vx;;
				this.x = this.x + this.vx*dt;
				this.vy = this.vy + this.ay*dt - tracaoInimigo*this.vy;
				this.y = this.y + this.vy*dt;

				this.rotacao = Math.atan((this.y - pc.y)/(this.x - pc.x));
					if(pc.x < this.x)
				    	this.rotacao +=Math.PI;
			}

			return inimigo;
		}

		function insereInimigos(){
			inimigos.push(criaInimigo(0));
			inimigos.push(criaInimigo(1));
			inimigos.push(criaInimigo(2));
		}