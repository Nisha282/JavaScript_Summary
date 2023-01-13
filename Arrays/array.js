// ARRAYS

/* An array is a special variable, which can hold more than one value:

The Difference Between Arrays and Objects-
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

new Array()
JavaScript has a built-in array constructor new Array().

But you can safely use [] instead. */


const cars = ["Saab", "Volvo", "BMW"];
 let z =cars.length   // Returns the number of elements
cars.sort() 
console.log(cars)
console.log(z)
// console.log(s)


// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

// cars.length   // Returns the number of elements
// cars.sort() 
// =======================================================

// create an array, and then provide the elements:

const car = [];
car[0]= "Shwift";
car[1]= "Nano";
car[2]= "Duster";
console.log(car)

// ======================================================


// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

// Example
const c = new Array("Apple", "Orange", "Banana");
console.log(c)


// ===============================================================


// Accessing Array Elements
// You access an array element by referring to the index number:

const c1= ["chilly", "beans", "lays"];
let c2= c1[0];
console.log(c2)


// =====================================================


/* Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays. */

// Accessing the First Array Element
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
console.log(fruit)

// ======================================================

// Accessing the Last Array Element
// Example
const fu = ["Banana", "Orange", "Apple", "Mango"];
let fru = fruits[fruits.length - 1];
console.log(fru)

// ===============================================================

/* Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example*/
const fruits1 = ["Banana", "Orange", "Apple"];
 let d =fruits1.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruits1)


/* Array pop()
The pop() method removes the last element from an array:

Example*/
const frui = ["Grapes", "kiwi",  "Mango"];
 let remove =frui.pop();
 console.log(remove)


// ==========================================================

// The problem is that the JavaScript operator typeof returns "object":

const fruits2 = ["Apple", "grapes", "kiwi"];
let type = typeof fruits;
console.log(type)


// ====================================================

// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

let person = ["nisha" , "nish" , "nikki" ];
let p = person.toString()
console.log(p)

// =======================================================

/* The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator. */

let p1 = ["Nahh" , "naam" , "mishh"]
let p2 = p1.join(" * ")
console.log(p2)
// =================================================

/* The concat() method creates a new array by merging (concatenating) existing arrays.
*/
 
const girls = ["abc" , "def" , "ghi"];
const boys = ["jkl" , "mno" , "pqr"];
const f = ["stu" , "vwx"];
// const combo = girls.concat(boys);
const combo = girls.concat(boys , f);
console.log(combo)

// =============================================================

/*Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array. */

// splice -

const pe = ["Abcd" , "Cded" , "Efgh" , "Ghik"];
const v = pe.splice(2,0,"Lg" , "Km");
console.log(v)

const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
//  const va=fruit2.splice(2, 0, "Lemon", "Kiwi");
let va=fruit2.splice(2, 0);
 console.log(va)

// ===================================================

/* Reversing an Array
The reverse() method reverses the elements in an array.
*/

const vegies = ["chilli" , "tomato" , "potato"];
 let ve = vegies.sort((a, b)=>{return a - b})
 console.log(ve)

 let w =vegies.reverse(); 

 console.log(w)
//  =============================================================

// Math.min() , Math.max()

 /*  Array forEach()
The forEach() method calls a function (a callback function) once for each array element.
*/
const array1 = ['a' , 'b' , 'c'];

array1.forEach(element => console.log(element))

//================================================================

/* Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.*/

const array2 = [1,3,5,7];
const m = array2.map(x=> x*3)
console.log(m)
//=====================================================================

/* Array filter()
The filter() method creates a new array with array elements that pass a test.
*/

const letter = ['nokp' , 'nopeee' , 'niiii' , 'nhgthi'];
const r = letter.filter(letter => letter.length>5)
console.log(r)

// =============================================================

/* Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().
The reduce() method does not reduce the original array.
*/

const array3 = [3,5,7,9,2];
const i = 0; // i -> initialValue
const sum = array3.reduce((a ,c)=> a+c, i); // a -> accumulator , c -> currentValue
console.log(sum)

// =============================================

/* reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.
*/
const numbers = [45, 4, 9, 16, 25];
let sum1 = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum1)

// ===================================================================

/* Array every()
The every() method checks if all array values pass a test.

This example checks if all array values are larger than 18.*/

const number = [45, 4, 9, 16, 25];
let allOver18 = number.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;

}

console.log(allOver18)

// ====================================

/*  Array some()
The some() method checks if some array values pass a test.

Array indexOf()
The indexOf() method searches an array for an element value and returns its position.

Array lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Array find()
The find() method returns the value of the first array element that passes a test function.

Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

Array.from()
The Array.from() method returns an Array object from any object with a length property or any iterable object.

Array Keys()
The Array.keys() method returns an Array Iterator object with the keys of an array.

Array entries()
The entries() method returns an Array Iterator object with key/value pairs.


Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

*/