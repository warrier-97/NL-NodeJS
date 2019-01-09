/**
 * Mocha API:
 * describe() separates out tests into separate sections. You can nest describe when you want "sub-sections"
 * it() represents a test case
 * before(), beforeEach(), after(), afterEach() are hooks to run before/after first/each it() or describe()
 * 
 * Chai API:
 * assert, expect() and should are 3 styles for performing assertions. They are equally capable but you can choose one depending on your preference
 * assert() is TDD style and expect() and should are BDD style
 * This reference may help: https://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai
 * 
 * Note:
 * 1. By convention test names start with the word 'should'
 * You SHOULD NOT use arrow functions in Mocha as such function's context (this) will be different from the Mocha context - these functions cannot access Mocha context-specific methods like timeout() 
 * 
 * Instructions:
 * 1. Include chai. Since chai.expect ad chai.assert are used frequently, you can create variables for these.
 * 2. Also include the predicates module for testing.
 * 3. Initialize testing using should by executing chai.should()
 * 4. Create a test case for testing return value when even number is passed - use should based assertion
 * 5. Create a test suite which test return value for even and odd inputs, and TypeError in case of invalid input. Use should-based, assert-based (with assert.isFalse( value )), and expect-based styles. Note that if you need to assert that your function fn throws when passed certain arguments, then wrap a call to fn inside of another function.
 * 6. Run the tests using
 * ```
 * mocha file/or/folder
 * ```
 * 
 * ```
 * expect( wrappedFn ).to.throw( TypeError );
 * ```
 */