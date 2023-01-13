// Closures-

/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).


What is the difference between lexical scope and closure in JavaScript?
A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables — a scope chain.
 Closures in Javascript are created along with the function. 
 Lexical scoping is the environment that holds the variables of the current scope as well as the outer scope.
*/
// Lexical scoping Example -

function fun (){
    var name = "Nisha"; //name is a local variable.

    function displayName(){
        console.log(name)  
        // displayName() is the inner function , a closure use variable declared in the parent function 
    }
    displayName()
}
fun()

// --------------------------------------------------------------

/*  A closure is the combination of a function and the lexical environment within which that function
 was declared. This environment consists of any local variables that were in-scope at the time the closure was created. */

// Closure example or code -


function fun() {
    const name = 'Nishhh';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = fun();
  myFunc();

//   ------------------------------------------------
