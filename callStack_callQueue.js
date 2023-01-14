// EventLoop()

/* Eventloop is a loop b/w callstack and callback queue which continously monitor the call stack is empty or not 
and manage the execution of code.*/

console.log("Before delay");
  
function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}
  
delayBySeconds(5);
  
// Executes after delay of 5 seconds
console.log("After delay");




// callStack()

/* call stack is based on LIFO. 
it maintain the order of execution context , it means the execution context came last will execute first.
it is also known as execution context stack , program stack , control stack.
*/

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

console.log(x)

// ====================================================

/* call back queue()-

call back queue based on FIFO.
callback queue is a queue , where all the response of web api;s listen , 
web api's are not a part of js V8 engine , this events are store in 
callback queue and wait for there chance to execute in callstack through eventloop 
when this events push in call stack they automatically vanish from callback queue.
it is also known as task queue .

*/

console.log('a');
setTimeout(() => console.log('b'), 0);
new Promise((resolve, reject) => {
  resolve();
})
.then(() => {
  console.log('c');
});
console.log('d');

// ==============================================================

/* micro task queue-



*/


