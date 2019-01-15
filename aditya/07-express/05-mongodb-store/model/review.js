const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    "productId": {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    "createdDate":{
        type:Date,
        default:Date.now
    },
    "reviewer":
    {
        type:String,
        required:true
    },
    "starRating":{
        type:Number,
        required:true
    },
    "title":{
        type:String
    },
    "text": {
        type:String
    }
    
})

mongoose.model('Review',reviewSchema)