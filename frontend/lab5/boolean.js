/* Variables y elementos del tipo Booleano  */

var verdadero = true;
var falso = false;

/* Elementos de comparacion  */

/* igualdad (==)  */
console.log(1 == 1);
//correccion de tipos
console.log("1" == 1); //convierte de "1" a 1
console.log(1 == true);
console.log(0 == false);
console.log("" == 0); //convierte "" a 0    
console.log(0 == ""); //convierte "" a 0
console.log("    " == 0);

var x = {};
var y = x;

//Comparo los objetos
console.log("La comparacion de los objetos es: " + (x == y));


/* igualdad estricto (===)  */
console.log("1" === 1);
console.log("" === 0);

var w = {};
var z = w;

console.log("La comparacion de los objetos de maner estricta es: " + (w === z));

//comparacion no estricta de no igual (!=)
console.log("" != 0);

//Comparacion estricta de no igual (!=)
console.log("" !== 0);

/* Flujos logicos */
console.log("-----flujos logicos------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//operador del tipo OR
console.log("tabla basica del OR");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false ||false);









