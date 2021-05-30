const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const disciplinaSchema = new Schema({
    id: String
});

mongoose.model('discipline', disciplinaSchema);