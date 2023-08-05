const mongoose = require('mongoose');

const {Schema} = mongoose;

const storeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
    
}, {timestamps:true});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;