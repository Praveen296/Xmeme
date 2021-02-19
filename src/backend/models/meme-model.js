const mongoose = require('mongoose');


//Designing the schema for Meme model
const memeSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        minlength:2
    },
    caption: {
        type:String,
        required:true,
        minlength:2
    },
    imageUrl: {
        type:String,
        required:true,
        minlength:8
    },
},
{
    timestamps : true
}); 

//Creating the model object for Meme.
const Meme = mongoose.model('Meme',memeSchema);

exports.Meme = Meme;
exports.memeSchema = memeSchema;