//   Numbers

/*  Number Methods

NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number. 

These number methods can be used on all JavaScript numbers:

Method      	Description
toString()	      Returns a number as a string
toExponential()	  Returns a number written in exponential notation
toFixed()	      Returns a number written with a number of decimals
toPrecision()	  Returns a number written with a specified length
ValueOf()	      Returns a number as a number



Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	         Description
Number()	    Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns a whole number


Number Object Methods
These object methods belong to the Number object:

Method	                 Description
Number.isInteger()	    Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	    Converts a string to a number
Number.parseInt()	    Converts a string to a whole number



JavaScript Number Properties
Property	             Description
EPSILON	              The difference between 1 and the smallest JS number.
MAX_VALUE	          The largest number possible in JavaScript
MIN_VALUE	          The smallest number possible in JavaScript
MAX_SAFE_INTEGER	 The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	 The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	 Infinity (returned on overflow)
NEGATIVE_INFINITY	 Negative infinity (returned on overflow)
NaN	                 A "Not-a-Number" value
*/

let x = Number.EPSILON;
console.log(x)

let y = Number.MAX_VALUE;
console.log(y)

let z = Number.MIN_SAFE_INTEGER;
console.log(z)