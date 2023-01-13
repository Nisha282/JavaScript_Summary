//  Promise -

/*A promise is a good way to handle asynchronous operations. 
It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.
Pending - Not awaited and hence has not completed.
Fulfilled - promise completed successfully.
Rejected - when promise failed.
*/


// create promise -

let promise = new Promise(function(resolve , reject){
    // do something 
})

/* The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.*/

// ---------------------------------------------------------------------------------------------------

// Program with a Promise-

