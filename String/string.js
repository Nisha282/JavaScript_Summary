// STRINGS

/*  strings are for storing and manipulating text.
string, use the built-in length property

Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
String splice()


Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

let ans = "It's alright";
let length = ans.length
console.log(length)
let ans2 = "He is called 'NISHA'";
let ans3 = 'He is called "NISH"';

console.log({ ans , ans2, ans3})
// ======================================================================================

/*
String slice()

slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: start position, and end position (end not included).  */

let names = "nisha, neha , nikki";
// let nam1 = names.slice(7,10 );
let nam1 = names.slice(7 )
console.log(nam1)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

// ================================================================================

/*  substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().*/

let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 18);
console.log(part1)

// ==========================================================================

/* String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
*/

let str1 = "Apple, Banana, Kiwi";
let part2 = str.substr(7);
console.log(part2)

// ===============================================================================
/* 
replace()

The replace() method replaces a specified value with another value in a string.
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match
*/
 let person = "Please visit my cafe"
 let newPerson = person.replace("visit" , "come")
 console.log(newPerson)

//  ======================================================================

/* ReplaceAll()
The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
*/
// let persons= "Please visit my cafe"
// let newPersons = person.replaceAll()
// console.log(newPersons)

// ================================================================

/*A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase(): 

*/

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log({text2 , text3})
// ==============================================================

 /*String concat()
concat() joins two or more strings
 
 */

let fname = "Nisha";
let lname = "Sahu";
let x = fname.concat(" " , lname);
console.log(x)
// ===============================================================

/*  String trim()
The trim() method removes whitespace from both sides of a string.

*/
let fruits = "            mango"
let fruit = "Apple      "
let y = fruits.trim();
let z = fruit.trim()
console.log({y,z})

// ------------------------------------------------------

/* trimStart()
ECMAScript 2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

trimEnd()
ECMAScript 2019 added the String method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

*/

let fun = "          hello world!           "
let fun1 = fun.trimStart();
let funs= fun.trimEnd()
console.log(fun1)
console.log(funs)

// ==============================================================


/* String Padding
ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding
 at the beginning and at the end of a string.

 String padStart()
The padStart() method pads a string with another string.

String padEnd()
The padEnd() method pads a string with another string.
 
 */
let numb = 5;
let tex = numb.toString();
let padding = tex.padStart(4,"z")
console.log(padding)

let text4 = "5";
let padded = text4.padEnd(4,"x");
console.log(padded)

// ====================================================

/* Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]

String charAt()
The charAt() method returns the character at a specified index (position) in a string.

charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string.


ECMAScript 5 (2009) allows property access [ ] on strings.
Property access might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/

let t = "HELLO WORLD";
let char = t.charAt(0);
console.log(char)

let te = "HELLO WORLD";
let chared = te.charCodeAt(0);
console.log(chared)


let t1 = "HELLO WORLD";
let cha = t1[1];
console.log(cha)

// ======================================================

/* String split()
A string can be converted to an array with the split() method .

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/


/* splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
To access part of an array without modifying it, see slice().
*/

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);