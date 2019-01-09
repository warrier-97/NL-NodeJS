var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    starRating: {
        type: Number,
        min: 0
    },
    imageUrl: {
        type: String
    },
    category: {
        type: String,
        enum: {
            values: [ 'electronics', 'clothing', 'books', 'others' ],
            required: false,
            message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
        }
    }
});

module.exports = {
    schema: productSchema,
    model: mongoose.model('Product', productSchema)
};