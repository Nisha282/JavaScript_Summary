// set Timeout()

/* The setTimeout() method executes a block of code after the specified time. 
The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is:
setTimeout(function, milliseconds);

Its parameters are:
function - a function containing a block of code
milliseconds - the time after which the function is executed
*/

// program to display a text using setTimeout method 

function greet(){
    console.log('hello ...')
}

setTimeout(greet , 3000);
console.log('This is the 1st line of our code')
// ----------------------------------------------

// The setTimeout() method returns the interval id.

function p(){
    console.log('heyyy')
}

let intervalId = setTimeout(p , 3000);
    console.log('Id:' + intervalId);

    // -------------------------------------------


// program to display time every 3 seconds
/*function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);

     // calling the function
showTime();

     
}*/

// -------------------------------------------------


/* clearTimeout()
As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

The syntax of clearTimeout() method is:

clearTimeout(intervalID);
*/

// program to stop the setTimeout() method


let count =0;

// function creation 

function increaseCount(){

    // increasing the count by 1
    count +=1;
    console.log(count)
}

let id = setTimeout(increaseCount,3000)

// clearTimeout
clearTimeout(id);
console.log('setTimeout is stopped.');

