/**
 * Instructions:
 * 1. Write a sumAsync() that accepts two numbers a and b and returns a promise. It calculates the sum asynchronously. Make sure to log message at different points to understand the flow of code. Since a promise is resolved asynchronously, process.nextTick() is not required when rejecting with an error.
 * 2. Call sumAsync() with correct and erroneous inputs, and use the then() and catch() methods to act upon the returned promise and log the results using console.log and console.error respectively.
 * 3. Also try using the 2 argument version of then() which accepts both resolve and reject handlers - This is however not recommended, as it will lead to an unhandled reject for promise returned by then() when resolve handler of then() throws an error (see next example for understanding this)
 * 
 */

/**
 * Your code goes in here...
 */






// this executes first since a promise is always resolved or rejected asynchronously
console.log( '[3] end of script' );