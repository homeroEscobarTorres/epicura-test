const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const stringSchema = new Schema({
   string: String 
});

mongoose.model('strings', stringSchema);
