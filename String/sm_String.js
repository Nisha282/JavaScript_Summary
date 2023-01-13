
// JavaScript Search Methods

/* Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()


The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

/* 
String indexOf()
The indexOf() method returns the index of (position of) the first occurrence of a string in a string .
*/

let str = "Please locate where 'locate' occurs!";
 let x =str.indexOf("locate");
 console.log(x)

// ==========================================================

/* String lastIndexOf()
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
*/

let text = "Please locate where 'locate' occurs!";
 let y= text.lastIndexOf("locate");
console.log(y)

// ============================================================

/*  String search()
The search() method searches a string for a string (or a regular expression) and returns the position of the match
*/

let t = "my name is nisha sahu" ;
let z = t.search("nisha")
console.log(z)

// ===============================================

/* String match()
The match() method returns an array containing the results of matching 
a string against a string (or a regular expression).
*/

let fun = "i am a lazy person";
let s = fun.match("a");
// let s = fun.match(/a/g);
console.log(s)

// =============================================================

/* String matchAll()
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

Notes
matchAll() is an ES2020 feature.

matchAll() does not work in Internet Explorer.
*/
//  let te =  "I love cats. Cats are very easy to love. Cats are very popular."
//  const iterator= te.matchAll(/Cats/gi);
//  console.log(iterator)

//  ====================================================

/* String includes()
The includes() method returns true if a string contains a specified value.

Otherwise it returns false.
includes() is case sensitive.

includes() is an ES6 feature.


*/
let tex = "Hello world, welcome to the universe.";
//  let r=tex.includes("world");
 let r=tex.includes("in");
 console.log(r)

//  ==================================================

/* String startsWith()
The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false
*/
let text1= "Hello world, welcome to the universe.";
 let e =text1.startsWith("Hello");
 console.log(e)

//  ===========================================

/*String endsWith()
The endsWith() method returns true if a string ends with a specified value.
Otherwise it returns false .


*/
let tt = "John Doe";
let v =tt.endsWith("Doe");
console.log(v)

// =========================================================
/* What is string templates in JavaScript?
Template literals are literals delimited with backtick ( ` ) characters, 
allowing for multi-line strings, string interpolation with embedded expressions, 
and special constructs called tagged templates.
*/