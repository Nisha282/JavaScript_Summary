// setInterval()

/* setInterval()
The setInterval() method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:

setInterval(function, milliseconds);
Its parameters are:

function - a function containing a block of code.
milliseconds - the time interval between the execution of the function.*/

// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);

// -------------------------------------------------------------------------

/* clearInterval()
 The program executes a block of code at every specified time interval. 
 If you want to stop this function call, then you can use the clearInterval() method.

The syntax of clearInterval() method is:

clearInterval(intervalID);*/


