/* Arrays */
var myArray = new Array();

var myArray = [];

myArray = [1,2,4,5,7,4,3,6,64,3];

console.log(myArray[0]);
//con push agrego un elemento al final
myArray.push(10);

console.log(myArray);

myArray.push(1435);

console.log(myArray);

myArray.push("Hola cidei");

console.log(myArray);

//pop alimina el ultimo elemento del array

myArray.pop();

console.log(myArray);

//reverse invierte el orden del Array

myArray.reverse();

console.log(myArray);

//shift elimina el primer elemento

myArray.shift();

console.log(myArray);

//sort organiza el array

myArray.sort();

console.log(myArray);

var mySecondArray = ["Hola Mundo","String","cidei"];

console.log(mySecondArray);

mySecondArray.sort();

console.log(mySecondArray);

//splice

var tasks = ["Hola mundo","Hola cidei","Chao"];

console.log(tasks);

tasks.splice(1,1, "Chao cidei","Adios","fuera");

console.log(tasks);




