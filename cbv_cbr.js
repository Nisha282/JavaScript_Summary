
// call by value -

   // By value (primitives)
   var a = 5;
   var b;
   b = a;
   a = 3;
   console.log(a);
   console.log(b);

//    ==================================================================

    //  call by reference-
    
    // By reference (all objects (including functions))
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome my home';
    console.log(c);
    console.log(d);