let name = prompt("Name");
let age = parseInt(prompt("Age: "));
let gender = prompt("Gender: ");
function Person(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.greet = function greeting(){console.log("Hey, "+this.name);}
	this.ageReveal = function ageReaveling(){console.log("You are "+this.age+" years old.");}
	this.driving = function canDrive(){
		if(this.age > 16){console.log("You are eligible to drive.");}
		else{console.log("You are not eligible to drive.");}
	}
}

const person = new Person(name,age,gender);
person.name;
person.age;
person.gender;
person.greet();
person.ageReveal();
person.driving();
