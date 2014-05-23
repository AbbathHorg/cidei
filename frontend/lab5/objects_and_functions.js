/* objetos y funciones */

var myObject = new Object();

var myObject = {};

//Los Aray tambien son objetos
var looter = [2,54,67,4];

profile = {
	firstName : "Victor",
	lastName : "Hernandez",
	phone : "12345"
}

console.log(profile.firstName);
console.log(profile["lastName"]);

//iterando sobre un objeto{}
for(key in profile){
	console.log(profile[key]);
}

/* funciones */
function test(){
	console.log("Hola");
}

test();

//uso de funciones anonimas
chao = function(){
	console.log("Chao");	
}

chao();












