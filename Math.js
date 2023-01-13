// Math 

/*The JavaScript Math object allows you to perform mathematical tasks on numbers.

Math Properties (Constants)
The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6).
Math.sign(x)     returns if x is negative, null or positive.
Math.pow(x, y)   returns the value of x to the power of y.
Math.abs(x)      returns the absolute (positive) value of x.
Math.sqrt(x)     returns the square root of x .
Math.sin(x)     returns the sine (a value between -1 and 1) of the angle x (given in radians).
Math.log(x)     returns the natural logarithm of x.
Math.log2(x)    returns the base 2 logarithm of x.
Math.log10(x)   returns the base 10 logarithm of x.


*/

let x = Math.round(4.6);
console.log(x)

// -----------------------------------------

 let y =Math.ceil(4.9);
 console.log(y)
//  ----------------------------------------

let z = Math.ceil(6.9);
console.log(z)

// ------------------------------------------

let t = Math.trunc(4.4);
console.log(t)
// -----------------------------------------

let s = Math.sign(4);
console.log(s)

// --------------------------------------------

let u = Math.pow(8, 2);
console.log(u)
// -----------------------------------------------

let v = Math.sqrt(64);
console.log(v)
// -----------------------------------------------

let o = Math.abs(-4.7);
console.log(o)

// ------------------------------------------------

/* Math.min() and Math.max()
Math.min() and Math.max() can be used to find the
 lowest or highest value in a list of arguments.*/

 let i = Math.min(0, 150, 30, 20, -8, -200);
 console.log(i)

 let j = Math.max(0, 150, 30, 20, -8, -200);
 console.log(j)

//  ================================================

let g = Math.log(1);
console.log(g)
// ---------------------

let h = Math.log10(1000);
console.log(h)

// -------------------------------

let k = Math.log2(8);
console.log(k)

