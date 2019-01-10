console.log( 'log method' );

var john = {
    name: 'John',
    age: 32,
    contacts: [
        { value: 'john.doe@example.com', type: 'email' },
        { value: 'john.doe@gmail.com', type: 'email' }
    ]
};

console.log( john );
console.dir( john ); // if depth is not passed, console.dir() behaves like console.log()
console.dir( john, { depth: 0 } );
console.dir( john, { depth: 1 } );
console.dir( john, { depth: 2 } );

// Explore:
// console.time(), console.timeEnd()