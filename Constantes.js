//CONSTANTES DE TEMPO
var fps = 60;
var dt = 1/fps;
var tempoDanificado = 1;
var tempoInimigoDanificado = 0.5;
var tempoMinProxDisparo = 1500;
var intervaloFrames = 25;
var tempoAnimacaoCanhao = 0.1;
var velocidadeCenario = 600;
var tempoMinProxPedra = 1500;
var tempoExplosao = 2;

//CONSTANTES DE PERSONAGEM
var pcaxneg = -1000;
var pcaxpos = 1000;
var pcayneg = -1000;
var pcaypos = 1000;
var pcraio = 50;
var pcraiocanhao = 45;
var pcxinicial = -100;
var maxVidas = 3;

//CONSTANTES DE INIMIGOS
var inraio = 50;
var inraiocanhao = 45;
var xInicial = -500;

//COSTANTES DE CENARIO
var pedraXInicial = 2000;
var pedraraio = 50;
var danopedra = 25;

//CONSTANTES GLOBAIS
var fatorRotacaoY = 1000;
var largBarraSaude = 100;
var altuBarraSaude = 5;
var saudeMaxima = 100;
var larguraCanvas = 1000;
var alturaCanvas = 600;
var raioTiro = 8;
var velocidadeTiro = 700;
var tracao = 0.07;
var tracaoInimigo = 0.05;

//IMAGENS
var carro = new Image();
carro.src = "img/carro.png";
carro.id = "carroImg";

var inimigoImg = new Image();
inimigoImg.src = "img/inimigo.png"
inimigoImg.id = "inimigoImg";

var explosaoImg = new Image();
explosaoImg.src = "img/explosao.png"; //http://opengameart.org/content/explosion
explosaoImg.id = "explosaoImg";

var canhao = new Image();
canhao.src = "img/canhao.png";
canhao.id = "canhaoImg";

var imgTiros = new Image();
    imgTiros.src = "img/tiro.png";

var chao = new Image();
chao.src = "img/chao.jpg"; //http://2.bp.blogspot.com/-UTV6xMDLlzk/TtENL3YbYZI/AAAAAAAAAFE/wzG3veFt2EI/s1600/Dirt+cracked+00+seamless.jpg

var pedraImg = new Image();
pedraImg.src = "img/pedra.png"; //https://s-media-cache-ak0.pinimg.com/236x/91/05/af/9105af1e9bab92e1c176553e8a65f767.jpg

//AUDIO
audioLib = new AudioResources(5);
audioLib.load("tiro", "snd/tiro.wav");          //http://opengameart.org/content/gunloop-8bit
audioLib.load("explosao", "snd/explosao.wav");  //http://opengameart.org/content/explosion-0
audioLib.loadBackground("motor", "snd/motor.wav");        //http://opengameart.org/content/car-engine-loop-96khz-4s
audioLib.loadBackground("background", "snd/background.wav"); //https://www.freesound.org/people/FoolBoyMedia/sounds/231254/
//power up: https://www.freesound.org/people/GameAudio/sounds/220173/