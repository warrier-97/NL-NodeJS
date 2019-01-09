/**
 * Mocha passes a function (usually named done) to the callback of it(). The done function can be called once the test case is deemed complete.
 * If the done callback is accepted as argument in the it() callback, Mocha waits on the test till the done callback gets called (there is a default timeout for a test case though). This is useful if the test case performs asynchronous operations. We perform the asynchronous operation and call done after testing whatever we needed to after the asynchronous operaton completed.
 */
'use strict';

const chai = require( 'chai' );

const sumAsync = require( './modules/arithmetic' ).sumAsync;

chai.should();

describe( 'test sumAsync function', function() {
    var num;

    beforeEach(function() {
        num = 5;
    });

    it( 'should return 10 asynchronously when 5 is added to num', function( done ) {
        sumAsync( num, 5, function( result ) {
            num = result;
            num.should.equal( 10 );
            done();
        });
    });

    it( 'should return 15 when 10 is added to num', function( done ) {
        sumAsync( num, 10, function( result ) {
            result.should.equal( 15 );
            done();
        });
    });
});