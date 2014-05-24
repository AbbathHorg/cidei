function Animal(name, genre, age, species, numberzoo, zooname){
	this.name = name;
	this.genre = genre;
	this.age = age;
	this.species = species;
	this.numberzoo = numberzoo;
	this.zooname = zooname;
}

Animal.prototype = {
	constructor : Animal,
	getName : function(){
		console.log("El nombre del animal es: " + this.name);
	},
	getGenre : function(){
		console.log("El genero del animal es: " + this.genre);
	},
	getAge : function(){
		console.log("La edad del animal es: " + this.age);
	},
	getSpecies : function(){
		console.log("La especie del animal es: " + this.species);
	},
	getNumberzoo : function(){
		console.log("El numero del zoologico es: " + this.numberzoo);
	},
	getZooname : function(){
		console.log("El nombre del zoologico es: " + this.zooname);	
	}
}