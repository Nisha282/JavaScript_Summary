// spread operator

/* The spread operator is a new addition to the features available in the JavaScript ES6 version.


Spread Operator
The spread operator ... is used to expand or spread an iterable or an array. 
*/

const arr = ['My' , 'name', 'is' ,'Nisha'];
console.log(arr);
console.log(...arr)

// ------------------------------------------------------------------


// Copy Array Using Spread Operator
// You can also use the spread syntax ... to copy the items into a single array.

const arr1 =['one', 'three'];
const arr2 =[...arr1 ,'four','five','six','seven']

console.log(arr2)
// --------------------------------------------------------------------

/* Clone Array Using Spread Operator
In JavaScript, objects are assigned by reference and not by values.*/

let ar1 = [1,3,5,7];
let ar2 = ar1; //both change in similar way

//copy using spread syntax
// let ar2 =[...ar1]

console.log(ar1);
console.log(ar2);

// append an item to the array
ar1.push(4);
console.log(ar1);
console.log(ar2);
// ---------------------------------------------------------------------------------


/* Spread Operator with Object
You can also use the spread operator with object literals.*/

const obj1 = { x:1,y:2};
const obj2 = {z:3};

// add members obj1 and obj2 to obj3

const obj3 = {...obj1 , ...obj2};
console.log(obj3)


// ==========================================================================================================================

/* Rest Parameter
When the spread operator is used as a parameter, it is known as the rest parameter.

You can also accept multiple arguments in a function call using the rest parameter. */

let func = function(...args){
    console.log(args)
}

func(3);
func(4,5,6);

/* Note: Using the rest parameter will pass the arguments as array elements.*/


/* You can also pass multiple arguments to a function using the spread operator. For example,*/

function sum(x,y,z){
    console.log(x+y+z);
}
const num1 = [1,2,4,6]
sum(...num1)

// If you pass multiple arguments using the spread operator, the function takes the required arguments and ignores the rest.

/* avaScript Destructuring
The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables.*/
// assigning object attributes to variables
const person = {
    names: 'Nisha',
    age: 22,
    gender: 'female'    
}

// destructuring assignment
// let { names, age, gender } = person;

// console.log(names);
// console.log(age); 
// console.log(gender); 

let { age, gender, names } = person;
console.log(names)


// ===========================================================================

/* Array Destructuring
You can also perform array destructuring in a similar way. For example,*/

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

/* Nested Destructuring Assignment
You can perform nested destructuring for array elements. For example,

// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three*/

// =======================================================================

/* Swapping Variables
In this example, two variables are swapped using the destructuring assignment syntax. */

// program to swap variables

let p = 4;
let q = 7;

// swapping variables
[p, q] = [q, p];

console.log(p); 
console.log(q); 
// ========================================
