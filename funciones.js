function splashscreen(){
	setTimeout(function(){
			window.location.assign('menu.html');
		},5000);
}

function navegar(url , puntos){
	localStorage.setItem('puntos',puntos);
	window.location.assign(url);
}

function animacion(){
    
    
    conteo();
	setTimeout(function(){
		//document.getElementById('bg').style.transition="1s all";
		document.getElementById('bg').style.top="-100%";
		document.getElementById('escenario').style.top="0%";
	},1000);
	
	//CARGAR FOTOS DE FB 
	document.getElementById('img-fbid1').src="http://graph.facebook.com/"+localStorage.getItem('fbid1')+"/picture?type=normal";
	document.getElementById('img-fbid2').src="http://graph.facebook.com/"+localStorage.getItem('fbid2')+"/picture?type=normal";

	puntos = localStorage.getItem('puntos');

}

var disparoEfectuado = "no";
var puntosP1 = 0;
var puntosP2 = 0;
var disparoPermitido = "no";

function disparo(jugador){
    
    document.getElementById('audio').play();
    document.getElementById('audio-muerte').play();
    
    if(disparoPermitido=="no"){
        navigator.vibrate(300);
        navigator.vibrate(300);
        if(jugador == "p1"){
         document.getElementById('vaquero-p1').src="v1.png";
            document.getElementById('p1').removeAttribute("onclick");
        }
        else{
            document.getElementById('vaquero-p2').src="v2.png";   
            document.getElementById('p2').removeAttribute("onclick");
        }
    }
    
	if(disparoEfectuado=="no" && disparoPermitido=="si"){
		if(jugador=="p1"){
			puntosP1++;
            document.getElementById('resultados-p1').innerHTML+="<span>x</span>"
			//matar a p2
			document.getElementById('vaquero-p1').src="v1.png";
			document.getElementById('vaquero-p2').src="v3.png";
		}else{
			puntosP2++;
             document.getElementById('resultados-p2').innerHTML+="<span>x</span>"
			//matar a p1
			document.getElementById('vaquero-p2').src="v1.png";
			document.getElementById('vaquero-p1').src="v3.png";
		}	
	disparoEfectuado="si";
	document.getElementById('mensaje').style.transition=".5s all";
	document.getElementById('mensaje').style.visibility="visible";
	document.getElementById('mensaje').style.opacity="1";
	document.getElementById('mensaje').style.webkitTransform="scale(1)";
	}

	if(puntosP1==localStorage.getItem('puntos')){
		document.getElementById('game-over').style.transition=".5s all";
		document.getElementById('game-over').style.visibility="visible";
		document.getElementById('game-over').style.opacity="1";
		document.getElementById('game-over').style.webkitTransform="scale(1)";
		document.getElementById('mensaje').style.opacity="0";
		document.getElementById('game-over').innerHTML ="GAME OVER - Gana el jugador 1";
	}

	if(puntosP2==localStorage.getItem('puntos')){
		document.getElementById('game-over').style.transition=".5s all";
		document.getElementById('game-over').style.visibility="visible";
		document.getElementById('game-over').style.opacity="1";
		document.getElementById('game-over').style.webkitTransform="scale(1)";
		document.getElementById('mensaje').style.opacity="0";
		document.getElementById('game-over').innerHTML ="GAME OVER - Gana el jugador 2";
	}

}//funcion disparo



function comenzar(){
	fbid1 = document.getElementById('fbid1').value;
	fbid2 = document.getElementById('fbid2').value;
	localStorage.setItem('fbid1',fbid1);
	localStorage.setItem('fbid2',fbid2);
	window.location.assign('escenario.html');
}

function reestablecer(){
	document.getElementById('mensaje').style.transition=".5s all";
	document.getElementById('mensaje').style.visibility="hidden";
	document.getElementById('mensaje').style.opacity="0";
	document.getElementById('mensaje').style.webkitTransform="scale(.4)";
	document.getElementById('vaquero-p1').src="v2.png";
	document.getElementById('vaquero-p2').src="v2.png";
    
  
     document.getElementById('p1').setAttribute("onclick","disparo('p1')")   
    document.getElementById('p2').setAttribute("onclick","disparo('p2')")
    
	conteo();
	disparoEfectuado="no";
    disparoPermitido="no";
}


function volverAJugar(){
    
 window.location.assign("menu.html");  
    
}

function conteo(){
    setTimeout(function(){
    
    document.getElementById('conteo').style.transition=".3s all";
    document.getElementById('conteo').style.visibility="visible";
    document.getElementById('conteo').style.opacity="1";
    document.getElementById('conteo').style.marginLeft="-50%";
    
    
 setTimeout(function(){
     
     document.getElementById('conteo').innerHTML="3";
     setTimeout(function(){
         document.getElementById('conteo').innerHTML="2";
         setTimeout(function(){
         document.getElementById('conteo').innerHTML="1";
             tiempoRandom = Math.floor((Math.random()*10 +1));
             tiempoRandom = tiempoRandom + "000";
             console.log(tiempoRandom);
             
             setTimeout(function(){
                 document.getElementById('conteo').innerHTML="YA!";
                 setTimeout(function(){
                     document.getElementById('conteo').style.transition=".3s all";
                     document.getElementById('conteo').style.visibility="hidden";
                     document.getElementById('conteo').style.opacity="0";
                     document.getElementById('conteo').style.marginLeft="-50%";
                     document.getElementById('conteo').innerHTML="";
                     disparoPermitido ="si";
                 },100)
             },tiempoRandom)
         },1000)
     },1000)
 },1000);
        
    },3000);
    
}

