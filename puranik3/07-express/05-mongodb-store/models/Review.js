const mongoose = require( 'mongoose' );
    
const reviewSchema = new mongoose.Schema({
    // _id or id is not required (it will be auto-generated)
    productId: { // like foreign key
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    reviewer: { // required
        type: String,
        required: true
    },
    text: { // required
        type: String,
        required: true
    },
    title: String, // optional
    starRating: {  // required - is a number
        type: Number,
        required: true
    }
});

mongoose.model( 'Review', reviewSchema );
