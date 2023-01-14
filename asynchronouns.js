// Deep and Shallow copy --


/*shallow copy and deep copy. To copy an object in JavaScript, you have three options:

Use the spread (...) syntax
Use the Object.assign() method
Use the JSON.stringify() and JSON.parse() methods */

// shallow copy 

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);



/*In this example:

First, create a new object named person.
Second, clone the person object using the Object.assign() method.
Third, change the first name and address information of the copiedPerson object.*/

// console.log(person)

/* 
The reason is that the address is reference value while the first name is a primitive value. 
Both person and copiedPerson references different objects but these objects reference the same address objects.*/

// ==========================================================================


// Deep Copy Example-

/* The following snippet replaces the Object.assign() method by the JSON methods to carry a deep copy the person object. */

let person1 = {
    firstName: 'Nisha',
    lastName: 'Sahu',
    address: {
        street: ' 2nd street',
        city: 'Rp',
        state: 'CG',
        country: 'India'
    }
};


let copiedPerso = JSON.parse(JSON.stringify(person));

copiedPerso.firstName = 'Jane'; // disconnected

copiedPerso.address.street = 'Amphitheatre Parkway';
copiedPerso.address.city = 'Mountain View';

console.log(person1);

/*In this example, all values in the copiedPerson object are disconnected from the original person object. 
In this tutorial, you have learned how to copy objects in JavaScript using either shallow or deep copy. */

