function Vector(){
	this.lista = [];
}

Vector.prototype = {
	getSuma : function(){
		var i = 0;
		var suma = 0;
		for(i;i<this.lista.length;i++){
			suma = suma + this.lista[i];
			console.log(this.lista[i]);
		}
		console.log("La suma del vector es: " + suma);
	},
	getMultiplicacion : function(){
		var i = 0;
		var multi = 1;
		for(i;i<this.lista.length;i++){
			multi = multi * this.lista[i];
		}
		console.log("La multiplicacion del vector es: " + multi);
	},
}