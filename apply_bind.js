// apply()

/*The apply() method calls the specified function with a given this value, 
and arguments provided as an array (or an array-like object).*/


const num = [4,3,7,6,9];

const max = Math.max.apply(null , num);
console.log(max);

const min = Math.min.apply(null , num);
console.log(min)

// ====================================================================================

// Bind()

/*The bind method creates a new function and sets the this keyword to the specified object.

Syntax:
function.bind(thisArg, optionalArguments) */

var person1 = {firstName: 'Nisha', lastName: 'Sahu'};
var person2 = {firstName: 'Nishh', lastName: 'Saha'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloNisha = say.bind(person1);
var sayHelloNishh = say.bind(person2);

sayHelloNisha(); 
sayHelloNishh(); 

// ===================================================================

// call()

// The call() method calls the function with a given this value and arguments provided individually.

var person4 = {
    firstName: 'Nehu', 
    lastName: 'Saaah'};
var person3 = {
    firstName: 'Nikk',
    lastName: 'Soni'};

function saying(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

saying.call(person4, 'Hey'); 
saying.call(person3, 'Hey'); 

// --------------------------------------------------------------------