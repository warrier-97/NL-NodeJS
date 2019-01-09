/**
 * Mocha passes a function (usually named done) to the callback of it(). The done function can be called once the test case is deemed complete.
 * If the done callback is accepted as argument in the it() callback, Mocha waits on the test till the done callback gets called (there is a default timeout for a test case though). This is useful if the test case performs asynchronous operations. We perform the asynchronous operation and call done after testing whatever we needed to after the asynchronous operaton completed.
 * 
 * Instructions:
 * Write tests for sumAsync(). Accept a done callback in the testing function and call it once the asynchronous task is over. Test the following
 * 1. test sumAsync function
 *      a) should return 10 asynchronously when 5 is added to num
 *      b) should return 15 when 10 is added to num
 */