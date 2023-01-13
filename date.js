// Date -

/*new Date()
new Date() creates a date object with the current date and time
JavaScript counts months from 0 to 11:

January = 0.
December = 11.

*/
const d = new Date()
console.log(d)

const d1 = new Date("2023-01-12")
console.log(d1)


/* Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/

/*Date Input
There are generally 3 types of JavaScript date input formats:

Type	               Example
ISO Date	    "2015-03-25" (The International Standard)
Short Date	    "03/25/2015"
Long Date	     "Mar 25 2015" or "25 Mar 2015"


// The toISOString() method converts a date to a string using the ISO standard . */
const d2 = new Date();
 let v =d2.toISOString();
 console.log(v)

//  =========================================

/* Parsing Dates
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.*/
let msec = Date.parse("March 21, 2012");
console.log(msec)
// ==========================

/* Date Get Methods
Method	              Description
getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)
*/

const d3 = new Date();
 let s =d3.getFullYear();
 console.log(s)

// -------------------------------------------------

const d4 = new Date();
 let t =d4.getDate();
 console.log(t)
//  -----------------------------------
const d5 = new Date();
let q = d5.getMonth();
console.log(q)

// ----------------------------------------

const d6 = new Date();
let y = d6.getHours();
console.log(y)
// ---------------------------------------

const d7 = new Date();
let x= d7.getMinutes();
console.log(x)
// -------------------------------------------------------

const d8 = new Date();
let z = d8.getSeconds();
console.log(z)
// -----------------------------------------------------------

const d9 = new Date();
let e = d9.getMilliseconds();
console.log(e)
// ----------------------------------

// getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).

const da = new Date();
let f = da.getDay();
console.log(f)

// ----------------------------------------

const da1 = new Date();
let g = da1.getTime();
console.log(g)

// -----------------------------------------

/* UTC Date Get Methods
Method               Same As	              Description
getUTCDate()	    getDate()	              Returns the UTC date
getUTCFullYear()	getFullYear()	          Returns the UTC year
getUTCMonth()	    getMonth()	              Returns the UTC month
getUTCDay()     	getDay()	              Returns the UTC day
getUTCHours()	    getHours()	              Returns the UTC hour
getUTCMinutes()	    getMinutes()	          Returns the UTC minutes
getUTCSeconds()	    getSeconds()	          Returns the UTC seconds
getUTCMilliseconds() getMilliseconds()	  Returns the UTC milliseconds
*/
