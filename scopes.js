// Scope 

/* Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

Global Scope
Local Scope*/
// ======================================================================================

/*Global Scope
A variable declared at the top of a program or outside of a function is considered a global scope variable.*/

let a = 'hello';
function greet(){
    console.log(a)
}
greet();

// =============================================================================================

// The value of a global variable can be changed inside a function. For example,

let x = 'Nisha';

function person(){
    x =3;
}

// before the function call
console.log(x);

// after the function call
person();
console.log(x)

// =========================================================

/*a variable can also be used without declaring it. If a variable is used without declaring it, 
that variable automatically becomes a global variable.*/

function h(){
    y= 'hey'
}

h();

console.log(y)
// ==========================================================================

/*Local Scope
A variable can also have a local scope, i.e it can only be accessed within a function. */

// program showing local scope of a variable

let z = 'hello';

function local(){
    let w = 'world';
    console.log(z+w);
}

local();

// console.log(z+w); //error

// ======================================================================

/*let is Block Scoped
The let keyword is block-scoped (variable can be accessed only in the immediate block). */


// program showing block-scoped concept 
// global variabl

let s = "Nish";

function greett(){

    //   local variable
    let t= "Sahu";

    console.log(s + ' ' + t);

    if(t == 'Sahu'){

        //block-scoped variable
        let c = 'nish';

        console.log(s + ' ' + t + ' ' + c);
    }

    // variable c cannot be accessed here 
    // console.log(s + ' ' + t + ' ' + c);
}

greett();


/*a is a global variable. It can be accessed anywhere in the program.
b is a local variable. It can be accessed only inside the function greet.
c is a block-scoped variable. It can be accessed only inside the if statement block. */

// =====================================================================================

