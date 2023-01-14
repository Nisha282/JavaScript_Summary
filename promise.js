//  Promise -

/*A promise is a good way to handle asynchronous operations. 
It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.
Pending - Not awaited and hence has not completed.
Fulfilled - promise completed successfully.
Rejected - when promise failed.
*/

/* JavaScript Promise Methods
There are various methods available to the Promise object.

Method	                    Description
all(iterable)	          Waits for all promises to be resolved or any one to be rejected
allSettled(iterable)	  Waits until all promises are either resolved or rejected
any(iterable)	          Returns the promise value as soon as any one of the promises is fulfilled
race(iterable)	          Wait until any of the promises is resolved or rejected
reject(reason)	          Returns a new Promise object that is rejected for the given reason
resolve(value)	          Returns a new Promise object that is resolved with the given value
catch()	                  Appends the rejection handler callback
then()	                  Appends the resolved handler callback
finally()	              Appends a handler to the promise*/


// create promise -

let promise = new Promise(function(resolve , reject){
    // do something 
})

/* The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.*/

// ---------------------------------------------------------------------------------------------------

// Program with a Promise-

const count = true;
// const count = false;

let countValue = new Promise(function (resolve , reject){
    if(count){
        resolve("There is a count value.");

    }else {
        reject("There is no count value");
    }
});
console.log(countValue);
// ------------------------------------------------------------------

/*  A Promise object is created that takes two functions: resolve() and reject(). 
resolve() is used if the process is successful and reject() is used when an error occurs in the promise.

The promise is resolved if the value of count is true.

fulfill ---> .then(onFulfillment)
reject ---> .catch(onRejection)

*/


/* Promise Chaining
Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

You can perform an operation after a promise is resolved using methods then(), catch() and finally().

JavaScript then() method

The then() method is used with the callback when the promise is successfully fulfilled or resolved.

The syntax of then() method is:

promiseObject.then(onFulfilled, onRejected);
*/

// chaining the promise with then()

// return a peomise 

let person = new Promise(function(resolve , reject){
    resolve("Promise resolved")
});

// executes when promise is resolved successfully

person.then(function success(result){
    console.log(result)
})

.then(function success1(){
    console.log("You can call multiple functions this way.")
})

// ---------------------------------------------------------------------------

/* catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs.*/

// returns a promise 
let cV= new Promise(function(resolve , reject){
    reject('Promise reject')
})

// execute when promise is resolved successfully
cV.then(function sV(result){
    console.log(result);
})

// execute if there is an error 

.catch(function errorValue(result){
    console.log(result)
})

// ------------------------------------------------------------------


/* Promise Versus Callback
Promises are similar to callback functions in a sense that they both can be used to handle asynchronous tasks.

JavaScript callback functions can also be used to perform synchronous tasks.*/

/*
api().then(function(result){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
    //do work
}).catch(function(error){
    //handle any error that may occur before this point
});

*/

/* finally() method
You can also use the finally() method with promises.
 The finally() method gets executed when the promise is either r
 esolved successfully or rejected.*/


//  return a promise 
let conV = new Promise(function(resolve , reject){
    resolve('Promise resolved');
});

// add other blocks of code 

conV.finally(
    function greet(){
        console.log('This code is executed.')
    }
)
