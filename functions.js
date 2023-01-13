// functions 

/* Function is a "chunk "of code that you can use over and over again .
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
 return - When JavaScript reaches a return statement, the function will stop executing.
 parameter 
 argument 
 * what ever we write after return it will not execute .

 Function Invocation
The code inside the function will execute when "something" invokes (calls) the function-

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
*/

//  let x = fun(5,7)
function fun(p1,p2){
    return p1*p2
}
var p3= fun(6,6)
console.log(p3)
// console.log(x)


/* ARROW FUNCTION 
Arrow function provides us a more accurate way of writing the functions in JavaScript. 
They allow us to write smaller function syntax. 
The context within the arrow functions is lexically or statically scoped. 
Arrow functions do not include any prototype property, and cannot be used with the new keyword.

arrow functions are also called Fat arrow functions. These were introduced in ES6. 
Their concise syntax and handling of the this keyword has made JavaScript arrow functions
 an ES6 favourite among developers.

*/

// let x = (x,y)=> x*y

// arrow function with no argument
let names = ()=> console.log("my name is nisha")
names();

// arrow function with one argumnent 
let names1 = x=> console.log(x);
names1("nish")

// arrow function as an expression 
let age = 22;

let welcome= (age<18) ?
()=> console.log("Baby") :
()=> console.log("Adult");

welcome()

// multiple arrow function 
let sum =(a,b)=>{
    let result = a+b;
    return result ;
}
let res = sum(8,8);
console.log(res)

