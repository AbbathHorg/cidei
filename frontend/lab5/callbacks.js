/* callbacks en JS */
/*
Un callback es una funcion, que por parametro se le pasa otra funcion y la funcion que lo recibe espera a que se ejecute la funcion
*/
function algo(miCallback){
	miCallback();
}

algo(function(){
	console.log("Esto es un callback");
});

function otroCallback(miCallback){
	miCallback('Un argumento');
}

otroCallback(function(unValor){
	console.log('Algo se imprime y es: '+ unValor);
});

/* multiples callbacks llamados en determinados casos */

function algoOcurre(callback1, callback2, callback3){
	//pasa la primera vez
	callback1('Primer paso');

	//siguiente callback
	callback2('Segundo Paso');

	//y por ultimo
	callback3('ultimo y tercer paso');
}

//Llamado y uso de los multiples callbacks para 'algoOcurre' 
algoOcurre(
	function(paso1){
		console.log(paso1);
	},

	function(paso2){
		console.log(paso2);
	},

	function(paso3){
		console.log(paso3);
	}
);