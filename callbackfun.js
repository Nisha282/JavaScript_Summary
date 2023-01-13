// call back function -

/*  callback function is to pass it as a parameter to another function, 
and then to call it back right after something has happened or some task is completed.

callback hell
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.
*/


/* What is callback vs promise?

A callback function is passed as an argument to another function whereas
 Promise is something that is achieved or completed in the future*/


//  function 
function fun(){
    console.log("Nisha ")
}
fun();


// --------------------------------------------------

// function 

function greet(name , callback){
    console.log('Hi' + " " + name)
    callback();
}

// call function 
function callMe(){
    console.log('I am a call back function')
}

// passing function as a argument 

greet('nehu' , callMe)

// ================================================

// program with setTimeout()

function person(){
    console.log("hello");
}

function sayName(names){
    console.log('Hello' + ' ' + names)
}

// calling the function 
setTimeout(person , 2000); //2000 miliseconf (2 second)
sayName('Ruhi')
// ---------------------------------------------


// Using a Callback Function
// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

// ---------------------------------

// CallBack hell -

// getArticles(20, (user) => {
//     console.log("Fetch articles", user);
//     getUserData(user.username, (name) => {
//       console.log(name);
//       getAddress(name, (item) => {
//         console.log(item);
//         // this goes on and on...
//       }
//   })
  