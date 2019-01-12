const mongoose  = require('mongoose')

const productSchema = new mongoose.Schema({
        //"id": Number,
        "name": {
            type:String,
            required:true
        },
        "code": {
            type:String,
            required:true
        },
        "releaseDate": {
            type:Date,
            default:Date.now
        },
        "description": String,
        "price": {
            type:Number,
            required:true
        },
        "starRating": Number,
        "imageUrl": String
});

mongoose.model('Product',productSchema) //Creates a Product Model (class) by convention capital in name
//mongoose.model('Prduct') // Getting hold of the class

