const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true,
        trim: true
    },
    mobile: {
        type: Number,
         required: true
    },
    email: {
        type: String,
        required: true,
    
    },
    query:{
        type:String,
        required:true
    }

});
module.exports = mongoose.model("contacts", contactSchema);