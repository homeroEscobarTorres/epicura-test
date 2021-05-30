const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const StringSchema = require('./String');


const operationTypeSchema = new Schema({
    code: String,
    locations: [StringSchema],
    hasNotes: {type:  Boolean, default: false},
    label_it: String,
    category: String,
    visibility: [StringSchema],
    order: Number,
    createdAt: Date,
    updatedAt: Date,
    discipline: String,
    numerosity: Number,
    isStudioOnly: {type:  Boolean, default: false},
    equipment_it: String,
    id: String
});

mongoose.model('operationTypes', operationTypeSchema);