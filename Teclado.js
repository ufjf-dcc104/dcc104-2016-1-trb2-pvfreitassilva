function teclaPressionada(e){
	//console.log("Tecla Pressionada: " + e.keyCode);
	switch(e.keyCode){
		case 65: //a
			pc.ax = pcaxneg;
		break;
		case 68: //d
			pc.ax = pcaxpos;
		break;
		case 87: //w
			pc.ay = pcayneg;
		break;
		case 83: //s
			pc.ay = pcaypos;
		break;
	}
}
function teclaSolta(e){
	//console.log("Tecla Solta: " + e.keyCode);
	switch(e.keyCode){
		case 65:
		case 68:
			pc.ax = 0;
			break;
		case 87:
		case 83:
			pc.ay = 0;
		break;
	}
} 