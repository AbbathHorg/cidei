/* Programacion orientada a objetos */

function Person(firstName, lastName, profession, genre, age, city){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;
	this.genre = genre;
	this.age = age;
	this.city = city;
	this.studies = [];
}

Person.prototype = {
	constructor : Person,
	getFirstName : function(){
		console.log("El primer nombre de la Persona es: " + this.firstName);
	},
	getLastName : function(){
		console.log("El apellido de la Persona es: " + this.lastName);
	},
	getProfession : function(){
		console.log("El profesion de la Persona es: " + this.profession);
	},
	getGenre : function(){
		console.log("El genero de la Persona es: " + this.genre);
	},
	getAge : function(){
		console.log("La edad de la Persona es: " + this.age);
	},
	getCity : function(){
		console.log("Donde vive la persona es: " + this.city);
	},
	getStudies : function(){
		var i = 0;
		for(i=0;i<=this.studies.length;i++){
			console.log("Tiene estudios en: " + this.studies[i]);
		}
	}
}
