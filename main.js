console.log("hola");

function displayUno(){
	var timeShow= document.querySelector(".parrafo__primer")
	var textoCentro = timeShow;
	textoCentro.innerText = "¡Hola! Gracias por Visitarnos!"
}
var timer1 = setTimeout(displayUno,1000)

function displayDos(){
	var timerDos= document.querySelector(".parrafo__segundo")
	var textoCentro = timerDos;
	textoCentro.innerText = "Soy Benjick de Muktek y puedes llamarme Ben, estas hablando con un bot interactivo altamente inteligente."
}
var timer2 = setTimeout(displayDos,2000);


function displayTres(){
	var timerDos= document.querySelector(".parrafo__tercero");
	var textoCentro = timerDos;
	textoCentro.innerText = "¿Que te parece si hablamos de  nuestros intereses?  yo soy fan de las motos y los libros de divulgación cientifica, pero espera, ¿como te llamas?"
}
var timer3 = setTimeout(displayTres,3000);

function displayCuatro(){
	var timerDos= document.querySelector(".primer__input");
	var textoCentro = timerDos
	textoCentro.style.display=""
	textoCentro.style.margin="margin: 20px, 0;	"
	textoCentro.placeholder = "Por favor pon aqui tu nombre"
	//console.log(textoCentro.value.length);
}
var timer4 = setTimeout(displayCuatro,4000);


//AQUI  EMPIEZA LA ULTIMA PARTE
var eval= document.querySelector(".primer__input")
var timeout = null;
//eval.addEventListener('keypress', function (e) {

eval.onkeyup = (function (e) {
	clearTimeout(timeout);
	timeout = setTimeout(function () {
    
		var longitudNombre =""    //aqui sabremos si el nombre es largo
	    var key = e.keyCode;   //aqui le decimos que el evento es un keycode
	    if (key === 13) { 					//aqui igualamos la key al valor 13 de enter
	    	var checador= true				//evaluacion
	    }
	     if (checador= true) {				//se inicia otro if si es true
	    	evaluarNombre()
	    	//setTimeout(evaluarNombre,3000)
	    	displayAnswer()	
	    }

		    function evaluarNombre(){
		    	var timerDosBis= document.querySelector(".primer__input");
		    	if (timerDosBis.value.length>6) {
		    		longitudNombre="long"
		    	}else if (timerDosBis.value.length<6) {
		    		longitudNombre="short"
		    	}
		    }
	    //setTimeout(evaluarNombre,3000)
		    function displayAnswer(){
				var resp= document.querySelector(".parrafo__cuarto");
				var textoCentro=resp

				var respuestaParrQuinto = document.querySelector(".parrafo__quinto");
				var textoCentroBis=respuestaParrQuinto
				
				var timerDosDoble= document.querySelector(".primer__input");
				var textoCentroDoble = timerDosDoble
				console.log(textoCentroDoble.value);

				if (longitudNombre==="long") {
				textoCentro.innerText =	"That’s a nice long name!"
				textoCentroBis.innerText ="Nice to met you " + textoCentroDoble.value	
				}else if (longitudNombre==="short") {
					textoCentro.innerText =	"That’s a nice short name!"
					textoCentroBis.innerText ="Nice to met you " + textoCentroDoble.value +"!"
				}
				
			}
	}, 2500);
	//setTimeout(displayAnswer,3000)	

});

































