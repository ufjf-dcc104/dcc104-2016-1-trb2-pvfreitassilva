var mousePos= {x: 0,y: 0};

function atualizaPosicaoMouse(e){
			var obj = canvas;
		    var top = 0;
		    var left = 0;
		    while (obj && obj.tagName != 'BODY') {
                    top += obj.offsetTop;
                    left += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
		  
		    var mouseX = e.clientX - left + window.pageXOffset;
		    var mouseY = e.clientY - top + window.pageYOffset;
		    mousePos = {
		        x: mouseX,
		        y: mouseY
		    };
		}

		function mousePressionado(e){
			//console.log("Mouse pressionado");
			//tiro.x = pc.x;
			//tiro.y = pc.y;
			//tiro.vy = 700*Math.sin(pc.rotacao);
			//tiro.vx = 700*Math.cos(pc.rotacao);
			//tiro.rotacao=pc.rotacao;
			//pc.animarCanhao = true;
			//pc.animacaoCanhao = 0;
			pc.atirar(false);
		}