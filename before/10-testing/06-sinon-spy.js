/**
 * Instructions:
 * 1. Include chai and sinon. Include product module too.
 * 2. Set up product before each test.
 * 3. Write a test WITHOUT sinon to check if calling addCategory calls a callback. Define the callback with a property called that is set to false outside the callback function and true inside. This is used in the test
 * 4. Now do the same with a sinon.spy() which sets a called property to true when called.
 * 5. Again do with a sinon.spy( cb ), passing a custom callback, cb, as argument that logs returned categories to console.
 */