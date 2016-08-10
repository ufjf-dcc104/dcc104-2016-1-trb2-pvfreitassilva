function Sprite(){
  this.x = 110;
  this.y = 115;
  this.raio = 16;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.rotacao = 0;
  this.saude = saudeMaxima;
  this.colExplosao = 0;
  this.linExplosao = 0;
  this.iniciando = true;
  this.col = 0;
  this.danificado=0;
  this.raioCanhao = pcraiocanhao;
  this.animacaoCanhao = 0;
  this.animarCanhao = false;
}

Sprite.prototype.restaurar = function(){
  if(this.linExplosao >= 4){
    this.saude = saudeMaxima;
    this.colExplosao = 0;
    this.linExplosao = 0;
  }
}

Sprite.prototype.atirar = function(deInimigo){
      
  if(this.saude>0 && pc.vidas>0 && !pause){
      var tiro = new Sprite();

      tiro.restricoes = function () {};

      tiro.desenhar=function(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotacao);
        ctx.drawImage(imgTiros, 0, 0, 64, 64,
            -this.raio, -this.raio, 2*this.raio, 2*this.raio);
        ctx.restore();
      };

      tiro.mover = function (){
        this.vx = this.vx + this.ax*dt;
        this.x = this.x + this.vx*dt;
        this.vy = this.vy + this.ay*dt;
        this.y = this.y + this.vy*dt;
      }

      tiro.foraDaTela = function(){
        if(this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height){
          return true;
        }
        return false;
      }

      tiro.raio = raioTiro;
      tiro.col = 0;
      tiro.x = this.x;
      tiro.y = this.y;
      tiro.vy = velocidadeTiro*Math.sin(this.rotacao);
      tiro.vx = velocidadeTiro*Math.cos(this.rotacao);
      tiro.rotacao=this.rotacao;
      tiro.deInimigo = deInimigo;
      tiro.forca = 10;
      this.animarCanhao = true;
      this.animacaoCanhao = 0;

      tiros.push(tiro);
      audioLib.play("tiro", 25);
    }
}

Sprite.prototype.mover = function (){
  this.vx = this.vx + this.ax*dt - tracao*this.vx;;
  this.x = this.x + this.vx*dt;
  this.vy = this.vy + this.ay*dt - tracao*this.vy;
  this.y = this.y + this.vy*dt;

  this.rotacao = Math.atan((this.y - mousePos.y)/(this.x - mousePos.x));
      if(mousePos.x < this.x)
        this.rotacao +=Math.PI;
}

Sprite.prototype.desenhar = function (){

    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.vy/fatorRotacaoY);

    var linha;
    if(this.ax<0)
      linha = 1;
    else
      linha = 0;

    if(this.saude <= 0 && this.linExplosao < 4){

      if(this.linExplosao==0 && this.colExplosao == 0){
        audioLib.play("explosao", 500);
      }

        ctx.drawImage(explosaoImg, Math.floor(this.colExplosao)*64, this.linExplosao*64, 64, 64,
        -this.raio, -this.raio, 2*this.raio, 2*this.raio);

        if(this.colExplosao >= 4){
          this.colExplosao = 0;
          this.linExplosao++;
        }
        else{
          this.colExplosao += intervaloFrames*dt;
        }
    }
    else{

      if((this.danificado*20%2>=0 && this.danificado*20%2 <= 1.0) || this.danificado<0)
          ctx.drawImage(this.img, Math.floor(this.col)*128+5, linha*128+5, 123, 123,
            -this.raio, -this.raio, 2*this.raio, 2*this.raio);

        ctx.restore();

        //desenha barra de vida
        ctx.save();
        ctx.translate(this.x,this.y);

        var corSaude = "rgb("+ Math.floor(255-this.saude*2.55) +","+Math.floor(this.saude*2.55)+",0)";
        //console.log(corVida);
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillStyle = corSaude;
        ctx.lineWidth = 1;
        ctx.strokeRect(-this.raio,-this.raio,largBarraSaude,altuBarraSaude);
        ctx.fillRect(-this.raio,-this.raio,this.saude,altuBarraSaude);

        ctx.restore();

        if(this.col >= 4)
          this.col = 0;
        else
          this.col += intervaloFrames*dt;

        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotacao);
        ctx.translate(15,0);

        if((this.danificado*20%2>=0 && this.danificado*20%2 <= 1.0) || this.danificado<0){
          if(this.animarCanhao){
            this.animacaoCanhao+=dt;
            if(this.animacaoCanhao>tempoAnimacaoCanhao){
              this.animacaoCanhao=0;
              this.animarCanhao=false;
            }
            ctx.drawImage(canhao, 128, 0, 128, 128,
              -this.raioCanhao, -this.raioCanhao, 2*this.raioCanhao, 2*this.raioCanhao);
          }
          else{
            ctx.drawImage(canhao, 0, 0, 128, 128,
              -this.raioCanhao, -this.raioCanhao, 2*this.raioCanhao, 2*this.raioCanhao);
          }
        }
        this.danificado -= dt;
    }
    ctx.restore();
}

Sprite.prototype.restricoes = function(){
  
  if(this.x < 400 && this.iniciando){
    this.vx = 300;
  } else{
    this.iniciando=false;
  }


  if(this.x<15 && !this.iniciando){
    this.x = 15;
    this.vx = 0;
    this.ax = 0;
  }
  if(this.x>canvas.width-15) {
    this.x=canvas.width-15;
    this.vx = 0;
    this.ax = 0;
  }
  if(this.y<15){
    this.y = 15;
    this.vy = 0;
    this.ay = 0;
  }
  if(this.y>canvas.height-15) {
    this.y=canvas.height-15;
    this.vy = 0;
    this.ay = 0;
  }
}

Sprite.prototype.colidiuComCircular = function (alvo) {
  var distancia = Math.sqrt(
        Math.pow(alvo.x - this.x, 2)+
        Math.pow(alvo.y - this.y, 2)
  );
  return distancia<(alvo.raio+this.raio);
};