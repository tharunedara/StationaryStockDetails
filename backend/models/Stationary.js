const { Decimal128 } = require('mongoose');
const mongoose = require('mongoose');

require('dotenv').config({ path: '../environment.env' });

const StationerySchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model('stationery', StationerySchema);
