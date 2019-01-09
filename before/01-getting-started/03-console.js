/**
 * We explore util and console modules here. The console module internally makes use of the util module. The console module is almost never used directly - the module exports a global object called "console" which is what is almost always used - so we don't require to import the console module.
 * 
 * Instructions:
 * 1. Require the util module (NOTE: Henceforth the "require" step will be implied)
 * 
 * 2.1 Test console.log to print message to process.stdout passing
 *      2.1.1 Multiple strings
 *      2.1.2 A C-style formatted string using %s (string), %d (number) and %j (for object)
 * 2.2 You can also get a formatted string (without logging) using util.format() - internally console.log() makes use of util.format()
 * 
 * 3. Test console.error to print some message to process.stderr
 * 
 * 4.1 Test console.log passing a single object
 * 4.2 Now format the object using util.inspect() and then print
 * 
 * 5.1 Test console.dir passing a single object and a second object { depth: 1 } - experiment with various values of depth
 * 5.2 Do the same using util.inspect()
 * 
 * 6. Time the foo() function using console.time() and console.timeEnd() markers - each needs to be passed a string representing name of the timer (should be same for both).
 * 
 * 7. Use console.trace within foo() to print out a stack trace
 */

let guestCredentials = {
    duration: '30 minutes',
    wifi: {
        username: 'guest',
        password: 'guestw!f!'
    }
};

let obj = {
    a: 1,
    b: {
        b_1: 2.1,
        b_2: {
            b_2_1: 2.21,
            b_2_2: 2.22
        }
    },
    c: [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 29
        }
    ]
};

function foo() {
    for( let i = 0; i < 100000000; i++ ) {
        // do nothing
    }
}

foo();