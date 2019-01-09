'use strict';

const chai = require( 'chai' );

const sum = require( './modules/arithmetic' ).sum;

chai.should();

describe( 'test sum function (incorrect setup for demo)', function() {
    var num = 5;

    it( 'should return 10 when 5 is added to num', function() {
        num = sum( num, 5 ); // note that we have modified num here - not a good practice as it affects other tests
        num.should.equal( 10 );
    });

    it( 'should return 15 when 10 is added to num', function() {
        sum( num, 10 ).should.equal( 15 );
    });
});

describe( 'test sum function (correct setup for demo)', function() {
    var num;

    // setup test case using beforeEach()
    // the function passed to beforeEach() runs right before each test case runs (i.e. before it() executes its test case)
    beforeEach(function() {
        num = 5;
    });

    // Exercise: There is a function afterEach() that executes right after every test case runs. Explore this.

    it( 'should return 10 when 5 is added to num', function() {
        num = sum( num, 5 ); // note that we have modified num here - though this is not a good practice, the setup method ensures we start from a common baseline each time
        num.should.equal( 10 );
    });

    it( 'should return 15 when 10 is added to num', function() {
        sum( num, 10 ).should.equal( 15 );
    });
});