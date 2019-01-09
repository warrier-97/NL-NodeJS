# Reference for various topics

## Popular ways to write asynchronous functions
- Accepting callback function(s)
- Using publish-subscribe pattern, i.e. emitting events from "publishers" (i.e. asynchronous functions) and having subscribers set up handlers for these events - Node has an implementation of this called Event Emitter: its advantage over callbacks is that multiple handlers can be set.
- Returning a promise - ES2015+
- Using async await construct - ES2016+
- Using Observables (eg. rxjs library) - This is used however for streams of events (called observables)
- Using third-party node modules like async.

### Error-first callbacks in Node
Node callbacks follow the "error-first" pattern. The error object is the first argument passed to the callback when it gets called. This forces the developer to handle error (since in JS trailing arguments passed may simply not have corresponding formal parameters in the callback function definition). The callback(s) themselves are usually passed as the last argument(s) to the asynchronous method.

__Note__: A function that takes a callback need not always execute asynchronously (although it most likely will)

### Promises
Promises were introduced in ES2015 (ES6) - they are also called "thenables". A Promise object represents the future result of an asynchronous operation. A promise can be in one of three states - pending, fulfilled (aka resolved) or rejected. A promise is said to be settled if it is either fulfilled or rejected. Each of these represents the state of an expected event of interest.  

Promises simplify code involving multiple asynchronous operation by
1. Avoiding nesting of callbacks (referred to as callback hell/Christmas tree problem)
2. Supporting execution of resolve/reject handlers even when corresponding event has completed in the past
3. Supporting multiple resolve/reject handlers
4. Supporting chaining of method calls
5. Having constructs for synchronizing multiple asynchronous operations

The Promise constructor is passed a function that gets resolve() and reject() functions. The function is executed synchronously. We call resolve() to fulfil a promise and reject() to reject it. The arguments passed to resolve() and reject() are passed to then() and catch() handlers.  

The Promise API basically tries to mimic the try..catch construct - the then() and catch() style handling of promise is inspired by the try..catch construct for synchronous code.

__Note__: A promise is always fulfilled or rejected asynchronously (even if the resolve() or reject() call is synchronous).

### Event Emitter
The EventEmitter is a built-in Node class from the events module. It is basically an Event bus, an implementation of the publish-subscribe model (commonly referred to as pub-sub). Events are fired on an EventEmitter instance at various points of interest in an application, and other parts of the application can setup handlers to listen to such events and handle them.

### Async module 
The async library is a third-party node module, that is designed to handle asynchronous operations in Node. It can work in the browser as long as the asynchronous functions follow Node.js pattern of trailing callback + error-first callback. They provide the usual iterator methods like map(), filter() etc. which accepts collections (arrays, objects and other iterables) and work in case of asynchronous iteratee methods. But mainly, they help synchronize related async operations by enabling serial execution, parallel execution etc.

## __References__  
* [Article on Promises by Eric Elliot on Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
* [Article on Promises by Jake Archibald, on Google Web Fundamentals](https://developers.google.com/web/fundamentals/primers/promises)
* [Article on async-await by Nicolas Bevacqua on PonyFoo](https://ponyfoo.com/articles/understanding-javascript-async-await)
* [The async node module site](https://caolan.github.io/async/)
