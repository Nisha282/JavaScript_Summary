//  scopeChain()

/*The scope chain is created at function invocation and 
is based on where variables and/or blocks of code are written (lexical environment). 

What is meant by the scope chain?
Scope Chain - A stack of currently accessible scopes, from the most immediate context to the global context.
Global Scope - A globally scoped variable can be accessed anywhere in the program.
Local or Function Scope - A locally scoped variable can only be accessed in the function where it was declared.


*/

let foo = 'foo';
function bar() {
  let baz = 'baz';
  // Prints 'baz'
  console.log(baz);
  // Prints 'foo'
  console.log(foo);
  number = 42;
  console.log(number);  // Prints 42
}
bar();