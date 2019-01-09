/**
 * Instructions:
 * 1. Require events module
 * 2. Write sumAsync() that accepts 2 numbers and calculates their sum asynchronously. It returns an EventEmitter instance.
 * To do this define an EventEmitter instance - trigger event 'error' on error and pass it the error object. Trigger event 'sum' when sum is available, passing the result. Additionally trigger 'start' and 'end' with the current date (new Date()) before timer is started and once timer finishes execution respectively.
 * 3. Call sumAsync() and use the EventEmitter instance to handle various events fired, using the on() method to setup handlers.
 * 4. Also try removing an event listener using removeListener and verify it works
 * 5. The 'error' event is a special event in the context of event emitters. If it isn't handled Node will throw an error. Verify this.
 */