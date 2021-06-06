const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const bookSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category : {
        type:String,
        required:true 
    },
    createdOn: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Book',bookSchema)