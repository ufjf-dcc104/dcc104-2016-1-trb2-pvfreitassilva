function AudioResources (numcanais){
  this.numcanais =numcanais||10;
  this.sons = {};
  this.canais = [];
  this.ativos = {};
  this.sonsBackground = {};
  for (var i = 0; i < this.numcanais; i++) {
    this.canais[i] = {
      "audio": new Audio(),
      "fim": -1
    };
  }

  this.load = function(key, src){
    this.sons[key] = new Audio(src);
    this.sons[key].load();
  }

  this.loadBackground = function(key, src){
    this.sonsBackground[key] = new Audio(src);
    this.sonsBackground[key].load();
  }

  this.play = function (key, duration) {
      if(this.ativos[key]) return;
      if(duration){
        this.ativos[key] = true;
        setTimeout((function(that){
          return function(){
            delete that.ativos[key];
          };
        })(this), duration);
      }

      var agora = new Date();
      for (var i = 0; i < this.numcanais; i++) {
        if(this.canais[i].fim<agora.getTime()){
          console.log("Reproduzindo no canal "+i);
          this.canais[i].fim = agora.getTime()+this.sons[key].duration*1000;
          this.canais[i].audio.src = this.sons[key].src;
          this.canais[i].audio.play();
          break;
        }
      }

    }

    this.playBackground = function () {

      for(var i in this.sonsBackground){
          this.sonsBackground[i].loop=true;
          this.sonsBackground[i].play();
      }

      //this.background.src = this.sons[key].src;
      //this.background.loop = true;
      //this.background.play();

    }

    this.pauseBackground = function (key) {

      for(var i in this.sonsBackground){
          this.sonsBackground[i].pause();
      }

    }


}
