//  variables in js

//  variable - variables are used to store data values , it use the "var" keyword to declare variables .
// These are constant values and cannot be changed.
// declare a JavaScript variable with the var or the let keyword

var x = 5;
var y = 6;
var z = x + y;
console.log(z)

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
console.log({pi,person , answer})



// <!----------- TWO TYPES OF VARIABLES --------------------->




//  Global Variables − A global variable has global scope which means it can be defined anywhere
//  in your JavaScript code. 


// Local Variables − A local variable will be visible only within a function where it is defined.

/*The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.

Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block


The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.*/