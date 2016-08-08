function Sprite(){
  this.x = 110;
  this.y = 115;
  this.raio = 16;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.rotacao = 0;
}

Sprite.prototype.atirar = function(){
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
          console.log("excluindo tiro");
          return true;
        }
        return false;
      }

      tiro.raio = 10;
      tiro.col = 0;
      tiro.x = this.x;
      tiro.y = this.y;
      tiro.vy = 700*Math.sin(this.rotacao);
      tiro.vx = 700*Math.cos(this.rotacao);
      tiro.rotacao=this.rotacao;
      this.animarCanhao = true;
      this.animacaoCanhao = 0;

      tiros.push(tiro);
    }

Sprite.prototype.mover = function (){
  this.vx = this.vx + this.ax*dt - 0.07*this.vx;;
  this.x = this.x + this.vx*dt;
  this.vy = this.vy + this.ay*dt - 0.07*this.vy;
  this.y = this.y + this.vy*dt;

  this.rotacao = Math.atan((this.y - mousePos.y)/(this.x - mousePos.x));
      if(mousePos.x < this.x)
        this.rotacao +=Math.PI;
}

Sprite.prototype.desenhar = function (){

  ctx.fillStyle = this.cor;
  ctx.strokeStyle = "rgb(150, 50, 50)";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

Sprite.prototype.restricoes = function(){
  if(this.x<15){
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
