function sum(a, b){
	this.a = a;
	this.b = b;
}

sum.prototype = {
	constructor : sum,
	getA : function(){
		console.log("El numero a es: " + this.a);
	},
	getB : function(){
		console.log("El numero b es: " + this.b);
	},
	getResult : function(){		
		console.log("La suma de los numeros es: " + (this.a + this.b));		
	}
}