function criaInimigo(){
			var inimigo = new Sprite();
			inimigo.danificado = 0;
			inimigo.col = 0;
			inimigo.raio = inraio;
			inimigo.raioCanhao = inraiocanhao;
			inimigo.animacaoCanhao = 0;
			inimigo.animarCanhao = false;
			inimigo.y = Math.random()*(canvas.height - 400) + 200 - inimigo.raio; //canvas.height/2;
			inimigo.x = xInicial;
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
				this.vx = this.vx + this.ax*dt - 0.05*this.vx;;
				this.x = this.x + this.vx*dt;
				this.vy = this.vy + this.ay*dt - 0.05*this.vy;
				this.y = this.y + this.vy*dt;

				this.rotacao = Math.atan((this.y - pc.y)/(this.x - pc.x));
					if(pc.x < this.x)
				    	this.rotacao +=Math.PI;
			}

			return inimigo;
		}

		function insereInimigos(){
			inimigos.push(criaInimigo());
			inimigos.push(criaInimigo());
			inimigos.push(criaInimigo());
		}