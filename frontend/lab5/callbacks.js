/* callbacks en JS */
/*
Un callback es una funcion, que por parametro se le pasa otra funcion y la funcion que lo recibe espera a que se ejecute la funcion
*/
function algo(miCallback){
	miCallback();
}

algo(function()){
	console.log("Esto es un callback");
}

function otroCallback(miCallback){
	miCallback('Un argumento');
});

otroCallback(function(unValor)){
	console.log('Algo se imprime y es: '+ unValor);
});