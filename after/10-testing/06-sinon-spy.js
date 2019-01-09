const chai = require( 'chai' ),
      expect = chai.expect;
const sinon = require( 'sinon' );

const Product = require( './modules/product' );

chai.should();

describe( 'tests without sinon', function() {
    let product;

    beforeEach(function() {
        product = new Product( 1, 'Parachute Coconut Oil', [ 'Oils' ] );
    });
    
    describe( 'product.addCategory tests', function() {
        it( 'should call the callback after adding category to product', function() {
            let called = false;
            
            function done() {
                called = true;
            }
            
            product.addCategory( 'Hair Care', done );
            expect( called ).to.be.true;
        });
    });
});

describe( 'tests with sinon', function() {
    let product;

    beforeEach(function() {
        product = new Product( 1, 'Parachute Coconut Oil', [ 'Oils' ] );
    });

    describe( 'product.addCategory tests', function() {
        it( 'should call a callback after adding category to product', function() {
            let done = sinon.spy();
            
            product.addCategory( 'Hair Care', done );
            done.called.should.be.true; // the spy has a called property indicating whether it has been called
        });

        it( 'should call a callback, which logs passed categories to console, after adding category to product', function() {
            function logCategories( categories ) {
                console.log( 'categories = ', categories );
            }
            
            let done = sinon.spy( logCategories ); // pass the specific callback to be called
            
            product.addCategory( 'Hair Care', done );
            done.called.should.be.true;
        });
    });
});