//CONSTANTES DE TEMPO
var fps = 60;
var dt = 1/fps;
var tempoDanificado = 1;
var tempoMinProxDisparo = 1500;
var intervaloFrames = 25;
var tempoAnimacaoCanhao = 0.1;

//CONSTANTES DE PERSONAGEM
var pcaxneg = -1000;
var pcaxpos = 1000;
var pcayneg = -1000;
var pcaypos = 1000;
var pcraio = 60;
var pcraiocanhao = 45;

//CONSTANTES DE INIMIGOS
var inraio = 60;
var inraiocanhao = 45;
var xInicial = -500;

//CONSTANTES GLOBAIS
var fatorRotacaoY = 1000;
var largBarraSaude = 100;
var altuBarraSaude = 5;
var saudeMaxima = 100;
var tempoExplosao = 2;

//IMAGENS
var carro = new Image();
carro.src = "img/carro.png";
carro.id = "carroImg";

var inimigoImg = new Image();
inimigoImg.src = "img/inimigo.png"
inimigoImg.id = "inimigoImg";

var explosaoImg = new Image();
explosaoImg.src = "img/explosao.png";
explosaoImg.id = "explosaoImg";

var canhao = new Image();
canhao.src = "img/canhao.png";
canhao.id = "canhaoImg";

//AUDIO
audioLib = new AudioResources(5);
audioLib.load("tiro", "snd/tiro.wav");          //http://opengameart.org/content/gunloop-8bit
audioLib.load("explosao", "snd/explosao.wav");  //http://opengameart.org/content/explosion-0
audioLib.load("motor", "snd/motor.wav");        //http://opengameart.org/content/car-engine-loop-96khz-4s
