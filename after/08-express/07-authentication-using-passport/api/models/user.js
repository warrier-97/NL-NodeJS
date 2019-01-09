let mongoose = require( 'mongoose' );

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        message: 'Invalid login credentials'
    },
    password: {
        type: String,
        required: true,
        message: 'Invalid login credentials'
    }
});

module.exports = {
    schema: userSchema,
    model: mongoose.model('User', userSchema)
};