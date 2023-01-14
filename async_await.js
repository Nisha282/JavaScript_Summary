// async And await -----

// async-----

/*  async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

The syntax of async function is:
async function name(parameter1, parameter2, ...paramaterN) {
    // statements
}

Here,

name - name of the function .
parameters - parameters that are passed to the function .
*/


// async function example 

async function f(){
    console.log('Async function');
    return Promise.resolve(1);
}
f();

// ------------------------------------------------------------------

//function returns a promise, you can use the chaining method then() like this:

async function fin(){
    console.log('Asynchornous')
    return Promise.resolve(1)
}

fin().then(function(result){
    console.log(result)
})


// -------------------------------------------------------------------

// await keyword

/* The await keyword is used inside the async function to wait for the asynchronous operation.

The syntax to use await is:
let result = await promise;
*/


// a promise 

let promise = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('Promise resolved')
    } , 4000)
});

// async function

async function asynFunc(){
    // wait uthil promise resolves
    let result = await promise;
    console.log(result);
    console.log('hello')
}

// calling the async function
asynFunc();

// --------------------------------------------------------------

/* Error Handling
While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. For example,

asyncFunc().catch(
    // catch error and do something
)*/

//a promise 
let pro= new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('Promise Resolved')} , 3000);
})

// async function 
async function aF(){

try{
    let res = await pro;
    console.log(res)
    
}catch(error){
console.log(error)
}
}