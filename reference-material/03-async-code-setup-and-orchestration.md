# Reference for various topics

## Popular ways to write asynchronous functions
- Accepting callback function(s)
- Using publish-subscribe pattern, i.e. emitting events from "publishers" (i.e. asynchronous functions) and having subscribers set up handlers for these events - Node has an implementation of this called Event Emitter: its advantage over callbacks is that multiple handlers can be set.
- Returning a promise - ES2015+
- Using async await construct - ES2016+
- Using Observables (eg. rxjs library) - This is used however for streams of events (called observables)
- Using third-party node modules like async.

__References__  
* [Article on Promises by Eric Elliot on Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
* [Article on Promises by Jake Archibald, on Google Web Fundamentals](https://developers.google.com/web/fundamentals/primers/promises)
* [Article on async-await by Nicolas Bevacqua on PonyFoo](https://ponyfoo.com/articles/understanding-javascript-async-await)
* [The async node module site](https://caolan.github.io/async/)
